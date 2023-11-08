"use client"
import React, {useState, useEffect} from 'react'
import { useRouter, useParams, useSearchParams } from 'next/navigation'
import { useFetchCoursesQuery } from '@/services/api'
import BackIcon from '@/components/Icons/BackIcon'
import './search.css';


function SearchPage() {
	const router = useRouter()
	const params = useParams()
	const queries = useSearchParams()
	const { data, isLoading } = useFetchCoursesQuery()
	
	

	return (
		<div className="search-page">
			<div className="flex justify-center relative h-[5rem] text-xl ">
							<button className="absolute shadow left-0" onClick={()=>router.back()}>
								<BackIcon color="gray" />
							</button>
							Search Results by Institutions
			</div>
			
			<div className=" min-h-[10rem]">
			
			{isLoading &&  <div className="flex justify-center items-center">
								<span className="inline-block bg-transparent border-solid border-r-8 border-blue-500
										animate-spin h-[5rem] w-[5rem] rounded-full bg-green-500">
								
								</span>
							Loading...
			</div>}
			{!isLoading && data && <ul>
							{data.results.map(({name,id, university})=><li className="flex flex-col border-b-2 border-gray-300" key={id}>
								<div className="text-sm text-blue-400 underline">
									{university}
								</div>
								<div className="ml-auto ">
									{name}
								</div>
							</li>)}
						</ul>}

			</div>
		</div>
	)
}

export default SearchPage