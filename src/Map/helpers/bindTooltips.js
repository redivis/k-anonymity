import tooltip from './tooltip';

const pointTip = tooltip()
	.attr('class', 'tooltip')
	.delay(100)
	.html(function ({ point, map }) {
		let str = '<div class="title">' + (point.name ? point.name : point.serie.value) + '</div>';

		str += '<ul>';
		for (const indicator of map.collection.indicators) {
			str += `<li>${indicator.variable.name}: ${indicator.getDatum(point.serie).value}</li>`;
		}

		str += '</ul>';
		return str;
	});

const featureTip = tooltip()
	.attr('class', 'tooltip')
	.delay(300)
	.html(function ({ feature, map }) {
		let str = '';
		let name = feature.name;
		if (!name && feature.properties) {
			name = feature.properties.name;
			if (feature.properties.tags && !name) {
				name = feature.properties.tags.name;
			}
		}

		if (name) {
			str += '<div class="title">' + name + '</div>';
		}
		str += '<ul>';
		str += `<li>Population Covered: ${Math.round(map.getFeatureCoverage(feature) * 1000) / 10}%</li>`;
		if (feature.points && feature.points.length) {
			str += `<li>Number of points: ${feature.points.length}</li>`;
		}

		str += '<ul>';

		return str;
	});

export default function (map) {
	map.svg.call(pointTip);
	map.svg.call(featureTip);
	map.onPointHover(
		function (point) {
			pointTip.show.call(this, { point, map });
		},
		function (point) {
			pointTip.hide.call(this, { point, map });
		},
	);

	map.onFeatureHover(
		function (feature) {
			featureTip.show.call(this, { feature, map });
		},
		function (feature) {
			featureTip.hide.call(this, { feature, map });
		},
	);

	// map.onFeatureClick(function(feature){
	//     featureTip.show.call(this, feature);
	// }, function(feature){
	//     featureTip.hide.call(this, feature);
	// });
}
