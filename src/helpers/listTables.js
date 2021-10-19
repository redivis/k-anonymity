export default async function listTables(dataset) {
	let loadedTables = [];
	try {
		const response = await dataset.listTables();
		console.log('listTables response', response);
		loadedTables = response;
	} catch (e){
		console.error(e)
	}
	return loadedTables;
}