import executeQuery from './executeQuery';
import getBBox from '@turf/bbox';
import mapRasterLoader from './mapRasterLoader';
import filterUnitedStates from './filterUnitedStates';
/**
 * @param queryInfo
 *    region: STR,
 *    subregion: STR, // optional
 *    [roads] : ARRAY(STR IN [motorway, trunk, primary, secondary, tertiary, unclassified, residential, surface, ...])
 * @returns {Promise.<*>}
 */
export default async function (queryInfo) {
	if (!queryInfo || !queryInfo.region) {
		throw new Error(`Invalid query info:\n${JSON.stringify(queryInfo)}`);
	} else {
		const promises = [
			executeQuery(getPrimaryRegionQuery(queryInfo)),
			executeQuery(getSecondaryRegionsQuery(queryInfo)),
		];

		if (queryInfo.roads?.length) {
			promises.push(executeQuery(getRoadsQuery(queryInfo)));
		}

		let [boundary, regions, roads] = await Promise.all(promises);

		boundary = {
			type: 'FeatureCollection',
			features: [{ type: 'Feature', geometry: JSON.parse(boundary[0].geojson) }],
		};
		regions = {
			type: 'FeatureCollection',
			features: regions.map(({ name, geojson }) => {
				return { type: 'Feature', geometry: JSON.parse(geojson), properties: { name } };
			}),
		};

		const roadTypesMap = new Map();
		for (const road of roads) {
			const { speed, type } = road;
			const geometry = JSON.parse(road.geojson);
			if (geometry.type === 'Point') {
				continue;
			}

			const key = speed || type;
			if (roadTypesMap.get(key)) {
				roadTypesMap.get(key).geometry.geometries.push(geometry);
			} else {
				const properties = {};
				if (speed) {
					properties.speed = parseInt(speed);
				}
				properties.type = road.type;

				roadTypesMap.set(key, {
					type: 'Feature',
					properties,
					geometry: {
						type: 'GeometryCollection',
						geometries: [geometry],
					},
				});
			}
		}

		roads = { type: 'FeatureCollection', features: [] };
		for (const [, feature] of roadTypesMap) {
			roads.features.push(feature);
		}

		if (queryInfo.region === 'United States' && !queryInfo.subregion) {
			[boundary, regions, roads] = filterUnitedStates(boundary, regions, roads);
		}

		let bbox = getBBox(boundary);
		// [minLong, maxLat, maxLong, minLat]
		bbox = [bbox[0], bbox[3], bbox[2], bbox[1]];

		const raster = await mapRasterLoader(bbox, 'population_density');
		// console.log('boundary', JSON.stringify(boundary).length, boundary);
		// console.log('regions', JSON.stringify(regions).length, regions);
		// console.log('roads', JSON.stringify(roads).length, roads);
		return {
			boundary,
			regions,
			roads,
			bbox,
			raster,
		};
	}
}

function getRoadsQuery(queryInfo) {
	if (queryInfo.subregion) {
		return `
			WITH outer_area as (
				SELECT geometry
				FROM osm.admin
				WHERE name_en='${queryInfo.region}'
			),
			bounding_area AS (
				SELECT admin.geometry
				FROM osm.admin admin, outer_area
				WHERE admin_level = 4
					AND ST_CONTAINS(outer_area.geometry, admin.geometry)
					AND COALESCE(name_en, name) = '${queryInfo.subregion}'
			)
			SELECT ST_ASGEOJSON(roads.simplified_geometry) geojson, road_type type, road_speed speed
			FROM osm.roads, bounding_area
			WHERE road_type IN (${queryInfo.roads.map((roadType) => `'${roadType}'`)})
			  AND ST_DWithin(bounding_area.geometry, roads.simplified_geometry, 0)
			  AND ST_NUMPOINTS(roads.simplified_geometry) > 1
		`;
	} else {
		return `
			WITH bounding_area as (
				SELECT simplified_geometry from admin
				WHERE name_en='${queryInfo.region}'
			)
			SELECT 
				ST_ASGEOJSON(roads.simplified_geometry) geojson, 
				road_type type, 
				road_speed speed
			FROM roads, bounding_area
			WHERE road_type IN (${queryInfo.roads.map((roadType) => `'${roadType}'`)})
			  AND ST_DWithin(bounding_area.simplified_geometry, roads.simplified_geometry, 0)
			  AND ST_NUMPOINTS(roads.simplified_geometry) > 1`;
	}
}

function getPrimaryRegionQuery(queryInfo) {
	if (queryInfo.subregion) {
		return `
			WITH bounding_area as (
				SELECT geometry FROM osm.admin
				WHERE admin_level=2
					AND name_en='${queryInfo.region}'
			)
			SELECT ST_ASGEOJSON(admin.simplified_geometry) geojson
			FROM admin, bounding_area
			WHERE admin_level = 4
				AND ST_CONTAINS(bounding_area.geometry, admin.geometry) 
				AND COALESCE(name_en, name) = '${queryInfo.subregion}'
		`;
	} else {
		return `
			SELECT ST_ASGEOJSON(admin.simplified_geometry) geojson
			FROM admin
			WHERE admin_level = 2 
				AND COALESCE(name_en, name) = '${queryInfo.region}'
		`;
	}
}

function getSecondaryRegionsQuery(queryInfo) {
	if (queryInfo.subregion) {
		return `
			WITH outer_area as (
				SELECT geometry
				FROM osm.admin
				WHERE admin_level=2
					AND name_en='${queryInfo.region}'
			),
			bounding_area AS (
				SELECT admin.geometry
				FROM osm.admin admin, outer_area
				WHERE ST_CONTAINS(outer_area.geometry, admin.geometry)
					AND admin_level=4
					AND COALESCE(name_en, name) = '${queryInfo.subregion}'
			)
			SELECT COALESCE(name_en, name) AS name, ST_ASGEOJSON(admin.simplified_geometry) geojson
			FROM osm.admin admin, bounding_area
			WHERE admin_level = 6
			  AND ST_CONTAINS(bounding_area.geometry, admin.geometry) 
			  AND ST_NUMPOINTS(admin.simplified_geometry) > 1
		`;
	} else {
		return `
			WITH bounding_area as (
				SELECT geometry
				FROM osm.admin
				WHERE admin_level=2
					AND name_en='${queryInfo.region}'
			)
			SELECT COALESCE(name_en, name) AS name, ST_ASGEOJSON(admin.simplified_geometry) geojson
			FROM osm.admin, bounding_area
			WHERE admin_level = 4
			  AND ST_CONTAINS(bounding_area.geometry, admin.geometry)
			  AND ST_NUMPOINTS(admin.simplified_geometry) > 1
		`;
	}
}
