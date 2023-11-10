import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '@/services/api'
import authReducer from '../auth-slice';

export const store = configureStore({
	reducer: {
		auth:authReducer,
		[apiSlice.reducerPath] : apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>{
		return getDefaultMiddleware().concat(apiSlice.middleware)
	}
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;