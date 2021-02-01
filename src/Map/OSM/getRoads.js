import executeQuery from './executeQuery';
import retryableFetch from '../../helpers/retryableFetch';

export default async function getRoads(roads, boundaryStringArray, topologyMap, regionName) {
	const parallelTasks = [];
	for (let roadType of roads) {
		if (roadType.indexOf('.json') > -1) {
			roadType = roadType.split('.json')[0];
			parallelTasks.push(
				retryableFetch(`assets/topojson/${roadType}/features.json`).then(async (res) => {
					res = await res.json();
					topologyMap[`roads_${roadType}_${regionName ? regionName : ''}`] = res;
				}),
			);
		} else {
			const query =
				`[out:json];(${boundaryStringArray.reduce((totalString, str) => {
					return `${totalString}way ["highway"="${roadType}"]${str}; `;
				}, '')});` +
				`(._;>;);` +
				`out body;`;

			parallelTasks.push(
				executeQuery(query).then((res) => {
					topologyMap[`roads_${roadType}_${regionName ? regionName : ''}`] = res;
				}),
			);
		}
	}
	await Promise.all(parallelTasks);
}
