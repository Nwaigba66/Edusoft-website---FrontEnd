import React from 'react'
import Link from 'next/link'
import listItems from './navigations'


function NavBar() {
	return (
		<ul className="flex flex-row ml-auto">
              { listItems.map(({name,url})=><li>
                <Link href={url} 
                className="block py-2 pl-3 pr-4 
                			text-white bg-blue-700" 
                			aria-current="page">
                			{name}
                </Link>
              </li>)}
              
        
          </ul>
	)
}

export default NavBar