import { zoom, event as d3Event } from 'd3';

import { onZoomCallbacks } from '../index';

export default function (map) {
	map.zoom = zoom()
		.scaleExtent([0.3, 1000])
		.on('zoom', () => {
			map.g.attr('transform', d3Event.transform);
			onZoomCallbacks.get(map).forEach((cb) => cb(map.zoom));
		});

	map.zoom(map.svg);
}
