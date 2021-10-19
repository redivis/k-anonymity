export default async function listVersions(dataset) {
	let loadedVersions = [];
	try {
		const response = await dataset.listVersions();
		console.log('listVersions response', response);
		loadedVersions = response;
	} catch (e){
		console.error(e)
	}
	return loadedVersions;
}
