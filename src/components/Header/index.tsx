import React from 'react'
import NavBar from '@/components/NavBar'

function Header() {
	return (
		<header className=" flex flex-row 
							items-center 
							bg-blue-900 py-4
							text-white">
			<h1>Edusoft</h1>
			<NavBar />
		</header>
	)
}

export default Header