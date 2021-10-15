// This just gives limited access to our one public dataset
const key = `Ii0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZRSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2N3Z2dTakFnRUFBb0lCQVFDdXlibkxGRU53emNiRlxuNVdZR05HM080bHZPeDQrQVFxblpHMUpCbzBFbCsxbzBaMWhsUndjd3dIYUNmRGZKeUdnSEFTa1FrL2NTYjlNOFxuVlorUTBDbEd3M09OQkIvZmZSd0w2cFFxc0gvNjc0bU8zc3I0N2pGckNPVXdvbHZudnU2SmJ6MkZHdkxNWTBWUFxuWHdXcTNYdko5aUVlSStIM3lNUGVMNjgrOUdoTWdiTVoyWVVRMXFIdDhtK3ZaQ0ZFOXo0elpub2pPQUMrYVBhVlxuTjk5ODlWOVd0bTNHNGkrQUNFb29pRnN2MWlzRk5lNUhMemZ6aUExNFQrVUhKdEVOVXBoVCtIQ1dKUHRFYW5mdlxuaG9kT244OEdXbDNQRFpRMExuVk85Uit5Q1hqWVUzM04wWkVQbmphRjRYdmRMeUx3cDdCck53Q25tanN2YXR6T1xuUUQ2ZVVET2JBZ01CQUFFQ2dnRUFDR2k2SUpRVC9veFg0Tk45aWhUaHA0OXFYVk5xaXdBcURjRHJ2eTZzaHJoR1xuQ2JsakhsUkJlMDMzSmFYMlJTWDRJMFlpQktNcHd1QlFhRm15T0pSYk9BVlZQTmFTOWZ5ZDZkRGFXZ2R0ME5QUFxuYVdrOG1LZFZCMUpCUElyREl5NGphY2RKVFdzVGZWUFZWTkU4ZzVEdVVMUWZ1Y1IrTFo2aUZjRnppL0xVUmNIdlxuU0tTN0JqZm1qdmVZQmRmcDVRdytWbmt3a1RZSDhkYXlVb0dWY3kxRmUwWVZiUEwyR01BaTJtSEdBRFRRNlV1c1xuY2Q5L09IZFNpdUlWNDgybW5VczFSVkpvYXBiQlBwVTFPY2I1emNyY0ZLS2tBQWR2Y1NHUGYxbWFmS2F3eUY2OVxuY0NRT1NHSGU1bW5GcXVuVS8rYzE2bFJ1K043Y0dZR1QwS2YweXFzeHdRS0JnUURnMHJLOGdldDBFZEErUy9XZVxuYXdTTk1ITUhpdFVvbWQ4YjduU1FCTVllQWlFMENWblhIbkdUUTJJay9lV0JEVy80emMrMnJwNU55bWx2OW9JYlxuMVdldTA4SWliSjMrYjFTT3JnTkx5Yll2ZklITVVNaC8ySS9RLzVnNHhDKzBJU2tPS2s5ZXM5MDk3SXFNT2FjK1xuaFVmaDI5ZER0Mll2WHJsRUdpQVdEMXZ4ZXdLQmdRREhCc1BCYXVBUzZpcmhuekhNNXUxMnZRQmFuR1dzWS9xZVxuRUxvTzNCTHlYZlNSNmF0L2RVeXk5Sy8yM2RicWxvblErV3Nibm9GcWFSUkVydXpGM2cxS3VmZFNPTnZZNnZpSVxuOW5seE5NMktlQ3NydEdQUU1QNVJHRTVod0xGMk1vazBEWlpNVGZCSWpQR1o3TTZlTlp1VVRSZXlIWER4WmQ3Z1xuTnh1VFJwemNZUUtCZ0JEZFBUTU91ODYxRjEzVTdOTzVTMW9iN0VVQWtRUytwaEcrVFZnUVE1dzBwTEQya3Bxa1xuV2ZpbDhWSzlDTjRwVitEZDcxclF0bWMzYTdsT1VHd3VFZHozWFhTZm1TcGd4NEw4WXByb3dwWEZUU2M2V0EvZVxuK3NxK29YaUFudU53S1ZnNnJFRjZWSG8wcUIva296cjVYRzhBd3FEOXZOaUl6blRoVU03VzBCckpBb0dBTjJ3d1xuMHdtNkFFcHBTbzhVUlNVQmQ1RkdLZlZuY3N3Y25DdTRSQzhRcjZGdVc3dWdZRXYvNGMyMXVwOG9IQWR6dFZmZlxuZGI5NzltL3dqdmZQUTRLRVhRelFUSHM4N1hqeFlPS1NDdTVUVm40RU41VnlQaVdHakhxaVNTSnB5S3BsL3JMUlxuNmNuQ1lkR3Q3ZGs5NkZ5eFNHajNja2cwaldSNjNpRTZjcGExVThFQ2dZRUExcXlxVHJ0aTBuTHpVTEFxVjVrZlxuL3U4allsMXlhOW41cUNCeXovQitvUHRZTW4rVFUxRm9TRHBMZ3ZFNlo2T0ZuRmRXUzlWcjd0MXJvbW0razJWUVxubzdBOVFhY0VCRnBnQlNpSmlxelZOY2VyWjlqT0t3Nll5VGRyTTZabHoxUzFZUkFUVERVclBUZ1JTM2VQcGNaNVxud3RpdUlVaTR5NnpaU1BmdmIvTFlNUnc9XG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4i`;
import SignJWT from 'jose/jwt/sign';
import * as cache from '../../helpers/cache';

let token;

export default async function () {
	if (!token) {
		token = await cache.get('geoAccessToken');
	}
	if (token && token.expires_at > Date.now() / 1000 + 300) {
		return token.access_token;
	} else {
		const cryptoKey = await importPrivateKey(JSON.parse(atob(key)));

		const jwt = await new SignJWT({
			scope: 'https://www.googleapis.com/auth/bigquery',
		})
			.setProtectedHeader({ alg: 'RS256', typ: 'JWT' })
			.setIssuedAt()
			.setIssuer('bigquery@geo-coverage.iam.gserviceaccount.com')
			.setAudience('https://oauth2.googleapis.com/token')
			.setExpirationTime('1h')
			.sign(cryptoKey);

		const res = await fetch(
			`https://oauth2.googleapis.com/token?assertion=${jwt}&grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer`,
			{ method: 'POST' },
		);
		token = await res.json();
		token.expires_at = Math.round(Date.now() / 1000) + token.expires_in;
		await cache.set('geoAccessToken', token);
		return token.access_token;
	}
}

/*
Convert a string into an ArrayBuffer
from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
*/
function str2ab(str) {
	const buf = new ArrayBuffer(str.length);
	const bufView = new Uint8Array(buf);
	for (let i = 0, strLen = str.length; i < strLen; i++) {
		bufView[i] = str.charCodeAt(i);
	}
	return buf;
}

/*
Import a PEM encoded RSA private key, to use for RSA-PSS signing.
Takes a string containing the PEM encoded key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
function importPrivateKey(pem) {
	// fetch the part of the PEM string between header and footer
	const pemContents = pem.replace(/^\s*-+BEGIN PRIVATE KEY-+\s*/i, '').replace(/\s*-+END PRIVATE KEY-+\s*$/i, '');
	// base64 decode the string to get the binary data
	const binaryDerString = window.atob(pemContents);
	// convert from a binary string to an ArrayBuffer
	const binaryDer = str2ab(binaryDerString);

	return window.crypto.subtle.importKey(
		'pkcs8',
		binaryDer,
		{
			name: 'RSASSA-PKCS1-v1_5',
			// Consider using a 4096-bit key for systems that require long-term security
			modulusLength: 2048,
			publicExponent: new Uint8Array([1, 0, 1]),
			hash: 'SHA-256',
		},
		true,
		['sign'],
	);
}
