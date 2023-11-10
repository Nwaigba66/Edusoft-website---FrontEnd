'use client'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Loader from '@/components/Loader'
import { useFetchCourseDetailQuery } from '@/services/api'
import './course.css'

function Course() {
	const router = useRouter()
	const {courseId} = useParams<{courseId:string}>();
	
	const { data, isLoading } = useFetchCourseDetailQuery(courseId)
	return (
		<div className="course-detail">
			<h2 className="flex items-center border-b-2 justify-center text-2xl min-h-[5rem]">
			{`${data?.name? data.name : "Course Detail Page"}`}
			</h2>
			
			<div className="text-center">
			{isLoading && <Loader message="Loading..."/>}
			{!isLoading && <dl>
				{data?.university && <>
				<dt className="text-xl text-left">University:</dt>
				<dd className="pb-4 mb-4 border-b-2">{data.university}</dd>
				</>}
				{data?.department && <>
				<dt className="text-xl text-left">Department:</dt>
				<dd className="pb-4 mb-4  border-b-2">{data.department}</dd>
				</>}
				{data?.about && <>
				<dt className="text-xl text-left">About</dt>
				<dd className="pb-4 mb-4  border-b-2">{data.about}</dd>
				</>}
				{data?.degrees && <>
				<dt className="text-xl text-left">Degrees</dt>
				<dd className="pb-4 mb-4  border-b-2">
				<ul>
					{data.degrees.map(item=><li key={item}>{item}</li>)}
				</ul>
				</dd>
				</>}
			</dl>}
			
			</div>
			<div className="flex justify-center items-center mb-8">
				<button className="bg-green-500 text-white text-xl p-4 rounded">Book Consultation</button>
			</div>
		</div>
	)
}

export default Course