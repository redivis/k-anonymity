import * as styles from './styles.css';

import React, { useEffect, useState, useRef } from 'react';

import Map from '../Map';
import Settings from '../Settings';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import getCollection from '../helpers/getCollection';

const useTitleStyles = makeStyles({
	root: {
		fontSize: 20,
	},
})

const useSubtitleStyles = makeStyles({
	root: {
		marginLeft: 10,
		fontSize: 20,
		color: grey[600],
	}
})

export default function App({
	history,
}){
	useEffect(() => {
		const path = localStorage.getItem('path');
		if (path){
			localStorage.removeItem('path')
			history.replace(`/${path}`);
		}
	}, []);

	const [tableState, setTableState] = useState({
		owner: 'ianmathews91',
		parentEntity: 'rwanda_geospatial_coverage',
		table: 'coverage',
	});

	const fullTableReference = `${tableState.owner}.${tableState.parentEntity}.${tableState.table}`;

	const [mapState, setMapState] = useState({
		region: 'United States',
		subregion: '',
		latitude: '',
		longitude: '',
		roads: ['motorway', 'trunk', 'primary'],
	});

	const titleClasses = useTitleStyles();
	const subtitleClasses = useSubtitleStyles()

	const renderHeader = () => {
		return (
			<div className={styles.headerWrapper}>
				<div className={styles.header}>
					<Typography className={titleClasses.root} component={'h4'}>{'Redivis Labs'}</Typography>
					<Typography className={subtitleClasses.root} component={'h4'}>{'Geospatial coverage analyzer'}</Typography>
				</div>
			</div>
		);
	};

	const collection = useRef(null);

	useEffect(async () => {
		try {
			console.log('fetching collection', fullTableReference);
			const collection = await getCollection(fullTableReference);
			console.log('collection', collection);
		} catch (e){
			console.error(e);
		}
	}, [fullTableReference]);

	const renderBody = () => {
		return (
			<div className={styles.bodyWrapper}>
				<div className={styles.mapWrapper}>
					<div className={styles.settings}>
						<Settings
							tableState={tableState}
							setTableState={setTableState}
							mapState={mapState}
							setMapState={setMapState}
						/>
					</div>
					<div className={styles.map}>
						<Map />
					</div>
				</div>
			</div>
		);
	};


	return (
		<div className={styles.appWrapper}>
			{renderHeader()}
			{renderBody()}
		</div>
	);
}