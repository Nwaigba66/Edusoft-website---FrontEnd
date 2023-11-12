import { setCookie, getCookie, removeCookie } from 'cookies-next';


export const setAppCookie = (key:string, value:string, validity:number)=>{
	// set cookies identified by a given key with a value and validity 
	// in milliseconds
	const encodedValue = Buffer.from(value).toString('base64');

	setCookie(key, encodedValue,{
		maxAge:validity,
		path:'/'
	});
}

export const getAppCookie = (key:string) =>{
	const cookie = getCookie(key);
	if (!cookie) return undefined;

	// decode and return cookie
	return Buffer.from(cookie, 'base64').toString('ascii');
}

export const cookieKeys: string[] = [
	'accessToken', 'refreshToken',
	'accessTokenValidity', 'refreshTokenValidity'
	]


export const doLogout = () =>{
	for (const key in cookieKeys){
		removeCookie(key);
	}
}

export const isAccessExpired = ()=>{
	const validity = getAppCookie('accessTokenValidity') || 1;

	return (new Date().getTime()) > validity;
}

export const isRefreshExpired = () =>{
	const validity = getAppCookie('refreshTokenValidity') || 1;

	return (new Date().getTime()) > validity;
}