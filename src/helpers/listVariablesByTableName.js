const datasetsCache = {};

export default async function listVariablesByTableName(table, tables) {
	const preloadedVariablesByTableName = datasetsCache[table.dataset.uri];
	if (preloadedVariablesByTableName){
		return preloadedVariablesByTableName;
	} else {
		let loadedVariablesByTableName = {};
		try {
			const variableArrays = await Promise.all(tables.map((datasetTable) => datasetTable.listVariables()));
			console.log('listVariables response', variableArrays);
			for (let i = 0; i < variableArrays.length; i++){
				loadedVariablesByTableName[tables[i].name] = variableArrays[i];
			}
			datasetsCache[table.dataset.uri] = loadedVariablesByTableName;
		} catch (e){
			console.error('Could not list variables')
		}
		return loadedVariablesByTableName;
	}
}
