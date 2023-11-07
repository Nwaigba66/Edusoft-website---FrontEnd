import React from 'react'
import Image
 from 'next/image'

function Contact() {
  return (
    <>
     <div className='flex flex-col justify-around items-center mt-6 ml-6'>
      <h1 className='ml-10 justify-around items-center text-2xl'>CONTACT US</h1>
    </div>

    <div className="mt-6 justify-center">
        <Image src="/image/consultation-img.jpeg" alt="" width={600} height={300} />    
    </div>
   

    <div> 
        <h1 className='mt-6'>Overcome your obstacles. Get The Right Information, Today!
        </h1>
            <p className='mt-15 gap-5'>Contact us for any questions or comments you may have.</p>
        <form action="">
        <div className="flex justify-center items-center">
				<button className="py-2 px-4 bg-button mb-6 text-white text-xl rounded"> Book Consultation</button>
		</div>
        </form>
    </div>
    </>
  )
}

export default Contact
