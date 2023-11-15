import React from 'react'
import Image from 'next/image'

// This is displayed to signify the loading state of any page component
function Loader(props:{message:string|undefined}) {
	return (
			<div className="flex justify-center items-center">
				<div className="flex  items-center relative">
					<span className="absolute my-auto left-[1rem] top-[1.5rem] w-[5rem] h-[5rem]">
						<Image
						src="/edusoft-brand.png"
						width={40}
						height={40}
						alt=""
						priority />
					</span>
				

					<span className="inline-block bg-transparent border-solid border-r-8 border-blue-500
								animate-spin h-[5rem] w-[5rem] rounded-full bg-green-500">
									
					</span>
				</div>
				
							{props?.message && props.message}
			</div>
	)
}

export default Loader