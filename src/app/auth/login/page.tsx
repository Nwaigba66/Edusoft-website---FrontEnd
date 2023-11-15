'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useAppDispatch, useAppSelector } from '@/services/hooks'
import { useLoginMutation } from '@/services/api'
import { useRouter } from 'next/navigation'
import { emailValidator } from '@/components/validators'
import './login.css'


// Default initial values of form elements
const initalLoginData = {
	email:"",
	password:"",
	error:"",
	message:"",
}


function Login() {
	// Define the login logic

	const router = useRouter()  // required for switching page
	const dispatch = useAppDispatch()	// for dispatching redux actions
	const { email, username } = useAppSelector(state=>state.auth)
	const [doLogin, {error:errorResponse, isSuccess, data, isLoading}] = useLoginMutation()
	const [loginData, setLoginData] = useState(initalLoginData)
	
	function handleLogin(e:React.FormEvent){
		// handle the login form submission

		e.preventDefault(); // prevent default state of the submission form so as to handle it manually
		
		if (!loginData.email || !loginData.password) return;  // stop execution if either email or password is not provided

		// validate the email
		const emailCheck = emailValidator(loginData.email);
		if (emailCheck){
			setLoginData(prevState=>({
				...prevState,
				error:emailCheck
			}));
			return;
		}

		const {error, ...credentials} = loginData;  // extract only the email and password from form data
		doLogin(credentials)
		.unwrap()
		.then(fullfulled=>{	// login was successfull
			setLoginData(prevState=>({
					...prevState,
					message:"Login Successfull", // show success message
					error:"",
					password:"",
					email:"",
				}));
			
			let timeOut:ReturnType<typeof setTimeout>;  // control time of success login message display
			 timeOut= setTimeout(()=>{
				setLoginData(prevState=>({
					...prevState,
					message:""
				}));
				clearTimeout(timeOut);
				router.push('/')  // redirect to home page after success full login
			},2000);
		})
		.catch(rejected=>{  // the login failed
			const {data} = rejected;
			setLoginData(prevState=>({
					...prevState,
					error:data?.detail || "An Error has Occured" // set error message
				}));
		});

	}

	/*
		handleInput: process user input
	*/
	function handleInput(e:React.ChangeEvent<HTMLInputElement>){
		const {name, value } = e.target;
		setLoginData(prevState=>({
			...prevState,
			[name]:value.trim(), // collect value and remove excess spaces
			error:""  // reset any error that could have been displayed earlier on
		}))
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