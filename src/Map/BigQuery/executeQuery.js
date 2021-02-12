import getAccessToken from './getAccessToken';
import * as cache from '../../helpers/cache';

const queue = new Map();

export default async function executeQuery(query) {
	try {
		if (queue.has(query)) {
			return new Promise((resolve, reject) => {
				queue.get(query).push([resolve, reject]);
			});
		} else {
			queue.set(query, []);
		}

		const accessToken = await getAccessToken(query);

		const hash = await getTableHash(accessToken);

		const cachedResponse = await cache.get(`${hash}_${query}`);

		if (cachedResponse) {
			for (const [resolve] of queue.get(query)) {
				resolve(cachedResponse);
			}
			queue.delete(query);
			return cachedResponse;
		}

		const queryJob = {
			configuration: {
				query: {
					query,
					defaultDataset: { datasetId: 'osm', projectId: 'geo-coverage' },
					useQueryCache: true,
					useLegacySql: false,
				},
			},
		};

		const res = await fetch(`https://bigquery.googleapis.com/bigquery/v2/projects/geo-coverage/jobs`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(queryJob),
		});
		let job = await res.json();
		if (job.error) {
			console.error(job);
			throw new Error(job.error.message);
		}
		while (job.status.state !== 'DONE') {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			const res = await fetch(
				`https://bigquery.googleapis.com/bigquery/v2/projects/geo-coverage/jobs/${job.jobReference.jobId}`,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			);
			job = await res.json();
		}

		if (job.status.errorResult) {
			console.error(job);
			throw new Error(job.status.errorResult.message);
		}
		if (job?.statistics?.totalBytesProcessed > 1e9) {
			console.log('Expensive query!', `${Math.round(job?.statistics?.totalBytesProcessed / 1e8) / 10}GB`);
		}
		const results = await getResults(job.jobReference.jobId, accessToken);
		await cache.set(`${hash}_${query}`, results);
		for (const [resolve] of queue.get(query)) {
			resolve(results);
		}
		queue.delete(query);
		return results;
	} catch (e) {
		for (const [resolve, reject] of queue.get(query)) {
			reject(e);
		}
		queue.delete(query);
		throw e;
	}
}

async function getResults(jobId, accessToken) {
	const rows = [];
	const res = await fetch(
		`https://bigquery.googleapis.com/bigquery/v2/projects/geo-coverage/queries/${jobId}?maxResults=1000`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		},
	);
	let results = await res.json();
	if (results.error) {
		console.error(results);
		throw new Error(results.error.message);
	}
	if (parseInt(results.totalRows) === 0) {
		return [];
	}
	rows.push(...results.rows);

	while (results.pageToken) {
		const res = await fetch(
			`https://bigquery.googleapis.com/bigquery/v2/projects/geo-coverage/queries/${jobId}?maxResults=1000&pageToken=${results.pageToken}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
		);
		results = await res.json();
		rows.push(...results.rows);
	}
	return rows.map((row) => {
		const fieldHash = {};
		for (let i = 0; i < row.f.length; i++) {
			fieldHash[results.schema.fields[i].name] = row.f[i].v;
		}
		return fieldHash;
	});
}

async function getTableHash(accessToken) {
	const [etag1, etag2] = await Promise.all([
		fetch(`https://bigquery.googleapis.com/bigquery/v2/projects/geo-coverage/datasets/osm/tables/admin`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
			.then((res) => res.json())
			.then((res) => res.etag),
		fetch(`https://bigquery.googleapis.com/bigquery/v2/projects/geo-coverage/datasets/osm/tables/roads`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
			.then((res) => res.json())
			.then((res) => res.etag),
	]);
	return `${etag1}_${etag2}`;
}
