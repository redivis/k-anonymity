import PropTypes from 'prop-types';
import React, { useCallback, useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import { grey } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton';

import getDataset from 'helpers/getDataset';
import listDatasets from 'helpers/listDatasets';
import listVersions from 'helpers/listVersions';
import listTables from 'helpers/listTables';
import listVariablesByTableName from 'helpers/listVariablesByTableName';

import tableHasVariable from 'helpers/tableHasVariable';

import { makeStyles } from '@material-ui/core/styles';

import * as styles from './styles.css';

const tableReferenceRegex = /^\/tables\/([^.]+)\.([^.]+)\.([^.]+)$/i;
function getTableReference({ uri = '', name }) {
	const match = uri.match(tableReferenceRegex);
	if (match) {
		const fullReference = {
			ownerReference: match[1],
			parentEntityReference: match[2].split(':')[0],
			qualifiedParentEntityReference: match[2],
			tableReference: match[3].split(':')[0],
			qualifiedTableReference: match[3],
		};
		return fullReference.tableReference;
	} else {
		return name;
	}
}



const useFormStyles = makeStyles({
	formControl: {
		width: '100%',
	},
	formControlLabel: {
		marginTop: 7,
		marginBottom: 15,
	},
	radioGroup: {
		marginLeft: 11,
	},
	pending: {
		color: grey[500],
		marginRight: 5,
	},
	collapse: {
		entered: {
			marginBottom: 10,
		},
	},
	listItem: {
		width: 'calc(100% + 60px)',
		color: grey[900],
		paddingLeft: 30,
		marginLeft: -30,
		marginRight: -30,
	},
	listItemText: {
		primary: {
			fontWeight: 'bold',
		},
	},
	helperText: {
		color: grey[500],
		marginBottom: 0,
		'&:not(:last-of-type)': {
			marginBottom: 0,
		},
	},
});

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
	parentEntity,
	setParentEntity,
	region,
	setRegion,
	subregion,
	setSubregion,
	latitudeIndicator,
	setLatitudeIndicator,
	longitudeIndicator,
	setLongitudeIndicator,
	roads,
	setRoads,
	coverageTravelTime,
	setCoverageTravelTime,
	colorScaleBucketCount,
	setColorScaleBucketCount,
	resolution,
	setResolution,
	hideRoads,
	setHideRoads,
	useOsmRoadSpeed,
	setUseOsmRoadSpeed,
	showPoints,
	setShowPoints,
	showPopulationDensity,
	setShowPopulationDensity,
	hasDiscreteColorScale,
	setHasDiscreteColorScale,
	pointRadius,
	setPointRadius,
	colorScale,
	setColorScale,
	isFetchingTables,
	tablesError,
	collection,
	isFetchingCollection,
	collectionError,
	isFetchingMap,
	mapDataError,
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
	parentEntity: PropTypes.string,
	setParentEntity: PropTypes.func,
	table: PropTypes.string,
	setTable: PropTypes.func,
	tables: PropTypes.arrayOf(PropTypes.object),
	region: PropTypes.string,
	setRegion: PropTypes.func,
	subregion: PropTypes.string,
	setSubregion: PropTypes.func,
	latitudeIndicator: PropTypes.string,
	setLatitudeIndicator: PropTypes.func,
	longitudeIndicator: PropTypes.string,
	setLongitudeIndicator: PropTypes.func,
	roads: PropTypes.arrayOf(PropTypes.string),
	setRoads: PropTypes.func,
	coverageTravelTime: PropTypes.string,
	setCoverageTravelTime: PropTypes.func,
	colorScaleBucketCount: PropTypes.string,
	setColorScaleBucketCount: PropTypes.func,
	resolution: PropTypes.string,
	setResolution: PropTypes.func,
	hideRoads: PropTypes.bool,
	setHideRoads: PropTypes.func,
	useOsmRoadSpeed: PropTypes.bool,
	setUseOsmRoadSpeed: PropTypes.func,
	showPoints: PropTypes.bool,
	setShowPoints: PropTypes.func,
	showPopulationDensity: PropTypes.bool,
	setShowPopulationDensity: PropTypes.func,
	pointRadius: PropTypes.string,
	setPointRadius: PropTypes.func,
	colorScale: PropTypes.arrayOf(PropTypes.string),
	setColorScale: PropTypes.func,
	collection: PropTypes.object,
	isFetchingCollection: PropTypes.bool,
	collectionError: PropTypes.object,
	mapDataError: PropTypes.object,
};
