import * as osmtogeojson from 'osmtogeojson';
import retryableFetch from '../../helpers/retryableFetch';
import * as cache from '../../helpers/cache';
const overpassApis = [
	'https://lz4.overpass-api.de/api/interpreter',
	'https://z.overpass-api.de/api/interpreter',
	// 'http://overpass-api.de/api/interpreter',
	// 'http://overpass.openstreetmap.fr/api/interpreter',
	// 'http://overpass.osm.rambler.ru/cgi/interpreter',
];

export default async function executeQuery(query) {
	let type;

	const cachedResponse = await cache.get(query);

	if (cachedResponse) {
		console.info('got cache');
		return cachedResponse;
	}

	if (query.indexOf('relation') > -1) {
		type = 'relation';
	} else if (query.indexOf('way') > -1) {
		type = 'way';
	} else {
		type = 'node';
	}

	const overpassApiEndpoint = overpassApis[Math.floor(Math.random() * overpassApis.length)];

	const res = await retryableFetch(overpassApiEndpoint, { method: 'POST', body: query });

	if (res.ok) {
		const responseBody = await res.text();
		if (responseBody.length < 1e4) {
			console.info('received small response');
			// console.info(query);
			console.info('======================');
			console.info(responseBody);
			console.info('======================');
			const geojson = { type: 'FeatureCollection', features: [] };
			await cache.set(query, geojson);
			return geojson;
		}
		const geojson = osmtogeojson(JSON.parse(responseBody));
		geojson.features = geojson.features.filter((feature) => {
			return feature.id.indexOf(type) > -1;
		});
		console.log(geojson);
		await cache.set(query, geojson);
		return geojson;
	} else {
		if (res.statusCode === 429) {
			alert(
				`Request failed, HTTP Status ${res.statusCode}. OSM is currently rate-limiting this IP; try again soon.`,
			);
		} else {
			alert(`OSM Request failed, HTTP Status ${res.statusCode}.`);
		}
	}
}
