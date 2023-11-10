import React from 'react'
import { text } from 'stream/consumers'
import Image from 'next/image'
import './consultation.css'

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
    <div className='flex flex-col w-full h-full'> 
          
     <div className='flex flex-col justify-center items-center '>
        <h1  className='mt-10 item-center text-2xl'>{`YES WE'RE HAPPY YOU'RE HERE`}</h1>
        <h1 className='text-xl font-light'>take the Action</h1>
        
        <h1>SCROLL DOWN TO BOOK</h1> 
     </div> 
     
    <div className="flex flex-col px-10  m-10 md:mx-8 md:px-6 lg:px-30 justify-center bg-booking rounded-3xl">
       <h1 className='text-center text-2xl my-[3rem]'>BOOK CONSULTATION</h1>
      <form className='consultation-form flex flex-col gap-4 lg:px-20 justify-around' action="">
       
        {Object.keys(initialFormState).map((key)=>{
          const {name, type, option} = initialFormState[key];
          return <div key={key} className="flex flex-col md:flex-row items-center w-full">
            <label className="w-full " htmlFor={key}>{name}:</label>
            {!option && <input className="w-full" id={key} type={type} placeholder={`Enter ${name}`} required/>}
            {option && <select className="w-full" name={key} id={key}>
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
  )
}
export default Consultation





