import { zoomTransform } from 'd3';

export default function ({ width, height, minRatio }) {
	let transform = zoomTransform(this.svg);

	transform = transform.scale(minRatio / transform.k);

	// this.zoom.transform(this.svg, transform);

	this.svg.attr('width', width).attr('height', height);

	this.resizeRatio = minRatio;
}
