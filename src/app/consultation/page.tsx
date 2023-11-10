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





