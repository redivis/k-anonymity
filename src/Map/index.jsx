import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import MapRenderer from './MapRenderer';

import * as styles from './styles.css';

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

export default function Map({ collection, mapData, options, settings }) {
	const mapElement = useRef(null);
	const mapRenderer = useRef(null);

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
	}, [mapElement.current, collection, mapData, options, settings]);

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
	options: PropTypes.object,
	settings: PropTypes.object,
};

Map.defaultProps = {
	// tableReference: `ianmathews91.geospatial_coverage.${TEST_COUNTRY}`,
	options: testOptions[TEST_COUNTRY],
	settings: {
		coverageTravelTime: 120,
		resolution: 1024,
		showPopulationDensity: false,
		showPoints: true,
		pointRadius: 2,
	},
};
