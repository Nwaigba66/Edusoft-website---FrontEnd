import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Layout({children,}:{children: React.ReactNode}) {
	return (
		<main className="main-content">
			<Header />
				{children}
			<Footer />
		</main>
	)
}

export default Layout