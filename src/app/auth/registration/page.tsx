"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { textValidator, passwordValidator, emailValidator } from '@/components/validators'
import { useAppSelector, useAppDispatch } from '@/services/hooks'
import { register } from '@/services/auth-slice';
import { useRouter } from 'next/navigation'
import './registration.css'


interface FormProps {
	name:string
	type:string
	options?: string[]
}


const formValidators : {
	[key:string]:(value:string)=> string
} = {
	username:textValidator,
	firstname:textValidator,
	lastname:textValidator,
	email: emailValidator,
	password:passwordValidator,
	confirmpassword:textValidator,
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
	}
}

const initialValues :{
	[key:string]: {
		value:string,
		error:string
	}
} = {}


Object.keys(initialFormState).forEach(val=>{
	initialValues[val] = {value:"", error:""}
})


function Registration() {
	const [formValues, setFormValue] = useState(initialValues)
	const { isLoggedIn, username } = useAppSelector(state=>state.auth)
	const dispatch = useAppDispatch()
	const router = useRouter()


	function handleInput(e: React.ChangeEvent<HTMLInputElement>){
		// handle the input for each fields
		const {value, name} = e.target

		setFormValue(prevState=>({
			...prevState,
			[name]:{...prevState[name], error:"", value:value.trim()}
		}));
	}

	function handleSubmit(e:React.FormEvent){
		e.preventDefault();
		let isValid = false;
		setFormValue(prevState=>{
			const copyState = {...prevState}
			Object.keys(copyState).forEach(key=>{
				const {value, error} = copyState[key]
				copyState[key]["error"] = formValidators[key](value);
			})
			if (Object.values(copyState).reduce((total, item)=>
				total + item['error'].length,0) === 0){
				// check for password equality
				const {password, confirmpassword} = formValues;
				if (password.value != confirmpassword.value){
					copyState['confirmpassword']['error'] = "password mismatch"
				}
				else{
					isValid = true;
				}
			}
			return copyState
			})

		if (isValid){
			dispatch(register({username:formValues.username.value, 
				email:formValues.email.value,
				password:formValues.password.value}))
			setFormValue(initialValues);
			router.push('/auth/login')


		}
		

	}
	if (isLoggedIn){
		return <div className="flex flex-col justify-center items-center">
				<div className="text-xl text">Signed in as {username}</div>
			<button className="inline-block bg-green-400 text-white p-4" onClick={()=>router.push('/')}>Back to Home Page</button>
		</div>
	}

	return (
	<div className="flex flex-row items-center w-full">
			<div className="flex flex-col items-center justify-center w-full h-full">
				<h2 className="text-3xl my-[5rem] break-normal">New User Account Registration</h2>
				<form onSubmit={handleSubmit} className="registration-form flex flex-col justify-around gap-8" action="">
					
					{Object.keys(initialFormState).map((key)=>{
						const {name, type } = initialFormState[key];
						const {value, error} = formValues[key];
						return <div key={key} className=" flex flex-col w-[90%] md:flex-row items-center gap-2">
							<label className="w-full md:w-32" htmlFor={key}>{name}:</label>
							<div className='input-group w-full'>
								<input name={key} onChange={handleInput} value={value} className="w-full md:w-64" id={key} type={type} placeholder={`Enter ${name}`}/>
								{error && key != 'password' && <span className="text-red-500">{error}</span>}
								{!error && key != 'password' && <span></span>}
								{error && key === 'password' && <span className="flex flex-col">
									<span className="text-red-500">{error}</span>
								</span>}
								{!error && key === 'password' && <span>
									<span className="w-[5rem] break-normal text-sm">min 9 char,upper,lower,num,special char</span>
								</span>}

							</div>
							
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