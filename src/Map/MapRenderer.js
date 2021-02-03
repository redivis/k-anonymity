import './styles.css';
import getOSMMap from './OSM/getMap';
import getCollection from '../helpers/getCollection';
import Map from './Map';

import * as styles from './styles.css';

export default class MapRenderer {
	constructor(elem, props) {
		this.elem = elem;
		this.update(props);
		window.addEventListener('resize', this.onResize);
	}

	onResize() {
		if (this.map) {
			const defaultWidth = 700;
			const defaultHeight = 467;
			const height = this.elem.offsetHeight;
			const width = this.elem.offsetWidth;
			const minRatio = Math.min(height / defaultHeight, width / defaultWidth);
			this.map.resize({ width, height, minRatio });
		}
	}

	update({ collection, mapData, options, settings }) {
		if (collection && mapData) {
			this.elem.classList.add(styles.loading);
			this.map = new Map(mapData, this.elem);
			this.map.bindSeries(collection, options);
			if (settings.showPoints) {
				this.map.showPoints();
				this.map.resizePoints(settings.pointRadius);
			} else {
				this.map.hidePoints();
			}
			this.map.showCoverage(
				settings.coverageTravelTime / 60,
				settings.resolution,
				settings.showPopulationDensity,
			);
			this.onResize();
			this.elem.classList.remove(styles.loading);
		}
	}

	downloadCsv = () => {
		window.getCostDistanceCsv();
	};

	unload() {}
}
