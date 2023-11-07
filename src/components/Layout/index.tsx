'use client'
import React, {useState, useRef} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'
import MenuOpen from '@/components/Icons/MenuOpen'
import ManageSearchIcon from '@/components/Icons/ManageSearchIcon'



function Layout({children,}:{children: React.ReactNode}) {
	const [displaySearch, setDisplaySearch] = useState(false)
	
	const toggleSidebar = () =>{
		setDisplaySearch(prevState=>!prevState)
	}

	return (
		<main className="main-container">
			<Header />
			<div className="maincontent relative">
				<div className="px-4">
					{children}
					      <div  className={`fixed below-header right-2 flex z-10  w-full md:hidden`}>
					        <label htmlFor="sidebar-toggler" className={`${!displaySearch && "rotate-180"} ml-auto cursor-pointer`}>
					          {displaySearch && <MenuOpen color="green" />}
					          {!displaySearch && <ManageSearchIcon color="green" />}
					          <input checked={displaySearch} id="sidebar-toggler" onChange={toggleSidebar}  type="checkbox" />
					        </label>
					      </div>
				</div>
				<SideBar displaySearch={displaySearch} toggleSidebar={toggleSidebar} />
			</div>
			<Footer />
		</main>
	)
}

export default Layout