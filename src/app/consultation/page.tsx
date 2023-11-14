import React from 'react'
import { text } from 'stream/consumers'
import Image from 'next/image'
import { Container, Input } from 'postcss'
import { type } from 'os'

interface FormProps {
  name:string
  type:string
  option?: string[] 
}
 
const initialFormState : {
  [key: string]:FormProps
} = {
    firstname:{
      name:'First Name',
      type:'text',
    },
    lastname:{
      name:'Last Name',
      type:'text',
    },
    desiredservice:{
      name:'Desired Service',
      type:'text',
      option: ['Admission Service', 'Tuition Fees Service', 'Document Review', 'CV Review']
    },
    chooseadate:{
      name:'Choose a Date',
      type:'date',
    },
    selectpreferredtime:{
      name:'Select Preferred Time',
      type:'time',
    },
    additionalmessage:{
      name:'Additional Message',
      type:'text',
    },

}
function Consultation() {
  return (
    <div className='items-center justify-center w-full h-full bg-pink-220'> 
          
     <div className='flex flex-col justify-center items-center mt-10'>

        <h1  className='item-center text-xl'>{`YES WE'RE HAPPY YOU'RE HERE`}</h1>
        <h1 className='text-xl font-light'>take the Action</h1>
        
        <h1>SCROLL DOWN TO BOOK</h1> 
     </div> 

    <form className="consultation-form flex flex-col justify-center rounded-3xl gap-5 ml-14 mt-6 mb-6 items-center bg-booking" action="">
          <div>
            <h1 className='flex flex-row items-center mt-6 justify-center text-2xl  item-center'>BOOK AN APPOINTMENT</h1> 
          </div>
					<div className="flex items-center w-[80%] gap-5 justify-center">
						<label className="text-xl" htmlFor="Fullname">Full Name:</label>
						<input className="" id='firstname' type="text" placeholder="Enter Full Names" />
					</div>

          <div className="flex items-center gap-5 justify-center">
						<label className=" text-xl" htmlFor="email">Email:</label>
						<input className="flex-2 ml-4" id='email' type="text" placeholder="Enter email" />
					</div>

          <div>
            <label className="flex-1 w-full h-full gap-5 " htmlFor="service">Desired Service</label>
            <select name="" id="desired_service">
              <option value="admission.service">Admission Service</option>
              <option value="tuition">Tuition Fees Service</option>
              <option value="document.review">Document Review</option>
              <option value="cv">CV Review</option>
            </select>
         </div>

         <div className="flex items-center gap-5">
						<label className="flex-1" htmlFor="date">Choose a Date</label>
						<input className="flex-3 ml-4" id='date' type="date" placeholder="Choose a Date" />
				 </div>

         <div className="flex items-center w-38 h-30 gap-2">
						<label className="flex-1" htmlFor="time">Select Preferred Time</label>
						<input className="flex-3 ml-4" id='time' type="time" placeholder="Select Preferred Time" />
				 </div>

         <div className="flex items-center gap-2">
						<label className="flex-1" htmlFor="text">Additional Message</label>
						<input className="flex-3 ml-4" id='text' type="text-area" placeholder="Enter Additional Message" />
				 </div>

         <div className="flex justify-center">
						<button className="py-2 px-4 bg-button mb-6 text-white text-xl rounded"> Book Now</button>
					</div>
        
    </form>    

     <div className="flex flex-row mt-8 items-center ">
        <div className="flex flex-col items-center justify-center w-full h-full">
         
          <form className='consultation-form flex flex-col justify-around items-center rounded-3xl bg-booking gap-7 w-[50rem]' action="">
            <h1 className='text-2xl my-[3rem]'>BOOK CONSULTATION</h1>
            {Object.keys(initialFormState).map((key)=>{
              const {name, type, option} = initialFormState[key];
              return <div key={key} className="flex flex-col md:flex-row items-center">
                <label className="w-full md:w-32" htmlFor={key}>{name}:</label>
                {!option && <input className="w-full md:w-64" id={key} type={type} placeholder={`Enter ${name}`} required/>}
                {option && <select className="w-full md:w-64" name={key} id={key}>
                  {option.map(itm=><option key={itm} value={itm}>{itm}</option>)}
                  </select>}
              </div> 
            }
            )}
              <div className="flex justify-center">
						    <button className="py-2 px-4 bg-button mb-6 text-white text-xl rounded"> Book Now</button>
					    </div>
          </form>
        </div>
     </div>
  </div> 
  )
}
export default Consultation





