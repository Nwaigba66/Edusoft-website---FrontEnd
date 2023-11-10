"use client"
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import { useFetchCoursesQuery } from '@/services/api'
import BackIcon from '@/components/Icons/BackIcon'
import Loader from '@/components/Loader'
import './search.css';


function SearchPage() {
	const router = useRouter()
	const params = useParams()
	const queries = useSearchParams()
	const country = queries.get('country')
	const search = queries.get('search')
	const course = queries.get('course')

	const query = `${search?"search="+search:""}
	${country?"&country="+ country:""}${course?"&course="+ course:""}`
	const { data, isLoading } = useFetchCoursesQuery(query)
	console.log(data)

	return (
		<div className="search-page">
			<div className="flex justify-center relative h-[5rem] text-xl ">
							<button className="absolute shadow left-0" onClick={()=>router.back()}>
								<BackIcon color="gray" />
							</button>
							Search Results by Institutions
			</div>
			
			<div className=" min-h-[10rem]">
			
			{isLoading &&  <Loader message="Loading..." />}
			{!isLoading && data?.results && <ul>
				{data.results.map(({name,id, university})=><li className="search-item border-b-2" key={id}>
					<Link href={`/course/${id}`}>
						<div className="text-sm text-blue-400 underline">
							{university}
						</div>
						<div className="ml-auto ">
							{name}
						</div>
					</Link> 
				</li>)}
				{data?.results.length === 0 && <li className="text-2xl flex justify-center items-center">No Result Found</li>}
			</ul>}

			</div>
		</div>
	)
}

export default SearchPage