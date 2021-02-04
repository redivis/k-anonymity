import retryableFetch from './retryableFetch';
import { getCredentials, login, logout } from './auth';

export default async function (parentEntityReference) {
	let token = getCredentials();
	if (!token) {
		throw new Error('Not logged in');
	}
	let tablesResponse = await retryableFetch(`https://redivis.com/api/v1/datasets/${parentEntityReference}/tables`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	if (tablesResponse.status === 401) {
		logout();
	} else if (tablesResponse.status === 404) {
		tablesResponse = await retryableFetch(`https://redivis.com/api/v1/projects/${parentEntityReference}/tables`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (tablesResponse.status === 401) {
			logout();
		}
	}

	tablesResponse = await tablesResponse.json();

	if (tablesResponse.error) {
		throw new Error(
			`An error occurred when fetching tables. ${tablesResponse.error.message}: ${tablesResponse.error.description}`,
		);
	}

	return tablesResponse.results;
}
