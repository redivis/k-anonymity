import { Fragment, useCallback, useMemo, useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';

import { RedivisButtonText, RedivisButton } from '../helpers/Buttons';

import getDataset from '../helpers/getDataset';
import listDatasets from '../helpers/listDatasets';
import listVersions from '../helpers/listVersions';
import listTables from '../helpers/listTables';
import listVariablesByTableName from '../helpers/listVariablesByTableName';
import tableHasVariable from '../helpers/tableHasVariable';

import styles from './styles.module.css';

function renderLoadingInput(label, isLoading) {
	return (params) => (
		<TextField
			{...params}
			variant={'outlined'}
			label={label}
			slotProps={{
				...params.slotProps,
				input: {
					...params.slotProps.input,
					endAdornment: (
						<Fragment>
							{isLoading ? <CircularProgress color={'inherit'} size={20} /> : null}
							{params.slotProps.input.endAdornment}
						</Fragment>
					),
				},
			}}
		/>
	);
}

function formatQuasiIdentifiers(variable, table, tables, variablesByTableName){
	const quasiIdentifiers = [];

	for (const datasetTable of tables){
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

	const filteredQuasiIdentifiers = useMemo(
		() => (table && tables.length ? formatQuasiIdentifiers(variable, table, tables, variablesByTableName) : []),
		[variable, table, tables, variablesByTableName],
	);
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

	const handleOwnerChange = useCallback((nextOwner) => {
		if (nextOwner !== owner){
			setOwner(nextOwner);
			setDatasets([]);
			setDataset(null);
			setTables([]);
			setTable(null);
			setVariablesByTableName({});
			setVariables([]);
			setVariable(null);
			setSelectedQuasiIdentifiers([]);
		}
	}, [owner]);

	const handleDatasetChange = useCallback((e, nextDataset) => {
		if (nextDataset?.name !== dataset?.name){
			setDataset(nextDataset);
			setTables([]);
			setTable(null);
			setVariablesByTableName({});
			setVariables([]);
			setVariable(null);
			setSelectedQuasiIdentifiers([]);
		}
	}, [dataset]);

	useEffect(() => {
		if (isUserAuthorized){
			if (owner && dataset){
				(async () => {
					const nextDataset = await getDataset(owner, dataset);
					setDataset(nextDataset);
					// Use a Version, so that its (normalized) tag matches those from listVersions()
					const versionTag = (nextDataset?.getProperty('currentVersion') || nextDataset?.getProperty('nextVersion'))?.tag;
					setVersion(versionTag ? await nextDataset.version(versionTag) : null);
					const nextTables = await listTables(nextDataset);
					setTables(nextTables);
				})()
			} else {
				setDataset(null);
				setVersion(null);
			}
			setVersions([]);
		}
	}, [isUserAuthorized, dataset?.name])

	const handleVersionChange = useCallback((e, nextVersion) => {
		if (nextVersion?.tag !== version?.tag){
			setVersion(nextVersion);
			setTables([]);
			setTable(null);
			setVariablesByTableName({});
			setVariables([]);
			setVariable(null);
			setSelectedQuasiIdentifiers([]);
		}
	}, [version])

	useEffect(() => {
		if (isUserAuthorized){
			if (owner && dataset && version){
				(async () => {
					if (dataset.versionTag !== version?.tag){
						const nextDataset = await getDataset(owner, dataset, { version: version.tag })
						setDataset(nextDataset);
						const nextTables = await listTables(nextDataset);
						setTables(nextTables);
					}
				})()
			} else {
				setTables([])
			}
		}
	}, [isUserAuthorized, version])

	const handleTableChange = useCallback((e, nextTable) => {
		if (nextTable?.name !== table?.name){
			setTable(nextTable);
			setVariablesByTableName({});
			setVariables([]);
			setVariable(null);
			setSelectedQuasiIdentifiers([]);
		}
	}, [table])

	useEffect(() => {
		if (isUserAuthorized){
			if (owner && dataset && version && table && tables.length){
				(async () => {
					const nextVariablesByTableName = await listVariablesByTableName(tables);
					setVariables(nextVariablesByTableName[table.name])
					setVariablesByTableName(nextVariablesByTableName)
				})()
			} else {
				setVariables([]);
				setVariablesByTableName({});
			}
		}
	}, [isUserAuthorized, tables, table])

	const handleClearAll = useCallback(() => {
		handleOwnerChange('');
	}, [handleOwnerChange])

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
								<div className={styles.sectionHeader}>{'Logged in'}</div>
								<RedivisButtonText onClick={onDeauthorize}>{'Remove authentication'}</RedivisButtonText>
							</div>
						)
							:
						(
							<RedivisButton onClick={onAuthorize}>{'Authenticate with Redivis'}</RedivisButton>
						)
					}
				</div>
				{isUserAuthorized && <Fragment>
					<div className={styles.sectionWrapper}>
						<div className={styles.fieldWrapper}>
							<TextField
								name={'owner'}
								label={'Organization'}
								value={owner}
								onChange={(e) => handleOwnerChange(e.target.value)}
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
								onChange={handleDatasetChange}
								isOptionEqualToValue={(option, value) => option.name === value.name}
								getOptionLabel={(option) => option.name}
								options={datasets}
								loading={isDatasetsLoading}
								renderInput={renderLoadingInput('Dataset', isDatasetsLoading)}
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
								onChange={handleVersionChange}
								isOptionEqualToValue={(option, value) => option.tag === value.tag}
								getOptionLabel={(option) => option.tag}
								options={versions}
								loading={isVersionsLoading}
								renderInput={renderLoadingInput('Version', isVersionsLoading)}
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
								onChange={handleTableChange}
								isOptionEqualToValue={(option, value) => option.name === value.name}
								getOptionLabel={(option) => option.name}
								options={tables}
								loading={isTablesLoading}
								renderInput={renderLoadingInput('Primary input table', isTablesLoading)}
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
								renderInput={renderLoadingInput('Entity ID', isVariablesLoading)}
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
								renderInput={renderLoadingInput('Quasi-identifiers', isQuasiIdentifiersLoading)}
							/>
						</div>
						<div className={styles.fieldWrapper}>
							<RedivisButton type={'secondary'} onClick={handleClearAll} className={styles.clearAll}>{'Clear all'}</RedivisButton>
						</div>
					</div>
					<div className={styles.sectionWrapper}>
						<RedivisButton
							disabled={!owner || !dataset || !version || !table || !selectedQuasiIdentifiers?.length}
							loading={isCalculatingRisk}
							onClick={handleCalculateRisk}
						>
							{'Calculate re-identification risk'}
						</RedivisButton>
					</div>
				</Fragment>}
			</div>
		</div>
	);
}
