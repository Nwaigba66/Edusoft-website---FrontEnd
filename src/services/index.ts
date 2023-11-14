import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { LoginResponse } from './api'

export const setAppCookie = (key:string, value: string|number, validity:number)=>{
	// set cookies identified by a given key with a value and validity 
	// in milliseconds
	const encodedValue = Buffer.from(`${value}`).toString('base64');

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
	'access', 'refresh', 'email', 'username',
	'access_expires_seconds', 'refresh_expires_seconds'
	]


export const doLogout = () =>{
	for (const key of cookieKeys){
		deleteCookie(key);
	}
}

export function getInitialData(){

	// get the initial data from cookie
	const initialData:{
		[key:string]:string|number
	} = {};
	for (const key of cookieKeys ){
		if (key.endsWith('seconds')){
			const value = getAppCookie(key) || "";
			initialData[key] = value? +value : value;
		}
		else{
			const value = getAppCookie(key) || "";
			initialData[key] = value;
		}
	}
	return initialData
}

export const isAccessExpired = ()=>{
	const validity = getAppCookie('access_expires_seconds') || 1;

	return (new Date().getTime()) > +validity;
}

export const isRefreshExpired = () =>{
	const validity = getAppCookie('refresh_expires_seconds') || 1;

	return (new Date().getTime()) > +validity;
}