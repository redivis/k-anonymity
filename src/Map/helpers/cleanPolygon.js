export default function(rings, OSM_MODE) {
	const isInterior = rings.length > 1;

	rings.forEach((ring) => {
		getBBox(ring);
	});
	if (!OSM_MODE) return;
	rings.sort((a, b) => {
		if (a.bbox[0] < b.bbox[0] && a.bbox[2] > b.bbox[2]) {
			return -1;
		}
		return 1;
	});
	rings.forEach((ring, i) => {
		if (!checkWindingOrder(ring, isInterior && i > 0)) {
			ring.reverse();
		}
	});
}

function getBBox(coords) {
	let xMin = coords[0][0];
	let xMax = coords[0][0];
	let yMin = coords[0][1];
	let yMax = coords[0][1];
	let xMinIndex = 0;
	let xMaxIndex = 0;
	let yMinIndex = 0;
	let yMaxIndex = 0;
	for (let i = 1; i < coords.length; i++) {
		if (coords[i][0] <= xMin) {
			xMin = coords[i][0];
			xMinIndex = i;
		}
		if (coords[i][0] >= xMax) {
			xMax = coords[i][0];
			xMaxIndex = i;
		}
		if (coords[i][1] <= yMin) {
			yMin = coords[i][1];
			yMinIndex = i;
		}
		if (coords[i][1] >= yMax) {
			yMax = coords[i][1];
			yMaxIndex = i;
		}
	}
	coords.bbox = [xMin, yMin, xMax, yMax];
	coords.bboxIndexes = [xMinIndex, yMinIndex, xMaxIndex, yMaxIndex];
}

function checkWindingOrder(coords, isInterior) {
	let i;
	let bool = true;
	const arr = [].concat(coords.bboxIndexes).reverse();

	let minValue;
	let minIndex;
	for (i = 0; i < arr.length; i++) {
		if (minValue === undefined || arr[i] < minValue) {
			minValue = arr[i];
			minIndex = i;
		}
	}

	let prevIndex = arr[minIndex];
	let counter = 0;
	for (i = minIndex + 1; counter < 3; i++) {
		if (i > 3) {
			i = 0;
		}
		if (arr[i] < prevIndex) {
			bool = false;
		}
		prevIndex = arr[i];
		counter++;
	}
	return isInterior ? !bool : bool;
}
