"use client"
import React, {useState, useEffect} from 'react'
import { useRouter, useParams, useSearchParams } from 'next/navigation'


const initialState: {
	query:string,
	isLoading:boolean
} = {
	query:"",
	isLoading:true
}

function SearchPage() {
	const router = useRouter()
	const params = useParams()
	const queries = useSearchParams()
	const [searchData, setSearchData] = useState(initialState)
	const { query, isLoading } = searchData
	
	useEffect(()=>{
			setSearchData(prevState=>{
			return {
				...prevState,
				isLoading:false,
				query:""}});

	},[])

	return (
		<div className="flex flex-col justify-center items-center text-3xl flex mt-8 w-full h-[90vh] overscroll-y-auto mb-4 text-blue-300 bg-red-100">
			This is the Search Page
			<button onClick={()=>router.back()}>Back</button>
			{ isLoading && <div>
							<span className="inline-block bg-transparent border-solid border-r-8 border-blue-500
										animate-spin h-[5rem] w-[5rem] rounded-full bg-green-500">
								
							</span>
							Edusoft
						</div>}
			{!isLoading && <div>QueryParams: {query}</div>}
		</div>
	)
}

export default SearchPage