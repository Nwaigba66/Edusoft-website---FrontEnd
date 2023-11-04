"use client"
import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import MenuIcon from '@/components/Icons/MenuIcon'
import CloseIcon from '@/components/Icons/CloseIcon'

function Header() {
	const [hideMenu, setHideMenu] = useState(true)
	const toggleNav = ()=>{
		setHideMenu(prevState=>!prevState)
	}

	return (
		<header className="head relative flex flex-row 
							items-center z-20
							bg-blue-900 
							text-white" >
			<h1 className="ml-3 text-3xl">Edusoft</h1>
			<NavBar hide={hideMenu} toggleNav={toggleNav} />
			<div onClick={()=>setHideMenu(prevState=>!prevState)} className="md:hidden
																	ml-auto p-4 cursor-pointer">
				{hideMenu && <MenuIcon color="white" />}
				{!hideMenu && <CloseIcon color="white" />}
			</div>
		</header>
	)
}

export default Header