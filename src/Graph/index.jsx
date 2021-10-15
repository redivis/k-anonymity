import PropTypes from 'prop-types';
import React, { useRef, useEffect, useCallback } from 'react';

import GraphRenderer from './GraphRenderer';

import * as styles from './styles.css';

export default function Graph({
	queryResponse,
	dataset,
	variable,
}) {
	const graphElement = useRef(null);
	const graphRenderer = useRef(null);

	useEffect(() => {
		if (graphElement.current) {
			if (!graphRenderer.current) {
				graphRenderer.current = new GraphRenderer(graphElement.current, {
					data: queryResponse
				});
			} else {
				graphRenderer.current.update({
					data: queryResponse
				});
			}
		}
		return () => {
			if (graphRenderer.current) {
				graphRenderer.current.unload();
			}
		};
	}, [
		queryResponse,
	]);

	const renderGraphText = useCallback(() => {
		const droppedRecordCount = queryResponse.reduce((totalRows, {bucket, record_count}) => totalRows += isNaN(bucket) ? 0 : record_count, 0);
		const totalRecordCount = queryResponse.reduce((totalRows, {bucket, record_count}) => totalRows += record_count, 0);
		const percent = Math.round(droppedRecordCount / totalRecordCount * 1e7) / 1e5;

		return `
			${percent}% (~${droppedRecordCount} observations) of unique ${variable?.name} in "${dataset?.name}" have a k-anonymity value under 10, and may be considered re-identifiable.\n\n
			
			A k-anonymity value of 10 means that a given entity is indistinguishable from at least 9 other values, given the quasi-identifiers provided.\n\n
			
			This table's lowest k-anonymity value is ${Math.min(...queryResponse.map(({bucket}) => isNaN(bucket) ? Infinity : bucket))}\n\n
		`;

	}, [queryResponse, dataset, variable])

	return (
		<div className={styles.graphWrapper}>
			{!queryResponse &&
				<div className={styles.descriptionWrapper}>
					<p>{`This tool can help measure the re-identification risk of the primary entity in this dataset. It will determine to what degree individuals are anonymized based on their uniqueness within the dataset.`}</p>
				</div>
			}
			{queryResponse &&
				<>
					<span>{`K-anonymity in ${dataset?.name}`}</span>
					<div ref={graphElement} className={styles.wrapper} />
					<div className={styles.graphTextWrapper}>{renderGraphText()}</div>
				</>
			}
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
	colorScaleBucketCount: PropTypes.string,
	resolution: PropTypes.string,
	showPoints: PropTypes.bool,
	showPopulationDensity: PropTypes.bool,
	hasDiscreteColorScale: PropTypes.bool,
	pointRadius: PropTypes.string,
	colorScale: PropTypes.arrayOf(PropTypes.string),
	options: PropTypes.object,
	settings: PropTypes.object,
};

Map.defaultProps = {
};
