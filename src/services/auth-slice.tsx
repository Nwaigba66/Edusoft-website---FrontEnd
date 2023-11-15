import { createSlice } from '@reduxjs/toolkit'
import { apiSlice } from '@/services/api'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginResponse } from '@/services/api';
import { doLogout, setAppCookie, getAppCookie } from '@/services'

type TypeCredential = {
	username:string;
	email:string;
	password:string;
}

type TypeLogin = {
	email:string;
	password:string;
}

const initialState: Partial<LoginResponse> = {}



export const authSlice = createSlice({
	name:"auth",
	initialState,
	reducers:{
		logout (){
			doLogout(); // clear the caches
			return {};	// clear the state data
		},
		updateState (state, {payload}){
			return payload;
		},
	},
	extraReducers: (builder) =>{
			builder
				.addMatcher(
					apiSlice.endpoints.login.matchFulfilled,
					(state, { payload }) =>{
						const {
							username, access_expires_seconds, email,
							refresh_expires_seconds, access, refresh } = payload;

						// set respective cookies
						setAppCookie("access", access, access_expires_seconds/1000);
						setAppCookie("refresh",refresh, refresh_expires_seconds/1000);
						setAppCookie("access_expires_seconds", access_expires_seconds,access_expires_seconds/1000);
						setAppCookie("refresh_expires_seconds", refresh_expires_seconds,refresh_expires_seconds/1000);
						setAppCookie('username', username,refresh_expires_seconds/1000)
						setAppCookie('email', email,refresh_expires_seconds/1000)
						return payload;
					}
				)
				.addMatcher(
					apiSlice.endpoints.refreshToken.matchFulfilled,
					(state, { payload }) =>{
						// update access token recieved from the request
						// console.log(payload)
						if (payload.access){
							// update the cookies
							const access_expires_seconds = new Date().getTime() + 295000;
							setAppCookie("access", payload.access, access_expires_seconds/1000);

							setAppCookie('access_expires_seconds',access_expires_seconds, access_expires_seconds/1000)

							// update the state
							return {
								...state,
								access:payload.access,
								access_expires_seconds:access_expires_seconds,
							}
						}
					}
				)
		}
})

export const {logout, updateState } = authSlice.actions
export default authSlice.reducer