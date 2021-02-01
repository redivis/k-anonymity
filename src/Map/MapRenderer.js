import './styles.css';
import getOSMMap from './OSM/getMap';
import getCollection from '../helpers/getCollection';
import Map from './Map';

import * as styles from './styles.css';

export default class MapRenderer {
	constructor(elem, props) {
		this.elem = elem;
		this.update(props).then(() => {
			this.onResize();
		});
		window.addEventListener('resize', this.onResize);
	}

	onResize = () => {
		if (this.map) {
			const defaultWidth = 700;
			const defaultHeight = 467;
			const height = this.elem.offsetHeight;
			const width = this.elem.offsetWidth;
			const minRatio = Math.min(height / defaultHeight, width / defaultWidth);
			this.map.resize({ width, height, minRatio });
		}
	};

	async update({ tableReference = 'ianmathews91.rwanda_geospatial_coverage.coverage', options, settings }) {
		this.elem.classList.add(styles.loading);
		if (options.region.toLowerCase() === 'united states' && !options.subregion) {
			options.region = 'us_contiguous.json';
			options.roads = ['us_roads.json'];
		}
		const mapData = await getOSMMap(options);
		const collection = await getCollection(tableReference);
		this.map = new Map(mapData, this.elem);
		this.map.bindSeries(collection, options);

		if (settings.showPoints) {
			this.map.showPoints();
			this.map.resizePoints(settings.pointRadius);
		} else {
			this.map.hidePoints();
		}
		this.map.showCoverage(settings.coverageTravelTime / 60, settings.resolution, settings.showPopulationDensity);
		this.elem.classList.remove(styles.loading);
	}

	downloadCsv = () => {
		window.getCostDistanceCsv();
	};

	unload() {}
}
