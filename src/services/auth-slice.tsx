import { createSlice } from '@reduxjs/toolkit'
import { apiSlice } from '@/services/api'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginResponse } from '@/services/api';
import { doLogout } from '@/services'

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
			return {};
		},
		// setAuthData (state, action: PayloadAction<TypeCredential>){
		// 	state.username = action.payload.username;
		// 	state.email=action.payload.email;
		// 	state.isLoggedIn=true;
		// },
		extraReducers: (builder) =>{
			builder
				.addMatcher(
					apiSlice.endpoints.login.matchFulfilled,
					(_state, { payload }) =>{
						setAppCookie(key="accessToken", value=payload.access, validity= payload.access_expiry_seconds/1000);
						setAppCookie(key="refreshToken", value=payload.refresh, validity= payload.refresh_expiry_seconds/1000);
						setAppCookie(key="accessTokenValidity", value=payload.refresh_expiry_seconds, validity=payload.refresh_expiry_seconds);
						setAppCookie(key="refreshTokenValidity", value=payload.refresh_expiry_seconds, validity=payload.refresh_expiry_seconds);

						return payload;
					}
				)
				.addMatcher(
					apiSlice.endpoints.refreshToken.matchFulfilled,
					(_state, { payload }) =>{
						const accessValidity = getAppCookie("accessTokenValidity") || 5 * 60;
						setAppCookie(key="accessToken", value=payload.access, validity=accessValidity);
						
						return payload;
					}
				)
		}
	}
})

export const {logout, setAuthData } = authSlice.actions
export default authSlice.reducer