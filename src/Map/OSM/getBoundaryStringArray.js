export default function getBoundaryStringArray(boundary) {
	const arr = [];
	if (boundary.features) {
		boundary.features.forEach((feature) => {
			if (feature.geometry.type === 'Polygon') {
				stringifyPolygon(feature.geometry.coordinates, arr);
			} else if (feature.geometry.type === 'MultiPolygon') {
				feature.geometry.coordinates.forEach((polygon) => {
					stringifyPolygon(polygon, arr);
				});
			}
		});
		return arr;
	} else if (boundary.type === 'MultiLineString') {
		const coordinates = boundary.coordinates;
		let longestRun = 0;
		for (let i = 1; i < coordinates.length; i++) {
			if (coordinates[i].length > coordinates[longestRun].length) {
				longestRun = i;
			}
		}

		stringifyPolygon([boundary.coordinates[longestRun]], arr);
		return arr;
	}
}

// TODO: how to handle polygons w/ holes??
function stringifyPolygon(polygon, arr) {
	let boundaryString = '(poly:"';
	polygon[0].forEach((coord) => {
		boundaryString += `${coord[1]} ${coord[0]} `;
	});
	boundaryString = boundaryString.slice(0, -1);
	arr.push(`${boundaryString}")`);
}
