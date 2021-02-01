import * as d3 from 'd3-selection';
import * as styles from '../styles.css';

import { onFeatureClickCallbacks, onFeatureHoverCallbacks } from '../Map';

export default function (map, g) {
	const layers = g.selectAll(`.${styles.layer}`).data(map.layers, (d) => d.layerName);

	map.layersSelection = layers;
	map.featuresSelection = {};

	layers
		.enter()
		.insert('g', ':last-child')
		.attr('class', (d) => `${styles.layer} ${styles[d.layerType]}`)
		.attr('data-layer', (d) => d.layerName)
		.merge(layers)
		.each(function (layer) {
			const featuresData = layer.features || [layer];
			const features = d3
				.select(this)
				.selectAll(`path.${styles.region}`)
				.data(featuresData, (feature) => feature.id);
			layer.elem = this;

			map.featuresSelection[layer.layerName] = d3.select(this);

			features
				.enter()
				.append('path')
				.attr('class', styles.region)
				.attr('data-id', (d) => d.id)
				.attr('d', function (feature) {
					feature.elem = this;
					return map.path(feature);
				})
				.filter((feature) => {
					return feature.type === 'Feature';
				})
				.on('click', function (feature) {
					onFeatureClickCallbacks.get(map).forEach((fn) => {
						fn.call(this, feature);
					});
				})
				.on('mouseenter', function (feature) {
					onFeatureHoverCallbacks.get(map).forEach((fns) => {
						fns[0].call(this, feature);
					});
				})
				.on('mouseleave', function (feature) {
					onFeatureHoverCallbacks.get(map).forEach((fns) => {
						fns[1].call(this, feature);
					});
				});

			// features.enter()
			// 	.merge(features)
			// 	.selectAll('.region')
			// 	.attr('d', function (feature, i) {
			// 		feature.elem = this;
			// 		console.log(i)
			// 		return map.path(feature);
			// 	});
		});
}
