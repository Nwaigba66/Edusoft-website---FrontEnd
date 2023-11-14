import { url } from 'inspector'
import React from 'react'
import Image from 'next/image'

const principlesList = [
  {
    name:"Open-mindness",
    url: '/image/Openmindness.png',
  },
  {
    name:"Trust",
    url: '/image/Trust.png',
  },
  {
    name:"liberal",
    url: '/image/liberal.png',
  },
  {
    name:"Dedication.png",
    url: '/image/Dedication.png',
  },
  {
    name:"Honesty.png",
    url: '/image/Honesty.png',
  },
  {
    name:"Openess.png",
    url: '/image/Openess.png',
  },
]
function About() {
 
  return (
   
    <div className='flex flex-col justify-around items-center mt-6 ml-6'>
      <h1 className='ml-6 justify-center items-center text-2xl'>ABOUT STATEMENT
      </h1>

      <div className='border-b-2 w-full border-black'>
        <h1 className='mt-6 justify-center mb-8 items-center text-2xl'>What is Edusoft?
        </h1>
      </div>

      <div className='border-b-2 w-full border-black'>
        <h1 className='justify-center mb-8 font-light mt-6 tracking-normal'>Edusoft is an educational 
        platform that is launched in the November 2023. We are leading organisation in the provision 
        of information for university application and processes. Our platform allows students search for their
        dream courses, and universities around the world. Students can also search for 
        accommodation and make applications. The website will allow you search for universities that offer your
        desired courses and the tuition fees of your desired course or program. 
        </h1>
      </div>

      <div className='border-b-2 w-full border-black'>
        <h1 className='ml-6 mt-6 justify-center items-center text-2xl'>What Kind of Information is in Edusoft?
        </h1>
        <p className="justify-center mb-8  items-center font-light mt-6 tracking-normal">Our mission is to provide quality information on admission application
        details such as start date and end date of application, tuition fees, available accommodation within
        and outside of campus to suit your desired choice and cost</p>
      </div>

      <div className='border-b-2 w-full border-black'>
        <h1 className='mt-6 justify-center items-center text-2xl'>How is the information processed?
        </h1>
        <p className="justify-center mb-6 items-center font-light mt-6 tracking-normal">We collect your data by registering on our platform with your 
        personal data after, you search in your keyword or use the dropdown arrow to search for your desired
        courses the information you request for will be provided upon request</p>
      </div>

      <div>
      <h1 className='ml-6 mt-6 justify-center items-center text-2xl'>OUR PRINCIPLES
      </h1>
      </div>

      <div className='flex flex-row justify-around mt-6 mb-14 items-center gap-4'>
        {principlesList.map(({name,url})=><div className='flex flex-col-reverse bg-principles w-[10rem] gap-16 rounded-2xl items-center justify-around p-4' key={name}>
          {name}
          <Image src={url} alt={`image of ${name}`} width={50} height={50} />

        </div>)}
        
      </div>


    </div>
     
  )
}

export default About

