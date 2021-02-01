import executeQuery from './executeQuery';

export default async function getSublevels(sublevels, boundaryStringArray, topologyMap) {
	for (const level of sublevels) {
		const query =
			`[out:json];(${boundaryStringArray.reduce((totalString, str) => {
				return `${totalString}relation ["boundary"]["admin_level"="${level}"]${str}; `;
			}, '')});` +
			`(._;>;);` +
			`out body;`;

		topologyMap[`adminLevel_${level}`] = await executeQuery(query);
	}
}
