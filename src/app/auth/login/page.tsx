'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useAppDispatch, useAppSelector } from '@/services/hooks'
import { useLoginMutation } from '@/services/api'
import { useRouter } from 'next/navigation'
import { emailValidator } from '@/components/validators'
import './login.css'

const initalLoginData = {
	email:"",
	password:"",
	error:"",
	message:"",
}

function Login() {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const { email, username } = useAppSelector(state=>state.auth)
	const [doLogin, {error:errorResponse, isSuccess, data, isLoading}] = useLoginMutation()
	const [loginData, setLoginData] = useState(initalLoginData)
	
	function handleLogin(e:React.FormEvent){
		e.preventDefault();

		if (!loginData.email || !loginData.password) return;

		// validate the email
		const emailCheck = emailValidator(loginData.email);
		if (emailCheck){
			setLoginData(prevState=>({
				...prevState,
				error:emailCheck
			}));
			return;
		}
		const {error, ...credentials} = loginData;
		doLogin(credentials)
		.unwrap()
		.then(fullfulled=>{
			setLoginData(prevState=>({
					...prevState,
					message:"Login Successfull",
					error:"",
					password:"",
					email:"",
				}));
			
			let timeOut:ReturnType<typeof setTimeout>;
			 timeOut= setTimeout(()=>{
				setLoginData(prevState=>({
					...prevState,
					message:""
				}));
				clearTimeout(timeOut);
				router.push('/')
			},2000);
		})
		.catch(rejected=>{
			const {data} = rejected;
			setLoginData(prevState=>({
					...prevState,
					error:data?.detail || "An Error has Occured"
				}));
		});
		// if (isSuccess){
		// 	setLoginData(initalLoginData);
		// 	router.push('/')
		// }

		// .unwrap().then(fulfilled=>{
		// 	console.log(fulfilled);
		// })
		// .catch(rejected=>{
		// 	console.log(rejected);
		// 	setLoginData(prevState=>({
		// 		...prevState,
		// 		error:"Unable to Authenticate"
		// 	}));
		// })

	}

	function handleInput(e:React.ChangeEvent<HTMLInputElement>){
		const {name, value } = e.target;
		setLoginData(prevState=>({
			...prevState,
			[name]:value.trim(),
			error:""
		}))
	}

	// if (email && (typeof window !== 'undefined')){
	// 	return <div className="flex flex-col justify-center items-center">
	// 			<div className="text-xl text">Signed in as {username}</div>
	// 		<button className="inline-block bg-green-400 text-white p-4" onClick={()=>router.push('/')}>Back to Home Page</button>
	// 	</div>
	// }
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
				<div className="text-2xl text-center min-h-[1rem] text-green-500">{loginData.message || ""}</div>
				<div className="text-xl text-red-500 min-h-[1rem]">{loginData.error || ""}</div>
				<form onSubmit={handleLogin} className="login-form flex flex-col justify-around gap-10 w-80" action="" method="POST">
					<div className="login-group">
						<label className="" htmlFor="email">Email:</label>
						<input value={loginData.email} onChange={handleInput} name="email" className="md:ml-auto md:w-[15rem]" id='email' type="email" placeholder="enter email" />
					</div>
					<div className="login-group">
						<label className="" htmlFor="password">Password:</label>
						<input value={loginData.password}  onChange={handleInput} name="password" className="md:ml-auto md:w-[15rem]" id='password' type="password" placeholder="enter password"/>	
					</div>

					<div className="flex justify-center">
						<button  className={`py-2 px-4 ${isLoading?"bg-gray-400":"bg-button"} text-white text-xl rounded`}>
							{isLoading? "Authenticating ...": "Login"}
						</button>
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