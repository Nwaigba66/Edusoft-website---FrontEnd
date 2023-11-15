import React from 'react'
import Image
 from 'next/image'

function Contact() {
  // Define the contact page
  return (
    <>
      <div className='flex flex-col justify-around items-center mt-6 ml-10'>
      <h1 className='text-2xl'>CONTACT US</h1>
      </div>

      <div className="mt-6 justify-around grid grid-col-2">
        <Image src="/image/consultation-img.jpeg" alt="" width={600} height={280} /> 
        <div className='items-center justify-center mt-6 ml-5'> 
        <h1 className='text-xl'>Overcome your obstacles. Get The Right Information, Today!
        </h1>
            <p className='mt-15 ml-5 text-xl'>Contact us for any questions or comments you may have.</p>
        <form action="">
        <div className="flex justify-center items-center">
				<button className="py-2 px-4 mt-4 ml-5 bg-button mb-6 text-white text-xl rounded"> Book Consultation</button>
		    </div>
        </form>
        </div>   
      </div>
   
    </>
  )
}

export default Contact
