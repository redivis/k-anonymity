const datasetsCache = {};

export default async function listTables(dataset) {
	const preloadedTables = datasetsCache[dataset.uri];
	if (preloadedTables){
		return preloadedTables;
	} else {
		let loadedTables = [];
		try {
			const response = await dataset.listTables();
			console.log('listTables response', response);
			loadedTables = response;
			datasetsCache[dataset.uri] = loadedTables;
		} catch (e){
			console.error('Could not list tables')
		}
		return loadedTables;
	}
}