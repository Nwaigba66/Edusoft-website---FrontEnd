import React from 'react'
import Loader from '@/components/Loader'

function Loading() {
	return (
		<div className="flex justify-center items-center w-full h-full">
			<div>
				<Loader message="" />
			</div>
		</div>
	)
}

export default Loading