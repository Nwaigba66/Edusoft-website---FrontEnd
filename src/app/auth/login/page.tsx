import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Login() {
	return (
		<div className="flex flex-row items-center">
			<div className="hidden lg:flex">
				<Image 
					src="/login.png" 
					width={500} 
					height={600} 
					alt="login to your account" />
			</div>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<h2 className="text-xl my-[5rem]  ">Existing Account</h2>
				<form className="login-form flex flex-col justify-around gap-10 w-80" action="">
					<div className="flex items-center gap-2">
						<label className="flex-1" htmlFor="email">Email</label>
						<input className="flex-2 ml-4" id='email' type="text" placeholder="enter email" />
					</div>
					<div className="flex items-center gap-2">
						<label className="flex-1" htmlFor="password">Password</label>
						<input className="flex-2 ml-4" id='password' type="text" placeholder="enter password"/>	
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