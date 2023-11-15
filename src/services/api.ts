import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Courses, FilterOptions, TypeCoursesDetail } from '@/components/types';
import { baseUrl } from '@/components/urls'


// the login response interface
export interface LoginResponse {
	first_name:string;
	last_name:string;
	email:string;
	username:string;
	access:string;
	refresh:string;
	access_expires_seconds:number;
	refresh_expires_seconds:number;
}


// login data interface
interface LoginData {
	email:string;
	password:string;
}


// define api slice to manage all state related to api, majorly sending http requests
export const apiSlice = createApi({
	reducerPath:'api',
	baseQuery: fetchBaseQuery({
		baseUrl
	}),
	endpoints(builder){
		return {
			fetchCourses: builder.query<Courses, string|void>({ // get courses list
				query(endpoint=""){
					return `/courses/list/${endpoint ? "?"+ endpoint : endpoint}`
				},
			}),
			fetchOptions: builder.query<FilterOptions, void>({ 
			// get options used for sidebar searches
				query(){
					return `/options/`
				},
			}),
			fetchCourseDetail: builder.query<TypeCoursesDetail, string>({ 
			// get details of a given course with courseId
				query(courseId){
					return `/courses/${courseId}`
				},
			}),
			login: builder.mutation<LoginResponse, LoginData>({ 
			// request for user login (response include access and refresh token)
				query: ({email, password}) =>({
					url: '/token/',
					method: 'POST',
					body:{
						email,
						password
					},
				}),
			}),
			refreshToken: builder.mutation<Partial<LoginResponse>, string>({ 
			// request for new access token after using the refresh token
				query: (refresh) =>({
					url: '/token/refresh/',
					method: 'POST',
					body:{
						refresh: refresh,
					},
				}),
			}),
			getAuthenticationData: builder.query<Partial<LoginResponse>, string>({
				// get information of a user with a given access token
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