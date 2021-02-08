import { geoAlbersUsa, geoEquirectangular } from 'd3-geo';

export default function(bbox, width, height) {
	//USA BBOX: [[[-177.978515625,18.7295019991],[-177.978515625,71.4411708517],[-66.708984375,71.4411708517],[-66.708984375,18.7295019991],[-177.978515625,18.7295019991]]]
	if (bbox[0] > -180 && bbox[0] < -175) {
		return geoAlbersUsa()
			.scale(width)
			.translate([width / 2, height / 2]);
	}

	const projection = geoEquirectangular()
		.scale(1)
		.translate([0, 0]);

	const topLeft = projection([bbox[0], bbox[1]]);
	const bottomRight = projection([bbox[2], bbox[3]]);
	const scale =
		1 / Math.max(Math.abs(bottomRight[0] - topLeft[0]) / width, Math.abs(topLeft[1] - bottomRight[1]) / height);

	const translate = [
		(width - scale * (topLeft[0] + bottomRight[0])) / 2,
		(height - scale * (topLeft[1] + bottomRight[1])) / 2,
	];

	projection.scale(scale).translate(translate);

	return projection;
}
