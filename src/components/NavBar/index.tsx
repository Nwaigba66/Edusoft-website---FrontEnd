import React from 'react'
import Link from 'next/link'
import listItems from './navigations'
import { Input } from 'postcss'


function NavBar({hide}:{hide:bool}) {
	return (
		<div className={`${hide && "hidden"} absolute flex flex-col md:flex-row md:ml-auto
												md:items-center w-full md:w-auto md:pr-4
										top-0 mt-[5rem] md:static md:mt-0 md:flex` }>
			<ul className="md:flex md:flex-row md:ml-auto">
              { listItems.map(({name,url})=><li className="text-black md:text-white 
              									p-4 bg-small md:bg-large hover:bg-hover-color hover:text-black" 
              									key={name}>
                <Link href={url} 
                className="inline-block">
                			{name.toUpperCase()}
                </Link>
              </li>)}
			</ul>
			<h2 className="w-full md:ml-5 cursor-pointer rounded
										bg-gray-200 p-4 text-black">
				Login/Logout
			</h2>
		</div>
		

			 
			  
		  
	)
}

export default NavBar