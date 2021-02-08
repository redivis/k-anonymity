export default function () {
	let authResponse = localStorage.getItem('authorization');
	if (!authResponse) {
		return null;
	}
	authResponse = JSON.parse(authResponse);
	if (authResponse.expires_at < Date.now() / 1000) {
		localStorage.removeItem('authorization');
		return null;
	}
	return authResponse.access_token;
}
