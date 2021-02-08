import * as topojson from 'topojson';
import * as topojsonSimplify from 'topojson-simplify';

export default function buildTopology(topologyMap) {
	let topology = topojson.topology(topologyMap, {
		'property-transform': function (feature) {
			return feature.properties;
		},
	});
	const totalArea = (topology.bbox[2] - topology.bbox[0]) * (topology.bbox[3] - topology.bbox[1]);

	topology = topojsonSimplify.presimplify(topology);

	topology = topojsonSimplify.simplify(topology, totalArea / 1e6);

	return topology;
}
