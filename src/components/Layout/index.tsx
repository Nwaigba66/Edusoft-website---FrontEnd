'use client'
import React, {useState, useRef, useEffect, useCallback} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'
import MenuOpen from '@/components/Icons/MenuOpen'
import ManageSearchIcon from '@/components/Icons/ManageSearchIcon'
import { Provider } from 'react-redux';
import { store } from '@/services/store';
import { useAppSelector } from '@/services/hooks';
import { logout } from '@/services/auth-slice';
// import { authSlice } from '@/services/auth-slice'



const events : string[] = [
	"load",
	"mousemove",
	"mousedown",
	"click",
	"scroll",
	"keypress"
	]
export const  StoreProvider = (props:{children:React.ReactNode})=>{
	return <Provider store={store}>
		{props.children}
	</Provider>
}


function Layout({children,}:{children: React.ReactNode}) {
	const [displaySearch, setDisplaySearch] = useState(false)
	const { access_expiry_seconds:accessTimeOut } = useAppSelector(state=>state.auth);
	
	const milliSecondsToTrigger = accessTimeOut? +accessTimeOut -  (new Date().toTime()) : accessTimeOut; 
	
	let logoutTimer;

	const handleLogoutTimer = useCallback(
		() => {
			logoutTimer = setTimeout(()=>{
				resetTimer();
				event.forEach(event=>{
					window.removeEventListener(event, resetTimer);
				});
				logout()
			})
		},[milliSecondsToTrigger])

	const resetTimer = useCallback(()=>{
		if (logoutTimer) clearTimeout(logoutTimer);
	}, [logoutTimer])

	const toggleSidebar = () =>{
		setDisplaySearch(prevState=>!prevState)
	}

	useEffect(()=>{
		if (!milliSecondsToTrigger){
			console.log("user not logged in")
			return
		}

		event.forEach(event=>{
			window.addEventListener(event, ()=>{
				resetTimer();
				handleLogoutTimer();
			})
		});
	}, [milliSecondsToTrigger, handleLogoutTimer, resetTimer])

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