import * as styles from './styles.css';

import React, { useEffect, useState, useCallback } from 'react';

import Map from '../Map';
import Settings from '../Settings';
import Typography from '@material-ui/core/Typography';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import getCollection from 'helpers/getCollection';
import getOSMMap from '../Map/OSM/getMap';

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
});

const useSubtitleStyles = makeStyles({
	root: {
		marginLeft: 10,
		fontSize: 20,
		color: grey[600],
	},
});

export default function App({ history }) {
	useEffect(() => {
		const path = localStorage.getItem('path');
		if (path) {
			localStorage.removeItem('path');
			history.replace(`/${path}`);
		}
	}, []);

	const [tableState, setTableState] = useState({
		owner: 'ianmathews91',
		parentEntity: 'geospatial_coverage',
		table: 'usa',
	});

	const fullTableReference = `${tableState.owner}.${tableState.parentEntity}.${tableState.table}`;

	const [collection, setCollection] = useState(null);
	const [isFetchingCollection, setIsFetchingCollection] = useState(false);
	const [collectionError, setCollectionError] = useState(null);

	useEffect(async () => {
		try {
			setIsFetchingCollection(true);
			setCollectionError(null);
			const collection = await getCollection(fullTableReference);
			setCollection(collection);
		} catch (e) {
			setCollectionError(e);
		} finally {
			setIsFetchingCollection(false);
		}
	}, [fullTableReference]);

	const [mapState, setMapState] = useState({
		region: 'United States',
		subregion: '',
		latitudeIndicator: '',
		longitudeIndicator: '',
		roads: ['motorway', 'trunk', 'primary'],
	});

	const [mapData, setMapData] = useState(null);
	const [isFetchingMap, setIsFetchingMap] = useState(false);
	const [mapDataError, setMapDataError] = useState(null);

	useEffect(async () => {
		try {
			setIsFetchingMap(true);
			setMapDataError(null);
			const mapOptions = { ...mapState };
			if (mapOptions.region.toLowerCase() === 'united states' && !mapOptions.subregion) {
				mapOptions.region = 'us_contiguous.json';
				mapOptions.roads = ['us_roads.json'];
			}
			const mapData = await getOSMMap(mapOptions);
			setMapData(mapData);
		} catch (e) {
			setMapDataError(e);
		} finally {
			setIsFetchingMap(false);
		}
	}, [mapState]);

	const [settingsState, setSettingsState] = useState({
		coverageTravelTime: '120',
		resolution: '1024',
		showPoints: true,
		showPopulationDensity: false,
		pointRadius: 2,
		colorScale: [],
	});

	const titleClasses = useTitleStyles();
	const subtitleClasses = useSubtitleStyles();

	const renderHeader = () => {
		return (
			<div className={styles.headerWrapper}>
				<div className={styles.header}>
					<Typography className={titleClasses.root} component={'h4'}>
						{'Redivis Labs'}
					</Typography>
					<Typography className={subtitleClasses.root} component={'h4'}>
						{'Geospatial coverage analyzer'}
					</Typography>
				</div>
			</div>
		);
	};

	const renderBody = () => {
		return (
			<ThemeProvider theme={theme}>
				<div className={styles.bodyWrapper}>
					<div className={styles.mapWrapper}>
						<div className={styles.settings}>
							<Settings
								tableState={tableState}
								setTableState={setTableState}
								mapState={mapState}
								setMapState={setMapState}
								settingsState={settingsState}
								setSettingsState={setSettingsState}
								collection={collection}
								isFetchingCollection={isFetchingCollection}
								collectionError={collectionError}
								isFetchingMap={isFetchingMap}
								mapDataError={mapDataError}
							/>
						</div>
						<div className={styles.map}>
							<Map
								collection={collection}
								mapData={mapData}
								options={mapState}
								settings={settingsState}
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
