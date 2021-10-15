import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import Graph from '../Graph';
import Settings from '../Settings';
import Button from '@mui/material/Button';

import {  createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import computeRisk from 'helpers/computeRisk';

import headerSVG from 'assets/header.svg';
import labsSVG from 'assets/labs.svg';

import * as styles from './styles.css';
import {
	query,
	authorize,
	deauthorize,
	isAuthorized,
} from 'redivis';

const DEFAULT_OWNER = 'Demo';
const DEFAULT_PARENT_ENTITY = null;

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#a88bc9',
			main: '#7f3b97',
			dark: '#5e1e75',
			contrastText: '#ffffff',
		},
		secondary: {
			light: '#d4d3db',
			main: '#4d4c54',
			dark: '#353538',
			contrastText: '#ffffff',
		},
	},
});


function App({ history }) {
	useEffect(() => {
		const path = localStorage.getItem('path');
		if (path) {
			localStorage.removeItem('path');
			history.replace(`/${path}`);
		}
	}, []);

	const [isUserAuthorized, setIsUserAuthorized] = useState(false);

	const handleSetIsUserAuthorized = useCallback(
		async () => {
			const nextIsUserAuthorized = await isAuthorized();
			setIsUserAuthorized(nextIsUserAuthorized);
		},
		[],
	);

	useEffect(() => {
		handleSetIsUserAuthorized();
	}, []);

	const handleAuthorize = useCallback(async () => {
		await authorize();
		handleSetIsUserAuthorized();
	}, [authorize]);

	const handleUnauthorize = useCallback(async () => {
		await deauthorize()
		handleSetIsUserAuthorized();
	}, []);

	const [owner, setOwner] = useState(DEFAULT_OWNER);
	const [dataset, setDataset] = useState(null);
	const [version, setVersion] = useState(null);
	const [parentEntity, setParentEntity] = useState(DEFAULT_PARENT_ENTITY);
	const [table, setTable] = useState(null);
	const [variable, setVariable] = useState(null);

	const [datasets, setDatasets] = useState([]);
	const [versions, setVersions] = useState([]);
	const [tables, setTables] = useState([]);
	const [variables, setVariables] = useState([]);

	const [selectedQuasiIdentifiers, setSelectedQuasiIdentifiers] = useState([]);
	const [variablesByTableName, setVariablesByTableName] = useState({});

	const [queryResponse, setQueryResponse] = useState(null);


	const handleCalculateRisk = useCallback(async () => {
		const nextQueryResponse = await computeRisk(variable, selectedQuasiIdentifiers, variablesByTableName, table, tables, dataset, owner);
		setQueryResponse(nextQueryResponse);
		console.log('response', nextQueryResponse);
	}, [variable, selectedQuasiIdentifiers, variablesByTableName, table, tables, dataset, owner])


	const renderHeader = () => {
		return (
			<div className={styles.headerWrapper}>
				<div className={styles.header}>
					<div className={styles.titleWrapper}>
						<div className={styles.headerLogo} style={{ height: 33, width: 133, backgroundImage: `url(data:image/svg+xml;base64,${btoa(headerSVG)})` }} />
						<div style={{ height: 30, width: 70, backgroundImage: `url(data:image/svg+xml;base64,${btoa(labsSVG)})` }} />
						<div className={styles.divider} />
						<span>{'K-anonymity computation'}</span>
					</div>
					<div className={styles.linkWrapper}>
						<div className={styles.buttonWrapper}>
							<Button
								size={'small'}
								href={`https://github.com/redivis/k-anonymity`}
								target={'_blank'}
							>
								{'Github'}
							</Button>
						</div>
						<div className={styles.buttonWrapper}>
							<Button
								size={'small'}
								href={`https://redivis.com`}
								target={'_blank'}
							>
								{'Redivis'}
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const renderBody = () => {
		return (
			<ThemeProvider theme={theme}>
				<div className={styles.bodyWrapper}>
					<div className={styles.graphWrapper}>
						<div className={styles.settings}>
							<Settings
								isUserAuthorized={isUserAuthorized}
								onAuthorize={handleAuthorize}
								onDeauthorize={handleUnauthorize}
								owner={owner}
								setOwner={setOwner}
								dataset={dataset}
								setDataset={setDataset}
								datasets={datasets}
								setDatasets={setDatasets}
								version={version}
								setVersion={setVersion}
								versions={versions}
								setVersions={setVersions}
								parentEntity={parentEntity}
								setParentEntity={setParentEntity}
								table={table}
								setTable={setTable}
								tables={tables}
								setTables={setTables}
								variable={variable}
								setVariable={setVariable}
								variables={variables}
								setVariables={setVariables}
								selectedQuasiIdentifiers={selectedQuasiIdentifiers}
								setSelectedQuasiIdentifiers={setSelectedQuasiIdentifiers}
								variablesByTableName={variablesByTableName}
								setVariablesByTableName={setVariablesByTableName}
								onCalculateRisk={handleCalculateRisk}
							/>
						</div>
						<div className={styles.graph}>
							<Graph
								queryResponse={queryResponse}
								dataset={dataset}
								variable={variable}
							/>
						</div>
					</div>
				</div>
			</ThemeProvider>
		);
	};

	return (
		<div className={styles.appWrapper}>
			{renderHeader()}
			{renderBody()}
		</div>
	);
}
export default withRouter(App);
