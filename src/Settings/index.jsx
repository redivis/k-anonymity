import PropTypes from 'prop-types';
import React, { useCallback, useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton';

import getDataset from '../helpers/getDataset';
import listDatasets from '../helpers/listDatasets';
import listVersions from '../helpers/listVersions';
import listTables from '../helpers/listTables';
import listVariablesByTableName from '../helpers/listVariablesByTableName';
import tableHasVariable from '../helpers/tableHasVariable';

import * as styles from './styles.css';

function formatQuasiIdentifiers(variable, table, tables, variablesByTableName){
	let quasiIdentifiers = [];

	for (let datasetTable of tables){
		if (variable ? !tableHasVariable(variable, datasetTable, variablesByTableName) : table.name !== datasetTable.name) continue;

		for (const datasetTableVariable of (variablesByTableName[datasetTable.name] || [])){
			if (variable && datasetTableVariable.name.toLowerCase() === variable.name.toLowerCase()) continue;
			quasiIdentifiers.push(({ variable: datasetTableVariable, table: datasetTable }))
		}
	}

	return quasiIdentifiers;
}

export default function Settings({
	isUserAuthorized,
	onAuthorize,
	onDeauthorize,
	owner,
	setOwner,
	dataset,
	setDataset,
	datasets,
	setDatasets,
	version,
	setVersion,
	versions,
	setVersions,
	table,
	setTable,
	tables,
	setTables,
	variable,
	setVariable,
	variables,
	setVariables,
	selectedQuasiIdentifiers,
	setSelectedQuasiIdentifiers,
	variablesByTableName,
	setVariablesByTableName,
	onCalculateRisk,
}) {
	const [isDatasetsOpen, setIsDatasetsOpen] = useState(false);
	const isDatasetsLoading = isDatasetsOpen && datasets.length === 0;

	const [isVersionsOpen, setIsVersionsOpen] = useState(false);
	const isVersionsLoading = isVersionsOpen && versions.length === 0;

	const [isTablesOpen, setIsTablesOpen] = useState(false);
	const isTablesLoading = isTablesOpen && tables.length === 0;

	const [isVariablesOpen, setIsVariablesOpen] = useState(false);
	const isVariablesLoading = isVariablesOpen && variables.length === 0;

	const [filteredQuasiIdentifiers, setFilteredQuasiIdentifiers] = useState([])
	const [isQuasiIdentifiersOpen, setIsQuasiIdentifiersOpen] = useState(false);
	const isQuasiIdentifiersLoading = isQuasiIdentifiersOpen && filteredQuasiIdentifiers.length === 0;

	const [isCalculatingRisk, setIsCalculatingRisk] = useState(false);

	useEffect(() => {
		let active = true;

		if (!isDatasetsLoading) {
			return undefined;
		}

		(async () => {
			if (active && owner) {
				const nextDatasets = await listDatasets(owner);
				setDatasets(nextDatasets);
			}
		})();

		return () => {
			active = false;
		};
	}, [isDatasetsLoading]);

	useEffect(() => {
		let active = true;

		if (!isVersionsLoading) {
			return undefined;
		}

		(async () => {
			if (active && owner && dataset) {
				const nextVersions = await listVersions(dataset);
				setVersions(nextVersions);
			}
		})();

		return () => {
			active = false;
		};
	}, [isVersionsLoading]);

	useEffect(() => {
		let active = true;

		if (!isQuasiIdentifiersLoading) {
			return undefined;
		}

		(async () => {
			if (active && owner && dataset) {
				const nextVersions = await listVersions(dataset);
				setVersions(nextVersions);
			}
		})();

		return () => {
			active = false;
		};
	}, [isVersionsLoading]);

	useEffect(() => {
		setDataset(null);
		setVersion(null);
		setTable(null);
		setVariable(null);
		setSelectedQuasiIdentifiers([]);
		setDatasets([]);
		setVersions([]);
		setTables([]);
		setVariables([]);
		setVariablesByTableName({});
		setFilteredQuasiIdentifiers([]);
	}, [owner])

	useEffect(() => {
		if (dataset){
			(async () => {
				const nextDataset = await getDataset(dataset);
				setDataset(nextDataset);
				setVersion((nextDataset || {}).getProperty?.('currentVersion') || null);
			})()
		} else {
			setVersion(null);
		}
		setVersions([]);
		setTable(null);
		setTables([])
	}, [dataset?.name])

	useEffect(() => {
		if (owner && dataset && version){
			(async () => {
				let nextDataset = dataset;
				if (dataset.getProperty?.('version')?.tag !== version.tag){
					const nextDataset = await getDataset(dataset, { version: version.tag })
					setDataset(nextDataset);
				}
				const nextTables = await listTables(nextDataset);
				setTables(nextTables);
			})()
		} else {
			setTables([])
		}
	}, [version])

	useEffect(() => {
		if (owner && dataset && version && table){
			(async () => {
				const nextVariablesByTableName = await listVariablesByTableName(table, tables);
				setVariables(nextVariablesByTableName[table.name])
				setVariablesByTableName(nextVariablesByTableName)
			})()
		}
		setVariable(null)
	}, [table])

	useEffect(() => {
		if (variable){
			const nextFilteredQuasiIdentifiers = formatQuasiIdentifiers(variable, table, tables, variablesByTableName);
			setFilteredQuasiIdentifiers(nextFilteredQuasiIdentifiers);
		} else {
			setFilteredQuasiIdentifiers([]);
		}
	}, [variable]);

	const handleClearAll = useCallback(() => {
		setOwner('');
	}, [])

	const handleCalculateRisk = useCallback(async () => {
		setIsCalculatingRisk(true);
		try {
			await onCalculateRisk();
		} catch (e){
			console.error(e);
		} finally {
			setIsCalculatingRisk(false);
		}
	}, [onCalculateRisk])

	return (
		<div className={styles.sideBarWrapper}>
			<div className={styles.bodyWrapper}>
				<div className={styles.sectionWrapper}>
					{isUserAuthorized ?
						(
							<div>
								<div className={styles.sectionHeader}>{'Authenticated as'}</div>
								<div className={styles.sectionText}>{'username'}</div>
								<Button className={styles.linkButton} onClick={onDeauthorize}>{'Remove authentication'}</Button>
							</div>
						)
							:
						(
							<Button variant={'contained'} onClick={onAuthorize}>{'Authenticate with Redivis'}</Button>
						)
					}
				</div>
				{isUserAuthorized && <React.Fragment>
					<div className={styles.sectionWrapper}>
						<div className={styles.fieldWrapper}>
							<TextField
								name={'owner'}
								label={'Organization'}
								value={owner}
								onChange={(e) => setOwner(e.target.value)}
								fullWidth={true}
								variant={'outlined'}
							/>
						</div>
						<div className={styles.fieldWrapper}>
							<Autocomplete
								id={'dataset'}
								open={isDatasetsOpen}
								disabled={!owner}
								onOpen={() => {
									setIsDatasetsOpen(true);
								}}
								onClose={() => {
									setIsDatasetsOpen(false);
								}}
								value={dataset}
								onChange={(e, newValue) => setDataset(newValue)}
								isOptionEqualToValue={(option, value) => option.name === value.name}
								getOptionLabel={(option) => option.name}
								options={datasets}
								loading={isDatasetsLoading}
								renderInput={(params) => (
									<TextField
										{...params}
										variant={'outlined'}
										label={'Dataset'}
										InputProps={{
											...params.InputProps,
											endAdornment: (
												<React.Fragment>
													{isDatasetsLoading ? (
														<CircularProgress color={'inherit'} size={20} />
													) : null}
													{params.InputProps.endAdornment}
												</React.Fragment>
											),
										}}
									/>
								)}
							/>
						</div>
						<div className={styles.fieldWrapper}>
							<Autocomplete
								id={'version'}
								open={isVersionsOpen}
								disabled={!owner || !dataset}
								onOpen={() => {
									setIsVersionsOpen(true);
								}}
								onClose={() => {
									setIsVersionsOpen(false);
								}}
								value={version}
								onChange={(e, newValue) => setVersion(newValue)}
								isOptionEqualToValue={(option, value) => option.tag === value.tag}
								getOptionLabel={(option) => option.tag}
								options={versions}
								loading={isVersionsLoading}
								renderInput={(params) => (
									<TextField
										{...params}
										variant={'outlined'}
										label={'Version'}
										InputProps={{
											...params.InputProps,
											endAdornment: (
												<React.Fragment>
													{isVersionsLoading ? (
														<CircularProgress color={'inherit'} size={20} />
													) : null}
													{params.InputProps.endAdornment}
												</React.Fragment>
											),
										}}
									/>
								)}
							/>
						</div>
						<div className={styles.fieldWrapper}>
							<Autocomplete
								id={'table'}
								open={isTablesOpen}
								disabled={!owner || !dataset || !version}
								onOpen={() => {
									setIsTablesOpen(true);
								}}
								onClose={() => {
									setIsTablesOpen(false);
								}}
								value={table}
								onChange={(e, newValue) => setTable(newValue)}
								isOptionEqualToValue={(option, value) => option.name === value.name}
								getOptionLabel={(option) => option.name}
								options={tables}
								loading={isTablesLoading}
								renderInput={(params) => (
									<TextField
										{...params}
										variant={'outlined'}
										label={'Primary input table'}
										InputProps={{
											...params.InputProps,
											endAdornment: (
												<React.Fragment>
													{isTablesLoading ? (
														<CircularProgress color={'inherit'} size={20} />
													) : null}
													{params.InputProps.endAdornment}
												</React.Fragment>
											),
										}}
									/>
								)}
							/>
						</div>
					</div>
					<div className={styles.sectionWrapper}>
						<div className={styles.fieldWrapper}>
							<Autocomplete
								id={'variable'}
								open={isVariablesOpen}
								disabled={!owner || !dataset || !version || !table}
								onOpen={() => {
									setIsVariablesOpen(true);
								}}
								onClose={() => {
									setIsVariablesOpen(false);
								}}
								value={variable}
								onChange={(e, newValue) => setVariable(newValue)}
								isOptionEqualToValue={(option, value) => option.name === value.name}
								getOptionLabel={(option) => option.name}
								options={variables}
								loading={isVariablesLoading}
								renderInput={(params) => (
									<TextField
										{...params}
										variant={'outlined'}
										label={'Entity ID'}
										InputProps={{
											...params.InputProps,
											endAdornment: (
												<React.Fragment>
													{isVariablesLoading ? (
														<CircularProgress color={'inherit'} size={20} />
													) : null}
													{params.InputProps.endAdornment}
												</React.Fragment>
											),
										}}
									/>
								)}
							/>
						</div>
						<div className={styles.fieldWrapper}>
							<Autocomplete
								multiple
								id={'quasiIdentifier'}
								open={isQuasiIdentifiersOpen}
								disabled={!owner || !dataset || !version || !table}
								onOpen={() => {
									setIsQuasiIdentifiersOpen(true);
								}}
								onClose={() => {
									setIsQuasiIdentifiersOpen(false);
								}}
								value={selectedQuasiIdentifiers}
								onChange={(e, newValue) => setSelectedQuasiIdentifiers(newValue)}
								isOptionEqualToValue={(option, value) => `${option.table.name}_${option.variable.name}` === `${value.table.name}_${value.variable.name}`}
								getOptionLabel={(option) => `${option.variable.name} in ${option.table.name}`}
								options={filteredQuasiIdentifiers}
								loading={isQuasiIdentifiersLoading}
								renderInput={(params) => (
									<TextField
										{...params}
										variant={'outlined'}
										label={'Quasi-identifiers'}
										InputProps={{
											...params.InputProps,
											endAdornment: (
												<React.Fragment>
													{isQuasiIdentifiersLoading ? (
														<CircularProgress color={'inherit'} size={20} />
													) : null}
													{params.InputProps.endAdornment}
												</React.Fragment>
											),
										}}
									/>
								)}
							/>
						</div>
					</div>
					<div className={styles.sectionWrapper}>
						<Button variant={'outlined'} onClick={handleClearAll}>{'Clear all'}</Button>
					</div>
					<div className={styles.sectionWrapper}>
						<LoadingButton
							variant={'contained'}
							disabled={!owner || !dataset || !version || !table || !variable || !selectedQuasiIdentifiers?.length}
							loading={isCalculatingRisk}
							onClick={handleCalculateRisk}
						>
							{'Calculate re-identification risk'}
						</LoadingButton>
					</div>
				</React.Fragment>}
			</div>
		</div>
	);
}

Settings.propTypes = {
	owner: PropTypes.string,
	setOwner: PropTypes.func,
	table: PropTypes.object,
	setTable: PropTypes.func,
	tables: PropTypes.arrayOf(PropTypes.object),
};
