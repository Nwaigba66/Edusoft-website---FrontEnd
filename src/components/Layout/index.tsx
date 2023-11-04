'use client'
import React, {useState} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'
import MenuOpen from '@/components/Icons/MenuOpen'
import ManageSearchIcon from '@/components/Icons/ManageSearchIcon'



function Layout({children,}:{children: React.ReactNode}) {
	const [displaySearch, setDisplaySearch] = useState(false)
	return (
		<main className="main-container">
			<Header />
			<div className="maincontent relative">
				<div className="px-4">
					{children}
					      <div  className={`fixed below-header right-0 flex z-10  w-full md:hidden`}>
					        <span onClick={()=>setDisplaySearch(prevState=>!prevState)} className={`${!displaySearch && "rotate-180"} ml-auto cursor-pointer`}>
					          {displaySearch && <MenuOpen color="green" />}
					          {!displaySearch && <ManageSearchIcon color="green" />}
					        </span>
					      </div>
				</div>
				<SideBar displaySearch={displaySearch} />
			</div>
			<Footer />
		</main>
	)
}

export default Layout