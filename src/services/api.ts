import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Courses, FilterOptions, TypeCoursesDetail } from '@/components/types';
import { baseUrl } from '@/components/urls'

interface LoginResponse {
	first_name:string;
	last_name:string;
	email:string;
	username:string;
	access:string;
	refresh:string;
	access_expiry_seconds:number;
	refresh_expirty_seconds:number;
}


interface LoginData {
	email:string;
	password:string;
}

export const apiSlice = createApi({
	reducerPath:'api',
	baseQuery: fetchBaseQuery({
		baseUrl
	}),
	endpoints(builder){
		return {
			fetchCourses: builder.query<Courses, string|void>({
				query(endpoint=""){
					return `/courses/list/${endpoint ? "?"+ endpoint : endpoint}`
				},
			}),
			fetchOptions: builder.query<FilterOptions, void>({
				query(){
					return `/options/`
				},
			}),
			fetchCourseDetail: builder.query<TypeCoursesDetail, string>({
				query(courseId){
					return `/courses/${courseId}`
				},
			}),
			login: builder.mutation<LoginResponse, LoginData>({
				query: ({username, password}) =>({
					url: '/token',
					method: 'POST',
					body:{
						username,
						password
					},
				}),
			}),
			refreshToken: builder.mutation<Partial<LoginResponse>, {refresh: string}>({
				query: (refresh) =>({
					url: '/token/refresh',
					method: 'POST',
					body:{
						refresh,
					},
				}),
			}),
			getAuthenticationData: builder.query<Partial<LoginResponse>, string>({
				query: (accessToken) =>({
					url: '/user',
					method: 'GET',
					headers: {
						Authorization: `Bearer ${accessToken}`
					},
				}),
			}),
		}
	},
});


export const {
	useGetAuthenticationDataQuery,
	useRefreshTokenMutation,
	useLoginMutation,
	useFetchCoursesQuery,
	useFetchOptionsQuery,
	useFetchCourseDetailQuery } = apiSlice;