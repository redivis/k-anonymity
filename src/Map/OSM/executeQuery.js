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

const pendingQueryMap = new Map();

export default async function executeQuery(query) {
	let type;

	const cachedResponse = await cache.get(query);

	if (cachedResponse) {
		return cachedResponse;
	}

	if (pendingQueryMap.get(query)) {
		return new Promise((resolve, reject) => {
			pendingQueryMap.get(query).push(resolve);
		});
	} else {
		pendingQueryMap.set(query, []);
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
		let geojson;
		if (responseBody.length < 1e4) {
			console.info('received small response');
			// console.info(query);
			console.info('======================');
			console.info(responseBody);
			console.info('======================');
			geojson = { type: 'FeatureCollection', features: [] };
		} else {
			geojson = osmtogeojson(JSON.parse(responseBody));
			geojson.features = geojson.features.filter((feature) => {
				return feature.id.indexOf(type) > -1;
			});
		}

		await cache.set(query, geojson);
		const pendingQueries = pendingQueryMap.get(query);
		for (const cb of pendingQueries) {
			cb(geojson);
		}
		pendingQueryMap.delete(query);
		return geojson;
	} else {
		const error = await res.text();
		throw new Error(error);
		// if (res.status === 429) {
		// 	alert(`Request failed, HTTP Status ${res.status}. OSM is currently rate-limiting this IP; try again soon.`);
		// } else {
		// 	alert(`OSM Request failed, HTTP Status ${res.status}.`);
		// }
	}
}
