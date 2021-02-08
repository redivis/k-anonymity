import './styles.css';
import Map from './Map';

import * as styles from './styles.css';
import colorScale from './helpers/colorScale';
import * as colorbrewer from 'colorbrewer';

export default class MapRenderer {
	constructor(elem, props) {
		this.elem = elem;
		this.update(props);
		this.collection = null;
		this.mapData = null;
		this.coverageTravelTime = null;
		this.resolution = null;
		this.showPopulationDensity = null;
		this.hasDiscreteColorScale = null;
		window.addEventListener('resize', () => {
			this.onResize();
		});
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
			if (
				!this.map ||
				// We need to redraw if data changes or coverage settings change
				collection !== this.collection ||
				mapData !== this.mapData ||
				settings.coverageTravelTime !== this.coverageTravelTime ||
				settings.resolution !== this.resolution ||
				settings.showPopulationDensity !== this.showPopulationDensity ||
				settings.hasDiscreteColorScale !== this.hasDiscreteColorScale
			) {
				this.collection = collection;
				this.mapData = mapData;
				this.coverageTravelTime = settings.coverageTravelTime;
				this.resolution = settings.resolution;
				this.showPopulationDensity = settings.showPopulationDensity;
				this.hasDiscreteColorScale = settings.hasDiscreteColorScale;
				this.elem.innerHTML = '';
				this.map = new Map(mapData, this.elem);

				if (!settings.hasDiscreteColorScale) {
					this.map.colorScale = this.map.colorScale.type('continuous');
				}

				this.map.bindSeries(collection, options);
				this.map.showCoverage(
					settings.coverageTravelTime / 60,
					settings.resolution,
					settings.showPopulationDensity,
				);
			}

			if (settings.showPoints) {
				this.map.showPoints();
				this.map.resizePoints(settings.pointRadius);
			} else {
				this.map.hidePoints();
			}

			this.onResize();
			this.elem.classList.remove(styles.loading);
		}
	}

	downloadCsv = () => {
		window.getCostDistanceCsv();
	};

	unload() {}
}
