import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Courses } from '@/components/types';
import { baseUrl } from '@/components/urls'


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
		}
	},
});

export const { useFetchCoursesQuery } = apiSlice;