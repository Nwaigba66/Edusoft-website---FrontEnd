import React from 'react'

function Loader(props:{message:string|undefined}) {
	return (
			<div className="flex justify-center items-center">
				<span className="inline-block bg-transparent border-solid border-r-8 border-blue-500
							animate-spin h-[5rem] w-[5rem] rounded-full bg-green-500">
								
				</span>
							{props?.message && props.message}
			</div>
	)
}

export default Loader