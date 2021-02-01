import * as topojson from 'topojson';
import * as topojsonClient from 'topojson-client';
import retryableFetch from '../../helpers/retryableFetch';

import buildTopology from './buildTopology';
import getRoads from './getRoads';
import executeQuery from './executeQuery';
import getBoundaryStringArray from './getBoundaryStringArray';
import mapRasterLoader from './mapRasterLoader';
import getSublevels from './getSublevels';
import * as cache from '../../helpers/cache';

/**
 * @param queryInfo
 *    region: STR,
 *    subregion: STR, // optional
 *    roadsFromOtherRegions: ARR(STR region) -> to include nearby roads
 *    [roads] : ARRAY(STR IN [motorway, trunk, primary, secondary, tertiary, unclassified, residential, surface, ...])
 * @returns {Promise.<*>}
 */
export default async function (queryInfo) {
	if (queryInfo && queryInfo.region && queryInfo.region.indexOf('.json') > -1) {
		const name = queryInfo.region.split('.json')[0];
		let topology = await retryableFetch(`/assets/topojson/${name}/topology.json`);

		topology = await topology.json();
		topology.rasters = [];

		topology.info = await retryableFetch(`/assets/topojson/${name}/info.json`);
		topology.info = await topology.info.json();

		const topologyMap = {};

		for (const k in topology.objects) {
			topologyMap[`feature_${k}`] = topojsonClient.feature(topology, topology.objects[k]);
			topologyMap.boundary = topojson.mesh(topology, topology.objects[k], (a, b) => {
				return a === b;
			});
		}

		if (queryInfo.roads) {
			const boundaryStringArray = getBoundaryStringArray(topologyMap.boundary);

			await getRoads(queryInfo.roads, boundaryStringArray, topologyMap);
		}

		topology = buildTopology(topologyMap);

		topology.objects.boundary = {
			geometries: [
				{
					arcs: topology.objects.boundary.arcs,
					type: 'Polygon',
				},
			],
			type: 'GeometryCollection',
		};

		topology.rasters = await mapRasterLoader(topology.bbox, ['population_density']);

		return topology;
	} else if (!queryInfo || !queryInfo.region) {
		throw new Error(`Invalid query info:\n${JSON.stringify(queryInfo)}`);
	} else {
		const adminLevel = queryInfo.subregion ? 4 : 2;
		const subLevels = queryInfo.subregion ? [6] : [4];
		const topologyMap = {};
		let boundaryQuery = '[out:json];';

		if (queryInfo.subregion) {
			boundaryQuery += `area[name="${queryInfo.region}"];(`;
		}
		boundaryQuery += `relation ["boundary"] ["admin_level"="${adminLevel}"][~"^name"~"^${
			queryInfo.subregion || queryInfo.region
		}$"]`;

		if (queryInfo.subregion) {
			boundaryQuery += `(area);(._;>;););out;`;
		} else {
			boundaryQuery += '; (._;>;); out body;';
		}

		const res = await executeQuery(boundaryQuery);

		if (res.features.length === 0) {
			await cache.unset(boundaryQuery);
			throw new Error('OSM returned an empty response');
		}

		let boundaryStringArray;

		topologyMap.boundary = res;

		boundaryStringArray = getBoundaryStringArray(topologyMap.boundary);

		await getSublevels(subLevels, boundaryStringArray, topologyMap);
		await getRoads(queryInfo.roads, boundaryStringArray, topologyMap);

		let topology;
		if (queryInfo.roadsFromOtherRegions) {
			topology = buildTopology(JSON.parse(JSON.stringify(topologyMap)));
		} else {
			topology = buildTopology(topologyMap);
		}
		const rasters = await mapRasterLoader(topology.bbox, ['population_density']);

		if (queryInfo.roadsFromOtherRegions) {
			console.info(`other regions: ${queryInfo.roadsFromOtherRegions}`);

			for (const region of queryInfo.roadsFromOtherRegions) {
				console.info(`getting roads for ${region}`);
				let regionBoundaryQuery = '[out:json];';

				if (queryInfo.subregion) {
					regionBoundaryQuery += `area[name="${queryInfo.region}"];(`;
				}
				regionBoundaryQuery += `relation ["boundary"] ["admin_level"="${adminLevel}"][~"^name"~"^${region}$"]`;

				if (queryInfo.subregion) {
					regionBoundaryQuery += `(area);(._;>;););out;`;
				} else {
					regionBoundaryQuery += '; (._;>;); out body;';
				}
				const boundaryQueryResponse = await executeQuery(regionBoundaryQuery);

				if (res.features.length === 0) {
					await cache.unset(regionBoundaryQuery);
					throw new Error('OSM returned an empty response');
				}
				console.info(`got boundary for ${region}`);

				const boundaryStringArray = getBoundaryStringArray(boundaryQueryResponse);
				await getRoads(queryInfo.roads, boundaryStringArray, topologyMap, region);
				console.info(`got roads for ${region}`);
			}
			topology = buildTopology(topologyMap);
		}

		topology.rasters = rasters;

		return topology;
	}
}
