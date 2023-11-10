'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useAppDispatch, useAppSelector } from '@/services/hooks'
import {login} from '@/services/auth-slice'
import { useRouter } from 'next/navigation'
import './login.css'

const initalLoginState = {
	email:"",
	password:"",
	error:""
}
function Login() {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const { isLoggedIn, password, email, username } = useAppSelector(state=>state.auth)

	const [loginState, setLoginState] = useState(initalLoginState)
	
	function handleLogin(e:React.FormEvent){
		e.preventDefault();
		if (loginState.email === email && loginState.password === password){
			setLoginState(prevState=>({
				...prevState,
				"error":""
			}))
			dispatch(login({email:loginState.email, password:loginState.password}))
		}
		else {
			setLoginState(prevState=>({
				...prevState,
				"error":"Invalid email or password"
			}))
		}

	}

	function handleInput(e:React.ChangeEvent<HTMLInputElement>){
		const {name, value } = e.target;
		setLoginState(prevState=>({
			...prevState,
			[name]:value.trim()
		}))
	}

	if (isLoggedIn){
		return <div className="flex flex-col justify-center items-center">
				<div className="text-xl text">Signed in as {username}</div>
			<button className="inline-block bg-green-400 text-white p-4" onClick={()=>router.push('/')}>Back to Home Page</button>
		</div>
	}
	return (
		<div className="flex flex-row items-center">
			<div className="hidden lg:flex">
				<Image 
					src="/login.png" 
					width={500} 
					height={300} 
					alt="login to your account" />
			</div>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<h2 className="text-2xl my-[5rem]">Existing Account</h2>
				{loginState.error && <div className="text-2xl text-red-500">{loginState.error}</div>}
				<form onSubmit={handleLogin} className="login-form flex flex-col justify-around gap-10 w-80" action="">
					<div className="login-group">
						<label className="" htmlFor="email">Email:</label>
						<input onChange={handleInput} name="email" className="md:ml-auto md:w-[15rem]" id='email' type="text" placeholder="enter email" />
					</div>
					<div className="login-group">
						<label className="" htmlFor="password">Password:</label>
						<input  onChange={handleInput} name="password" className="md:ml-auto md:w-[15rem]" id='password' type="password" placeholder="enter password"/>	
					</div>

					<div className="flex justify-center">
						<button className="py-2 px-4 bg-button text-white text-xl rounded">Login</button>
					</div>
					<div className="flex justify-center">
						Not yet registered? <Link className="text-blue-500" href="/auth/registration">Create an Account</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login