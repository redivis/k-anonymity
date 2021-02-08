export default function getGreatCircle(lat1, lon1, lat2, lon2) {
	let base = 0;
	if (lon2 - lon1 > 180) {
		base = getGreatCircle(lat1, lon1, lat2, lon1 + (lon2 - lon1) / 2);
		lon1 = lon1 + (lon2 - lon1) / 2;
	}
	const r = 6371.009;
	lat1 *= Math.PI / 180;
	lon1 *= Math.PI / 180;
	lat2 *= Math.PI / 180;
	lon2 *= Math.PI / 180;
	const lonDelta = lon2 - lon1;
	const a =
		Math.pow(Math.cos(lat2) * Math.sin(lonDelta), 2) +
		Math.pow(Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lonDelta), 2);
	const b = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lonDelta);
	const angle = Math.atan2(Math.sqrt(a), b);

	return base + angle * r;
}
