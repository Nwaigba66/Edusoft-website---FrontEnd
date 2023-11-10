import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Courses, FilterOptions, TypeCoursesDetail } from '@/components/types';
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
		}
	},
});

export const {
	useFetchCoursesQuery,
	useFetchOptionsQuery,
	useFetchCourseDetailQuery } = apiSlice;