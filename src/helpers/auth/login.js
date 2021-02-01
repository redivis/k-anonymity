export default async function () {
	const clientId = 'PmVK1Qo6Qc2ArCjxeDioC';
	const scope = 'data.data';
	const redirectUri = encodeURIComponent(`${window.location.origin}${process.env.ROOT_PATH}/authCallback`);
	const state = generateRandomString();
	const { challenge, verifier } = await getPKCE();

	window.open(
		`https://redivis.com/oauth/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code&state=${state}&code_challenge=${challenge}&code_challenge_method=S256`,
		null,
		`toolbar=no,menubar=no,width=600,height=600,left=100,top=100`,
	);

	const authorizationResponse = await new Promise((resolve, reject) => {
		window.authCallback = async function ({ code, state: finalState }) {
			if (state !== finalState) {
				reject(new Error(`An error occurred during login. Inconsistent state.`));
			}
			const res = await fetch(`https://redivis.com/oauth/token`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					grant_type: 'authorization_code',
					code,
					redirect_uri: decodeURIComponent(redirectUri),
					code_verifier: verifier,
					client_id: clientId,
				}),
			});
			resolve(res.json());
		};
	});
	localStorage.setItem('authorization', JSON.stringify(authorizationResponse));
	return authorizationResponse.access_token;
}

async function getPKCE() {
	const verifier = generateRandomString();
	const challenge = await pkceChallengeFromVerifier(verifier);
	return { verifier, challenge };
}

function generateRandomString() {
	const array = new Uint32Array(56 / 2);
	window.crypto.getRandomValues(array);
	return Array.from(array, dec2hex).join('');
}

function dec2hex(dec) {
	return ('0' + dec.toString(16)).substr(-2);
}

function sha256(plain) {
	// returns promise ArrayBuffer
	const encoder = new TextEncoder();
	const data = encoder.encode(plain);
	return window.crypto.subtle.digest('SHA-256', data);
}

function base64urlencode(a) {
	// Convert the ArrayBuffer to string using Uint8 array.
	// btoa takes chars from 0-255 and base64 encodes.
	// Then convert the base64 encoded to base64url encoded.
	// (replace + with -, replace / with _, trim trailing =)
	return btoa(String.fromCharCode.apply(null, new Uint8Array(a)))
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=+$/, '');
}

async function pkceChallengeFromVerifier(v) {
	const hashed = await sha256(v);
	return base64urlencode(hashed);
}
