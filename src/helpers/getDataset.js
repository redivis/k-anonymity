import { organization } from 'redivis';

const datasetsCache = {};

export default async function getDataset(dataset, { version } = {}) {
	const preloadedDataset = datasetsCache[dataset.uri]
	if (preloadedDataset){
		return preloadedDataset;
	} else {
		let loadedDataset = null;
		try {
			const response = await organization(dataset.organization.name).dataset(dataset.name, { version }).get();
			console.log('getDataset response', response);
			loadedDataset = response;
			datasetsCache[dataset.uri] = loadedDataset;
		} catch (e){
			console.error('Could not get dataset')
		}
		return loadedDataset;
	}
}
