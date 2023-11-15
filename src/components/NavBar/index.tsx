'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { logout } from '@/services/auth-slice'
import listItems from './navigations'
import { useAppSelector, useAppDispatch } from '@/services/hooks'
import { Input } from 'postcss'
import PersonIcon from '@/components/Icons/PersonIcon'


function NavBar(props:{hide:boolean, toggleNav:()=>void}) {
	// Define the visuals and logic of  the navigation bar of the app
	const dispatch = useAppDispatch()
	const { username } = useAppSelector(state=>state.auth)
	const router = useRouter()	// required for switching pages


	function handleLogout(){
		// control logout process when the logout button is clicked
		props.toggleNav()
		dispatch(logout())
		router.push('/')
	}

	return (
		<div className={`${props.hide && "hidden"} absolute flex flex-col md:flex-row md:ml-auto
												md:items-center w-full md:w-auto md:pr-4
										top-0 mt-[5rem] md:static md:mt-0 md:flex` }>
			<ul className="md:flex md:flex-row md:ml-auto">
              { listItems.map(({name,url})=><li className=""
              									key={name}>
                <Link onClick={()=>props.toggleNav()} href={url} 
                className="flex justify-center items-center py-2 px-3 text-lg shadowed inline-block
                						bg-small text-black md:text-white md:bg-large h-[3rem] hover:bg-hover-color hover:text-black ">
                			{name.toUpperCase()}
                </Link>
              </li>)}
			</ul>
			{!username && <Link href="/auth/login" onClick={()=>props.toggleNav()} className="w-full md:ml-5 cursor-pointer rounded
													bg-gray-200 p-4 text-black">
							Login
						</Link>}

			{username && <div className="flex justify-around bg-gray-400 md:mx-2 md:bg-transparent">
				<span className="flex w-[5rem] text-black text-sm flex-col-reverse
												justify-center items-center bg-gray-100 rounded ">
					{username}
					<PersonIcon color="blue" />
				</span>
				<span onClick={handleLogout} className="md:ml-5 cursor-pointer rounded
								bg-red-300 p-4 text-white">
					Logout
				</span>
			</div>}

		</div>
	 
	
	)
}

export default NavBar