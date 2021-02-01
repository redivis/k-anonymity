import React, { Component, useRef, useEffect, useState } from 'react';

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

export default class Map extends Component {
	static propTypes = {};

	static defaultProps = {
		tableReference: `ianmathews91.geospatial_coverage.${TEST_COUNTRY}`,
		options: testOptions[TEST_COUNTRY],
		settings: {
			coverageTravelTime: 120,
			resolution: 1024,
			showPopulationDensity: false,
			showPoints: true,
			pointRadius: 2,
		},
	};

	componentDidMount() {
		this.mapRenderer = new MapRenderer(this.mapElement, this.props);
	}

	componentDidUpdate(prevProps) {
		this.mapRenderer.update(this.props);
	}

	componentWillUnmount() {
		this.mapRenderer.unload();
	}

	render() {
		return (
			<div ref={(mapElement) => (this.mapElement = mapElement)} className={styles.wrapper}>
				<button
					className={styles.downloadButton}
					onClick={() => {
						this.mapRenderer?.downloadCsv?.();
					}}
				>
					Download coverage data
				</button>
			</div>
		);
	}
}
