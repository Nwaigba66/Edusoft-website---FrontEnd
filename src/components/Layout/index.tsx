import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'


function Layout({children,}:{children: React.ReactNode}) {
	return (
		<main className="main-container">
			<Header />
			<div className="maincontent">
				{children}
			</div>
			<Footer />
			<SideBar />
		</main>
	)
}

export default Layout