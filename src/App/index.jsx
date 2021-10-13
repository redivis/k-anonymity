import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';
import useTimeout from 'helpers/useTimeout';
import { withRouter } from 'react-router-dom';

import Map from '../Map';
import Settings from '../Settings';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import { getCredentials, login, logout } from 'helpers/auth';
import getTables from 'helpers/getTables';
import getCollection from 'helpers/getCollection';
import getBigQueryMap from '../Map/BigQuery/getMap';

import * as styles from './styles.css';
import {
	query,
	authorize,
	deauthorize,
	isAuthorized,
} from 'redivis';

const INPUT_TIMEOUT_MS = 1000;
const MAP_TIMEOUT_MS = 1000;

const DEFAULT_OWNER = 'StanfordPHS';
const DEFAULT_PARENT_ENTITY = null;
const DEFAULT_TABLE = 'california_hospitals';
const DEFAULT_REGION = 'United States';
const DEFAULT_SUBREGION = 'California';
const DEFAULT_LATITUDE_INDICATOR = '';
const DEFAULT_LONGITUDE_INDICATOR = '';
const DEFAULT_ROADS = ['motorway', 'trunk', 'primary'];

// For testing
// const DEFAULT_OWNER = 'ianmathews91';
// const DEFAULT_PARENT_ENTITY = 'geospatial_coverage';
// const DEFAULT_TABLE = 'zambia';
// const DEFAULT_REGION = 'Zambia';
// const DEFAULT_SUBREGION = '';
// const DEFAULT_LATITUDE_INDICATOR = 'GPS_S';
// const DEFAULT_LONGITUDE_INDICATOR = 'GPS_E';
// const DEFAULT_ROADS = ['motorway', 'trunk', 'primary', 'secondary', 'tertiary'];

const DEFAULT_COVERAGE_TRAVEL_TIME = '120';
const DEFAULT_RESOLUTION = '1024';
const DEFAULT_SHOW_POINTS = true;
const DEFAULT_HIDE_ROADS = false;
const DEFAULT_USE_OSM_ROAD_SPEED = true;
const DEFAULT_SHOW_POPULATION_DENSITY = false;
const DEFAULT_HAS_DISCRETE_COLOR_SCALE = false;
const DEFAULT_COLOR_SCALE_BUCKET_COUNT = 9;
const DEFAULT_POINT_RADIUS = '2';
const DEFAULT_COLOR_SCALE = [];

const latRegex = /lat/gi;
const longRegex = /lo?ng/gi;
const latLongTypes = new Set(['float', 'string']);

function guessLatAndLongIndicators(collection) {
	let latitude = '';
	let longitude = '';
	for (let i = 0; i < collection.variables.length; i++) {
		const variable = collection.variables[i];
		if (!latitude && variable.name.match(latRegex) && latLongTypes.has(variable.type)) {
			latitude = variable.name;
		}
		if (!longitude && variable.name.match(longRegex) && latLongTypes.has(variable.type)) {
			longitude = variable.name;
		}
		if (latitude && longitude) {
			break;
		}
	}
	return { latitude, longitude };
}

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

const useTitleStyles = makeStyles({
	root: {
		fontSize: 20,
	},
	subtitle: {
		marginLeft: 10,
		fontSize: 20,
		color: grey[600],
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

	const accessToken = getCredentials();

	const handleSignIn = useCallback(async () => {
		try {
			await login();
			window.location.assign(window.location.href);
		} catch (e) {
			console.error(e);
		}
	}, []);

	const handleSignOut = useCallback(async () => {
		logout();
		window.location.assign(window.location.href);
	}, []);

	const [owner, setOwner] = useState(DEFAULT_OWNER);
	const [dataset, setDataset] = useState(null);
	const [version, setVersion] = useState(null);
	const [parentEntity, setParentEntity] = useState(DEFAULT_PARENT_ENTITY);
	const [table, setTable] = useState(null);
	const [variable, setVariable] = useState(null);


	const [region, setRegion] = useState(DEFAULT_REGION);
	const [subregion, setSubregion] = useState(DEFAULT_SUBREGION);
	const [latitudeIndicator, setLatitudeIndicator] = useState(DEFAULT_LATITUDE_INDICATOR);
	const [longitudeIndicator, setLongitudeIndicator] = useState(DEFAULT_LONGITUDE_INDICATOR);
	const [roads, setRoads] = useState(DEFAULT_ROADS);

	const [datasets, setDatasets] = useState([]);
	const [versions, setVersions] = useState([]);
	const [tables, setTables] = useState([]);
	const [variables, setVariables] = useState([]);

	const [selectedQuasiIdentifiers, setSelectedQuasiIdentifiers] = useState([]);
	const [variablesByTableName, setVariablesByTableName] = useState({});

	const [isFetchingTables, setIsFetchingTables] = useState(false);
	const [tablesError, setTablesError] = useState(null);

	const [collection, setCollection] = useState(null);
	const [isFetchingCollection, setIsFetchingCollection] = useState(false);
	const [collectionError, setCollectionError] = useState(null);

	const setLatAndLongIndicators = useCallback((collection) => {
		const { latitude, longitude } = guessLatAndLongIndicators(collection);
		if (latitude) {
			setLatitudeIndicator(latitude);
		}
		if (longitude) {
			setLongitudeIndicator(longitude);
		}
	}, []);

	const fetchCollection = useCallback(async () => {
		if (owner && parentEntity && table) {
			const fullTableReference = `${owner}.${parentEntity}.${table}`;
			try {
				setIsFetchingCollection(true);
				setCollectionError(null);
				const collection = await getCollection(fullTableReference);
				setCollection(collection);
				setLatAndLongIndicators(collection);
			} catch (e) {
				setCollectionError(e);
				setCollection(null);
			} finally {
				setIsFetchingCollection(false);
			}
		}
	}, [owner, parentEntity, table]);

	const [setCollectionTimeout, clearCollectionTimeout] = useTimeout(fetchCollection, INPUT_TIMEOUT_MS);

	useEffect(() => {
		clearCollectionTimeout();
		setCollectionTimeout();
		return () => {
			clearCollectionTimeout();
		};
	}, [fetchCollection]);

	const [mapData, setMapData] = useState(null);
	const [isFetchingMap, setIsFetchingMap] = useState(false);
	const [mapDataError, setMapDataError] = useState(null);

	const fetchMapData = useCallback(async () => {
		try {
			setIsFetchingMap(true);
			setMapDataError(null);
			const mapOptions = { region, subregion, latitudeIndicator, longitudeIndicator, roads: [...roads] };

			const mapData = await getBigQueryMap(mapOptions);
			// const mapData = await getOSMMap(mapOptions);
			setMapData(mapData);
		} catch (e) {
			setMapDataError(e);
			setMapData(null);
		} finally {
			setIsFetchingMap(false);
		}
	}, [region, subregion, latitudeIndicator, longitudeIndicator, roads]);

	const [setMapTimeout, clearMapTimeout] = useTimeout(fetchMapData, MAP_TIMEOUT_MS);

	useEffect(() => {
		clearMapTimeout();
		setMapTimeout();
		return () => {
			clearMapTimeout();
		};
	}, [fetchMapData]);

	const [coverageTravelTime, setCoverageTravelTime] = useState(DEFAULT_COVERAGE_TRAVEL_TIME);
	const [colorScaleBucketCount, setColorScaleBucketCount] = useState(DEFAULT_COLOR_SCALE_BUCKET_COUNT);

	const handleCalculateRisk = useCallback(async () => {
		const riskQuery = `SELECT 1+1`;
		const response = await query(riskQuery).listRows();
		console.log('response');
	}, [])

	const [resolution, setResolution] = useState(DEFAULT_RESOLUTION);
	const [hideRoads, setHideRoads] = useState(DEFAULT_HIDE_ROADS);
	const [useOsmRoadSpeed, setUseOsmRoadSpeed] = useState(DEFAULT_USE_OSM_ROAD_SPEED);
	const [showPoints, setShowPoints] = useState(DEFAULT_SHOW_POINTS);
	const [showPopulationDensity, setShowPopulationDensity] = useState(DEFAULT_SHOW_POPULATION_DENSITY);
	const [hasDiscreteColorScale, setHasDiscreteColorScale] = useState(DEFAULT_HAS_DISCRETE_COLOR_SCALE);
	const [pointRadius, setPointRadius] = useState(DEFAULT_POINT_RADIUS);
	const [colorScale, setColorScale] = useState(DEFAULT_COLOR_SCALE);

	const titleClasses = useTitleStyles();

	const renderHeader = () => {
		return (
			<div className={styles.headerWrapper}>
				<div className={styles.header}>
					<div className={styles.titleWrapper}>
						<Typography className={titleClasses.root} component={'h4'}>
							{'Redivis Labs'}
						</Typography>
						<Typography className={titleClasses.subtitle} component={'h4'}>
							{'Geospatial coverage analyzer'}
						</Typography>
					</div>
					<div className={styles.linkWrapper}>
						<div className={styles.buttonWrapper}>
							<Button
								size={'small'}
								href={`https://github.com/redivis/geo-coverage#readme`}
								target={'_blank'}
							>
								{'Documentation'}
							</Button>
						</div>
						<div className={styles.buttonWrapper}>
							{!accessToken && (
								<Button
									size={'small'}
									variant={'contained'}
									color={'primary'}
									onClick={handleAuthorize}
								>
									{'Sign in to Redivis'}
								</Button>
							)}
							{!!accessToken && (
								<Button size={'small'} onClick={handleSignOut}>
									{'Sign out'}
								</Button>
							)}
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
					<div className={styles.descriptionWrapper}>
						<p>{`This tool can help measure the re-identification risk of the primary entity in this dataset. It will determine to what degree individuals are anonymized based on their uniqueness within the dataset.`}</p>
					</div>
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
								region={region}
								setRegion={setRegion}
								subregion={subregion}
								setSubregion={setSubregion}
								latitudeIndicator={latitudeIndicator}
								setLatitudeIndicator={setLatitudeIndicator}
								longitudeIndicator={longitudeIndicator}
								setLongitudeIndicator={setLongitudeIndicator}
								roads={roads}
								setRoads={setRoads}
								coverageTravelTime={coverageTravelTime}
								setCoverageTravelTime={setCoverageTravelTime}
								colorScaleBucketCount={colorScaleBucketCount}
								setColorScaleBucketCount={setColorScaleBucketCount}
								resolution={resolution}
								setResolution={setResolution}
								hideRoads={hideRoads}
								useOsmRoadSpeed={useOsmRoadSpeed}
								showPoints={showPoints}
								setHideRoads={setHideRoads}
								setUseOsmRoadSpeed={setUseOsmRoadSpeed}
								setShowPoints={setShowPoints}
								showPopulationDensity={showPopulationDensity}
								setShowPopulationDensity={setShowPopulationDensity}
								hasDiscreteColorScale={hasDiscreteColorScale}
								setHasDiscreteColorScale={setHasDiscreteColorScale}
								pointRadius={pointRadius}
								setPointRadius={setPointRadius}
								colorScale={colorScale}
								setColorScale={setColorScale}
								isFetchingTables={isFetchingTables}
								tablesError={tablesError}
								collection={collection}
								isFetchingCollection={isFetchingCollection}
								collectionError={collectionError}
								isFetchingMap={isFetchingMap}
								mapDataError={mapDataError}
							/>
						</div>
						<div className={styles.graph}>
							<Map
								collection={collection}
								mapData={mapData}
								region={region}
								subregion={subregion}
								latitudeIndicator={latitudeIndicator}
								longitudeIndicator={longitudeIndicator}
								roads={roads}
								coverageTravelTime={coverageTravelTime}
								colorScaleBucketCount={colorScaleBucketCount}
								resolution={resolution}
								hideRoads={hideRoads}
								useOsmRoadSpeed={useOsmRoadSpeed}
								showPoints={showPoints}
								showPopulationDensity={showPopulationDensity}
								hasDiscreteColorScale={hasDiscreteColorScale}
								pointRadius={pointRadius}
								colorScale={colorScale}
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
