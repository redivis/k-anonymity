import { query } from 'redivis';

import tableHasVariable from 'helpers/tableHasVariable';

const SAMPLE_PERCENT = 1;

function getRiskQuery(variable, quasiIdentifiers, variablesByTableName, table, tables, dataset, organizationIdentifier){
	console.log(
		variable,
		quasiIdentifiers,
		variablesByTableName,
		table,
		tables,
		dataset,
		organizationIdentifier
	);
	if (quasiIdentifiers.length === 0) return null;
	const persistentVariableName = variable.name;

	const matchedTables = tables.filter((matchedTable) => {
		if (table.name === matchedTable.name) return false;
		if (tableHasVariable(variable, matchedTable, variablesByTableName)) return true;
		return false;
	})

	// TODO: figure out structure of quasiIdentifiers, identifiersForTable


	const filteredMatchedTables = matchedTables.filter((matchedTable) => {
		return quasiIdentifiers.some((quasiIdentifier) =>
			quasiIdentifier.tables.some((quasiIdentifierTable) => quasiIdentifierTable.name === matchedTable.name)
		);
		// return quasiIdentifiers.find(({table_name, name}) => {
		// 	return allVariablesMap.get(`${table_name.replace(/\W+/g, '_')}.${name.toLowerCase()}`).table === table
		// });
	})
	console.log('matched/filtered matched tables', matchedTables, filteredMatchedTables);

	const INT64_MIN = (2 ** 64 / 2) * -1;

	const qualifiedDataset = `${organizationIdentifier.replace(/\W+/g, '_')}.${dataset.name.replace(/\W+/g, '_')}`
	const escapedTableIdentifier = table.name.replace(/\W+/g, '_')

	const identifiersForTable = quasiIdentifiers.filter(({table_name}) => table_name === escapedTableIdentifier);

	const sampleClause = `
		WHERE FARM_FINGERPRINT(CAST(${persistentVariableName} AS STRING)) < ${INT64_MIN + 2 ** 64 / 100 * SAMPLE_PERCENT}
	`;

	return `SELECT 1+1 FROM ${qualifiedDataset}.${escapedTableIdentifier}`;

	return `
		SELECT
			SUM(group_size) record_count,
			CASE 
				WHEN group_size <= 10 THEN CAST(group_size AS STRING)
				WHEN group_size >10 AND group_size <= 15 THEN '(10,15]'
				WHEN group_size >15 AND group_size <= 20 THEN '(15,20]'
				ELSE '>20' 
			END as bucket
		FROM (
		SELECT
			COUNT(DISTINCT ${persistentVariableName}) AS group_size ${identifiersForTable.length + quasiIdentifiers.length ? ',' : ''}
			${
				quasiIdentifiers
					.map(({table_name, name}) => `${table_name}.${name}`)
					.join(', ')
			} 
		  
			FROM (
				SELECT 
					${persistentVariableName} ${identifiersForTable.length ? ', ' + identifiersForTable.map(({name}) => name).join(', ') : ''}
				FROM ${qualifiedDataset}.${escapedTableIdentifier}
				${sampleClause}
				GROUP BY 
					${persistentVariableName} ${identifiersForTable.length ? ', ' +  identifiersForTable.map(({name}) => name).join(', ') : ''}
			) AS ${escapedTableIdentifier}
		  
			${filteredMatchedTables
				.map(({name: tableName}) => {
					tableName = tableName.replace(/\W+/g, '_')
					const identifiersForTable = quasiIdentifiers.filter(({table_name}) => table_name === tableName);
					return `
						LEFT JOIN (
							SELECT 
								${persistentVariableName},  ${identifiersForTable.map(({name}) => name).join(', ')}
							FROM ${qualifiedDataset}.${tableName}
							${sampleClause}
							GROUP BY 
								${persistentVariableName}, ${identifiersForTable.map(({name}) => name).join(', ')}
						) AS ${tableName} 
						USING(${persistentVariableName})
					`;
				})
				.join('\n')
			}
		  
			GROUP BY ${
				quasiIdentifiers
					.map(({table_name, name}) => `${table_name}.${name}`)
				.join(',')
			}
	)t
	  
	  GROUP BY bucket
	`;
}

const sampleData = [
	{ bucket: 5, record_count: 1000 },
	{ bucket: 6, record_count: 1000 },
	{ bucket: 7, record_count: 1000 },
	{ bucket: 8, record_count: 1000 },
	{ bucket: 9, record_count: 1000 },
	{ bucket: '(10, 15]', record_count: 1000 },
	{ bucket: '(15, 20]', record_count: 1000 },
	{ bucket: '>20', record_count: 1000 },
]

export default async function computeRisk(variable, quasiIdentifiers, variablesByTableName, table, tables, dataset, organizationIdentifier) {
	return sampleData;
	const riskQuery = getRiskQuery(variable, quasiIdentifiers, variablesByTableName, table, tables, dataset, organizationIdentifier);
	console.log('riskQuery', riskQuery);
	const queryResponse = await query(riskQuery).listRows();
	return queryResponse;
}
