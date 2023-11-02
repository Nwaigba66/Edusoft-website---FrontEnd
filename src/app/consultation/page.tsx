import React from 'react'
import { text } from 'stream/consumers'
import Image from 'next/image'
import { Container } from 'postcss'

function Consultation() {
  return (
    <div className='w-full h-full bg-green-400'>
      
        
     <div className='relative flex flex-col justify-center items-center'>
        <h1  className='item-center'>YES WE'RE HAPPY YOU'RE HERE</h1>
        <h1>take the Action</h1>
        
        <h1>SCROLL DOWN TO BOOK</h1> 
    </div> 
    <div>
        <h1 className=' flex flex-row items-center mt-6 justify-center text-2xl item-center'>BOOK AN APPOINTMENT</h1> 
    </div>

    
    <form className='container flex flex-col items-center justify-center mt-6'>
    <div className='flex flex-row justify-center p-8 bg-red-200 rounded-lg w-80'>
        <span>
        <label htmlFor="firstname">First Name: </label>
        <input type="text" id="firstname" name="firstname" placeholder='Enter First Name'/>

        <div className='mt-6'>
        <label htmlFor="firstname">Last Name: </label>
        <input type="text" id="firstname" name="firstname" placeholder='Enter Last Name'/>   
        </div> 

        <div className='mt-6'>
        <label htmlFor="firstname">Last Name: </label>
        <input type="text" id="firstname" name="firstname" placeholder='Enter Last Name'/>   
        </div>
        </span>    
    </div>
    </form>
    
    

</div>
   
  )
}
export default Consultation





