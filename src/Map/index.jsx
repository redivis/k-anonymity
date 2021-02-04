import PropTypes from 'prop-types';
import React, { useRef, useEffect, useCallback } from 'react';
import useTimeout from 'helpers/useTimeout';

import MapRenderer from './MapRenderer';

import * as styles from './styles.css';

const MAP_UPDATE_TIMEOUT_MS = 1000;

const TEST_COUNTRY = 'usa';

const testOptions = {
	usa: {
		region: 'United States',
		roads: ['motorway', 'trunk', 'primary'],
		longitudeIndicator: 'hosp_long',
		latitudeIndicator: 'hosp_lat',
	},
	california: {
		region: 'United States',
		subregion: 'California',
		roads: ['motorway', 'trunk', 'primary'],
		longitudeIndicator: 'Long',
		latitudeIndicator: 'Lat',
	},
	rwanda: {
		region: 'Rwanda',
		roads: ['motorway', 'trunk', 'primary', 'secondary', 'tertiary'],
		longitudeIndicator: 'longitude',
		latitudeIndicator: 'latitude',
	},
	zambia: {
		region: 'Zambia',
		roads: ['motorway', 'trunk', 'primary', 'secondary', 'tertiary'],
		longitudeIndicator: 'GPS_E',
		latitudeIndicator: 'GPS_S',
	},
};

export default function Map({
	collection,
	mapData,
	region,
	subregion,
	latitudeIndicator,
	longitudeIndicator,
	roads,
	coverageTravelTime,
	resolution,
	showPoints,
	showPopulationDensity,
	pointRadius,
	colorScale,
}) {
	const mapElement = useRef(null);
	const mapRenderer = useRef(null);

	const options = {
		region,
		subregion,
		latitudeIndicator,
		longitudeIndicator,
		roads,
	};
	const settings = {
		coverageTravelTime,
		resolution,
		showPoints,
		showPopulationDensity,
		pointRadius,
		colorScale,
	};

	useEffect(() => {
		if (mapElement.current) {
			if (!mapRenderer.current) {
				mapRenderer.current = new MapRenderer(mapElement.current, {
					collection,
					mapData,
					options,
					settings,
				});
			} else {
				mapRenderer.current.update({
					collection,
					mapData,
					options,
					settings,
				});
			}
		}
		return () => {
			if (mapRenderer.current) {
				mapRenderer.current.unload();
			}
		};
	}, [
		mapElement.current,
		collection,
		mapData,
		region,
		subregion,
		latitudeIndicator,
		longitudeIndicator,
		roads,
		coverageTravelTime,
		resolution,
		showPoints,
		showPopulationDensity,
		pointRadius,
		colorScale,
	]);

	// TODO: why is useTime hook not firing more than once?
	// const updateMap = useCallback(() => {
	// 	if (mapElement.current) {
	// 		if (!mapRenderer.current) {
	// 			mapRenderer.current = new MapRenderer(mapElement.current, {
	// 				collection,
	// 				mapData,
	// 				options,
	// 				settings,
	// 			});
	// 		} else {
	// 			mapRenderer.current.update({
	// 				collection,
	// 				mapData,
	// 				options,
	// 				settings,
	// 			});
	// 		}
	// 	}
	// 	return () => {
	// 		if (mapRenderer.current) {
	// 			mapRenderer.current.unload();
	// 		}
	// 	};
	// }, [
	// 	mapElement.current,
	// 	collection,
	// 	mapData,
	// 	region,
	// 	subregion,
	// 	latitudeIndicator,
	// 	longitudeIndicator,
	// 	roads,
	// 	coverageTravelTime,
	// 	resolution,
	// 	showPoints,
	// 	showPopulationDensity,
	// 	pointRadius,
	// 	colorScale,
	// ]);
	//
	// const [setMapTimeout, clearMapTimeout] = useTimeout(updateMap, MAP_UPDATE_TIMEOUT_MS);
	//
	// useEffect(() => {
	// 	clearMapTimeout();
	// 	setMapTimeout();
	// 	return () => {
	// 		clearMapTimeout();
	// 	};
	// }, [updateMap]);

	return (
		<div ref={mapElement} className={styles.wrapper}>
			<button
				className={styles.downloadButton}
				onClick={() => {
					mapRenderer?.current?.downloadCsv?.();
				}}
			>
				Download coverage data
			</button>
		</div>
	);
}

Map.propTypes = {
	collection: PropTypes.object,
	mapData: PropTypes.object,
	region: PropTypes.string,
	subregion: PropTypes.string,
	latitudeIndicator: PropTypes.string,
	longitudeIndicator: PropTypes.string,
	roads: PropTypes.arrayOf(PropTypes.string),
	mapState: PropTypes.object,
	coverageTravelTime: PropTypes.string,
	resolution: PropTypes.string,
	showPoints: PropTypes.bool,
	showPopulationDensity: PropTypes.bool,
	pointRadius: PropTypes.string,
	colorScale: PropTypes.arrayOf(PropTypes.string),
	options: PropTypes.object,
	settings: PropTypes.object,
};

Map.defaultProps = {
	options: testOptions[TEST_COUNTRY],
	settings: {
		coverageTravelTime: 120,
		resolution: 1024,
		showPopulationDensity: false,
		showPoints: true,
		pointRadius: 2,
	},
};
