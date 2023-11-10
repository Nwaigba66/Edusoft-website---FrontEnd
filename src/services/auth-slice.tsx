import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TypeCredential = {
	username:string;
	email:string;
	password:string;
}

type TypeLogin = {
	email:string;
	password:string;
}

const initialState = {
	username:"",
	isLoggedIn:false,
	email:"",
	password:""
}

export const authSlice = createSlice({
	name:"auth",
	initialState,
	reducers:{
		login (state, action: PayloadAction<TypeLogin>) {
			
			if (state.email === action.payload.email && state.password === action.payload.password){
				state.isLoggedIn=true;
			}
		},
		logout (state) {
			state.username = "";
			state.email="";
			state.password="";
			state.isLoggedIn=false;
		},
		register (state, action: PayloadAction<TypeCredential>){
			state.username = action.payload.username;
			state.email=action.payload.email;
			state.password=action.payload.password;
		}
	}
})

export const { login, logout, register } = authSlice.actions
export default authSlice.reducer