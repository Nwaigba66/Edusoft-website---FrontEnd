import React from 'react'
import Header from '@/components/Header'

function Layout({children,}:{children: React.ReactNode}) {
	return (
		<main className="main-content">
			<Header />
				{children}
			<footer>This is The footer</footer>
		</main>
	)
}

export default Layout