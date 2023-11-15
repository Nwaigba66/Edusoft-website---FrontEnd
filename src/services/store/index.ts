import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '@/services/api'
import authReducer from '../auth-slice';

// setup the redux store to manage state
export const store = configureStore({
	reducer: {
		auth:authReducer,
		[apiSlice.reducerPath] : apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>{
		return getDefaultMiddleware().concat(apiSlice.middleware)
	}
})



export type AppDispatch = typeof store.dispatch;  // custom typescripted dispatch
export type RootState = ReturnType<typeof store.getState>;



