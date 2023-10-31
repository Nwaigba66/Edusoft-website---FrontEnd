 import React from 'react'
import NavBar from '@/components/NavBar'

function Header() {
	return (
		<header className="head relative flex flex-row 
							items-center 
							bg-blue-900 
							text-white" >
			<h1 className="ml-3 text-3xl">Edusoft</h1>
			<NavBar />
			<h2 className="ml-auto cursor-pointer">
				Login/Logout
			</h2>
		</header>
	)
}

export default Header