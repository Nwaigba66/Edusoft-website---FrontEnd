'use client'
import React, {useState, useRef, useEffect, useCallback} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'
import MenuOpen from '@/components/Icons/MenuOpen'
import ManageSearchIcon from '@/components/Icons/ManageSearchIcon'
import { Provider } from 'react-redux';
import { store } from '@/services/store';
import { useAppSelector, useAppDispatch } from '@/services/hooks';
import { logout, updateState } from '@/services/auth-slice';
import { getInitialData } from '@/services';
import { useRefreshTokenMutation } from '@/services/api';
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
	const [ doTokenRefresh ] = useRefreshTokenMutation();
	const [isLogin, setIsLogin] = useState(false)
	const { access_expires_seconds:accessTimeOut, refresh } = useAppSelector(state=>state.auth);
	const dispatch = useAppDispatch()
	const milliSecondsToTrigger = accessTimeOut? +accessTimeOut -  (new Date().getTime()/1000) : accessTimeOut; 
	const abortSignal = useRef(new AbortController());
	const logoutTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
	const refreshTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);


	const toggleSidebar = () =>{
		setDisplaySearch(prevState=>!prevState)
	}

	const logoutTrigger = useCallback(async ()=>{
		if (logoutTimer.current) clearTimeout(logoutTimer.current);
		logoutTimer.current = setTimeout(()=>{
			dispatch(logout());
			clearTimeout(logoutTimer.current)
		}, milliSecondsToTrigger)
	}, [milliSecondsToTrigger, dispatch])

	const makeTokenRefresh = useCallback(()=>{
		if (!refresh) return (dispatch(logout()));
		doTokenRefresh(refresh)
		.unwrap().then(fullfulled=>{
			// console.log("token successfully refreshed")
			}).catch(rejected=>{
				// console.error("An error has occured");
				dispatch(logout());
			})
	}, [dispatch, doTokenRefresh, refresh])

	useEffect(()=>{
		(()=>{
			if (!accessTimeOut) return;
			if (new Date().getTime()/1000 > +accessTimeOut){
			// refresh token has expired
				makeTokenRefresh();
			}
			else{
				if (refreshTimer.current) clearTimeout(refreshTimer.current);
				refreshTimer.current = setTimeout(()=>{
					makeTokenRefresh()
				}, accessTimeOut - (new Date().getTime())/1000);
			}

		})();
	},[accessTimeOut, dispatch, refreshTimer, makeTokenRefresh])

	useEffect(()=>{
		// manage the access time for login user
		if (accessTimeOut && !isLogin){
			setIsLogin(true);
			events.forEach(event=>{
			document.addEventListener(event,logoutTrigger, {signal:abortSignal.current.signal});
		});
			if (logoutTimer.current) clearTimeout(logoutTimer.current);
			logoutTimer.current = setTimeout(()=>{
				dispatch(logout());
				clearTimeout(logoutTimer.current);
			}, milliSecondsToTrigger)
		}
		else if (!accessTimeOut && isLogin){
			setIsLogin(false);

			// terminate all event handlers
			abortSignal.current.abort();
		}	
	}, [accessTimeOut, milliSecondsToTrigger, logoutTrigger, isLogin, dispatch]);


	useEffect(()=>{
		// manage user session by fetching user credentials from cookies
		(async ()=>{
			const initialData = getInitialData();
			await dispatch(updateState(initialData));
		})();

	}, [dispatch])
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