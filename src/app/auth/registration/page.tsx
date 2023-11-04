import React from 'react'
import Link from 'next/link'

interface FormProps {
	name:string
	type:string
	options?: string[]
}

const initialFormState : {
	[key: string]:FormProps
} = {
	username:{
		name:"Username",
		type:"text"
	},
	firstname:{
		name:"Firstname",
		type:"text"
	},
	lastname:{
		name:"Lastname",
		type:"text"
	},
	email:{
		name:"Email",
		type:"text"
	},
	password:{
		name:"Password",
		type:"password"
	},
	confirmpassword:{
		name:"Confirm Password",
		type:"password"
	},
	dateofbirth:{
		name:"Date Of Birth",
		type:"date"
	},
	gender:{
		name:"Gender",
		type:"text",
		options: ['male', 'female']
	}
}

function Registration() {
	return (
	<div className="flex flex-row items-center">
			<div className="flex flex-col items-center justify-center w-full h-full">
				<h2 className="text-3xl my-[5rem]  ">New User Account Registration</h2>
				<form className="registration-form flex flex-col justify-around gap-10 w-[25rem]" action="">
					
					{Object.keys(initialFormState).map((key)=>{
						const {name, type, options} = initialFormState[key];
						return <div key={key} className="flex flex-col md:flex-row items-center gap-2">
							<label className="w-full md:w-32" htmlFor={key}>{name}:</label>
							{!options && <input className="w-full md:w-64" id={key} type={type} placeholder={`Enter ${name}`} required/>}	
							{options && <select className="w-full md:w-64" name={key} id={key}>
								{options.map(itm=><option key={itm} value={itm}>{itm}</option>)}
							</select>}
						</div>

					})}
					
					<div className="flex justify-center">
						<button className="py-2 px-4 bg-button text-white text-xl rounded">Complete Registration</button>
					</div>
					<div className="flex justify-center nowrap w-full mb-10">
						Have an Account? <Link className="text-blue-500" href="/auth/login">Login to  your Account</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Registration