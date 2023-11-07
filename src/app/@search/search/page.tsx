"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function SearchPage() {
	const router = useRouter()
	return (
		<div className="text-3xl flex mt-8  w-full h-full  text-blue-300 bg-red-100">
			This is the Search Page
			<button onClick={()=>router.back()}>Back</button>
		</div>
	)
}

export default SearchPage