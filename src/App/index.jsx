import React, { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import Graph from '../Graph';
import Settings from '../Settings';
import Button from '@mui/material/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import computeRisk from '../helpers/computeRisk';

import * as styles from './styles.css';
import {
	authorize,
	deauthorize,
	isAuthorized,
} from 'redivis';

const DEFAULT_OWNER = 'Demo';
const DEFAULT_DATASET = { name: 'CMS 2014 Medicare Data' };
const DEFAULT_VERSION = null;
const DEFAULT_TABLE = { name: 'Inpatient charges' };
const DEFAULT_VARIABLE = { name: 'provider_id' };
const DEFAULT_VARIABLES_BY_TABLE_NAME = {
	'Inpatient charges': [DEFAULT_VARIABLE]
};
const DEFAULT_SELECTED_QUASI_IDENTIFIERS = [{ variable: { name: 'provider_state' }, table: DEFAULT_TABLE }];

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
	const [dataset, setDataset] = useState(DEFAULT_DATASET);
	const [version, setVersion] = useState(DEFAULT_VERSION);
	const [table, setTable] = useState(DEFAULT_TABLE);
	const [variable, setVariable] = useState(DEFAULT_VARIABLE);

	const [datasets, setDatasets] = useState([]);
	const [versions, setVersions] = useState([]);
	const [tables, setTables] = useState([]);
	const [variables, setVariables] = useState([]);

	const [selectedQuasiIdentifiers, setSelectedQuasiIdentifiers] = useState(DEFAULT_SELECTED_QUASI_IDENTIFIERS);
	const [variablesByTableName, setVariablesByTableName] = useState(DEFAULT_VARIABLES_BY_TABLE_NAME);

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
						<div className={styles.headerLogo} style={{ height: 33, width: 133, backgroundImage: `url(/k-anonymity/assets/header.svg)` }} />
						<div style={{ height: 30, width: 70, backgroundImage: `url(/k-anonymity/assets/labs.svg)` }} />
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
