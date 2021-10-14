import './styles.css';

import * as styles from './styles.css';

import tooltip from 'helpers/d3/tooltip';

import { select as d3Select } from 'd3-selection';
import { scaleLinear as d3ScaleLinear, scaleBand as d3ScaleBand, scaleLog as d3ScaleLog } from 'd3-scale';
import { axisBottom as d3AxisBottom } from 'd3-axis';
import { max as d3Max } from 'd3-array';

const barTooltip = tooltip()
	.attr('class', styles.tooltip)
	.html((bar) => {
		return `
			<div class="${styles.row}">
				<div class="${styles.label}">k-anonymity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
				<div class="${styles.value}">{bar.bucket}</div>
			</div>
			<div class="${styles.divider}"></div>
			<div class="${styles.row}">
				<div class="${styles.label}">Records (cumulative)</div>
				<div class="${styles.value}">{bar.record_count}%</div>
			</div>
		`;
	});

export default class GraphRenderer {
	constructor(elem, props) {
		this.elem = elem;
		this.margin = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		};
		window.addEventListener('resize', () => {
			this.onResize();
		});

		const xOffset = this.margin.left;
		const yOffset = this.margin.top;

		this.svg = d3Select(elem).append('svg').attr('width', `100%`).attr('height', `100%`);

		this.svg.append('g').attr('class', styles.bars).attr('transform', `translate(${xOffset}, ${yOffset})`);

		this.svg.append('g').attr('class', `${styles.axis} ${styles.xAxis}`);

		this.svg.call(barTooltip);

		this.update(props);
	}

	onResize() {
		if (this.chart) {
			const defaultWidth = 700;
			const defaultHeight = 467;
			const height = this.elem.offsetHeight;
			const width = this.elem.offsetWidth;
			const minRatio = Math.min(height / defaultHeight, width / defaultWidth);
			this.chart.resize({ width, height, minRatio });
		}
	}

	update({ data }) {
		if (data) {
			this.elem.classList.add(styles.loading);


			this.onResize();
			this.elem.classList.remove(styles.loading);
		}
	}

	unload() {}
}
