import React from 'react'
import Link from 'next/link'
import listItems from './navigations'
import { Input } from 'postcss'


function NavBar() {
	return (
		<ul className="absolute w-full md:w-auto top-0 mt-[5rem] 
						md:static md:mt-0 md:flex 
						md:flex-row md:ml-auto">
              { listItems.map(({name,url})=><li className="text-black md:text-white p-4 bg-small md:bg-large 
              									hover:bg-hover-color hover:text-black" 
              									key={name}>
                <Link href={url} 
                className="inline-block" aria-current="page">
                			{name.toUpperCase()}
                </Link>
              </li>)}
			  <h5 className='ml-6 items-right'>Create an account</h5>

			


			  <div className='flex flex-row items-center ml-58'>
			 
			  	<span className="username" placeholder='Username'></span>
				  <input className="inp" type="text" placeholder='Username'></input>
				</div>  
				  <div className='flex flex-row items-center ml-6'>
				  <input className="ine" type="text" id="password" placeholder='Password'></input>
			  </div>

		</ul>

			 
			  
		  
	)
}

export default NavBar