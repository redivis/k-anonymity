const datasetsCache = {};

export default async function listVersions(dataset) {
	const preloadedVersions = datasetsCache[dataset.name.toLowerCase()];
	if (preloadedVersions){
		return preloadedVersions;
	} else {
		let loadedVersions = [];
		try {
			const response = await dataset.listVersions();
			console.log('listVersions response', response);
			loadedVersions = response;
			datasetsCache[dataset.name.toLowerCase()] = loadedVersions;
		} catch (e){
			console.error('Could not list versions')
		}
		return loadedVersions;
	}
}
