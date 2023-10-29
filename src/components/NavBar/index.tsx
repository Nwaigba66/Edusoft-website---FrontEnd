import React from 'react'
import Link from 'next/link'
import listItems from './navigations'


function NavBar() {
	return (
		<ul className="absolute w-full top-0 mt-[5rem] md:mt-0 md:flex md:flex-row ml-auto">
              { listItems.map(({name,url})=><li className="text-black p-4 bg-small md:bg-large 
              									hover:bg-hover-color hover:text-black" 
              									key={name}>
                <Link href={url} 
                className="" aria-current="page">
                			{name.toUpperCase()}
                </Link>
              </li>)}
              
        
          </ul>
	)
}

export default NavBar