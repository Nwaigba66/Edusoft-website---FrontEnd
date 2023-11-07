import React from 'react'
import { text } from 'stream/consumers'
import Image from 'next/image'
import { Container } from 'postcss'

function Consultation() {
  return (
    <div className='items-center justify-center w-full h-full bg-pink-220'> 
          
     <div className='flex flex-col justify-center items-center mt-10'>
        <h1  className='item-center'>YES WE'RE HAPPY YOU'RE HERE</h1>
        <h1>take the Action</h1>
        
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
    

     

</div>
   
  )
}
export default Consultation





