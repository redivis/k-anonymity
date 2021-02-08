import * as cache from '../../helpers/cache';

export default async function (bbox, rasterNames) {
	rasterNames = rasterNames || [];
	if (!(rasterNames instanceof Array)) rasterNames = [rasterNames];

	const query = { bbox, rasterNames };

	const cachedResult = await cache.get(query);

	if (cachedResult) {
		return cachedResult;
	}

	const rasters = [];
	for (const name of rasterNames) {
		const raster = await clipRaster(bbox, name);
		rasters.push(raster);
	}

	await cache.set(query, rasters);

	return rasters;
}

async function clipRaster(bbox, rasterName) {
	rasterName += '_minified';

	const image = new Image();

	return new Promise((resolve, reject) => {
		image.onload = () => {
			const canvas = document.createElement('canvas');

			const latitudePixelsPerDegree = image.height / 180;
			const longitudePixelsPerDegree = image.width / 360;

			let x = (bbox[0] + 180) * longitudePixelsPerDegree;
			let y = (90 - bbox[3]) * latitudePixelsPerDegree;
			let width = (bbox[2] - bbox[0]) * longitudePixelsPerDegree;
			let height = (bbox[3] - bbox[1]) * latitudePixelsPerDegree;

			x = Math.floor(x);
			y = Math.floor(y);
			width = Math.ceil(width);
			height = Math.ceil(height);
			canvas.width = width;
			canvas.height = height;
			const ctx = canvas.getContext('2d');

			ctx.drawImage(
				image,
				x,
				y, // Start at x/y pixels from the left and the top of the image (crop),
				width,
				height, // "Get" a  (w * h) area from the source image (crop),
				0,
				0, // Place the result at 0, 0 in the canvas,
				width,
				height,
			);
			resolve({ dataURL: canvas.toDataURL() });
		};
		image.src = `${window.location.origin}${process.env.ROOT_PATH}/assets/${rasterName}.png`;
	});
}
