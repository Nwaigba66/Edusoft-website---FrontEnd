import React from 'react'
import Image from 'next/image'


const faqList = [
    {
    name:"Consultation",
    url:'/image/consultations.png',
    type:'text',
},
{
    name:"Planning",
    url:'/image/Planning.png',
    type:'text',
}, 
{
    name:"Dedication",
    url:'/image/Dedication.png',
    type:'text',
},

]

function Faq() {
  return (
    
    <div className='flex flex-col items-center justify-center'>
        <h1 className='flex flex-row mt-10 items-center justify-center text-2xl'>
            HOW IT WORKS
        </h1> 
        <div className='flex flex-row items-center gap-10 mt-8 justify-center'>
            {faqList.map(({name,url})=><div className='flex flex-col items-center justify-center gap-10 bg-principles w-[12rem] rounded-2xl p-4' key={name}>
            {name}
            <Image src={url} alt={`image of ${name}`} width={50} height={50} />
            <h2>Consultations helps you clear any doubts</h2>
        </div>)}
        </div>
        

        <div className='border-b-2 w-[40rem] border-black'>
            <h2 className='flex flex-col items-center justify-center mt-10 ml-10 text-2xl'>Frequently Asked Questions</h2>
        </div>

       
        <div className="flex flex-col mb-3 mt-5">
        <h2>
        <button
            className="flex flex-col border-slate-100 text-slate-700 w-full focus:ring-2 rounded-t-1 group relative items-center p-4 transition-all ease-in"
            data-collapse-target="animated-collapse">
            <p className='flex flex-col text-xl'>Do you offer information for full funding / scholarship?</p>
            <i className="fa fa-chevron-down relative right-0 pt-1 text-base transition-transform group-open:rotate-180"></i>
        </button>
        </h2>
        <div data-collapse="animated-collapse"
            className="h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div className="p-4 w-full">
            We do not offer information on funding / scholarship.   
        </div>
        </div>
        </div>

        <div className="flex flex-col justify-between mb-3 mt-5">
        <h2>
        <button
            className="flex flex-col border-slate-100 text-slate-700 w-full focus:ring-2 rounded-t-1 group relative items-center p-4 transition-all ease-in"
            data-collapse-target="animated-collapse-2">
            <p className='flex flex-col text-xl'>How do we get started ?</p>
            <i className="fa fa-chevron-down relative right-0 pt-2 text-base transition-transform group-open:rotate-180"></i>
        </button>
        </h2>
        <div data-collapse="animated-collapse-2"
            className="h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div className="p-4 w-full">
            Create an account with your personal details, to log-into our website then search for desired course
            and country.   
        </div>
        </div>
        </div>

        <div className="flex flex-col justify-between mb-3 mt-5">
        <h2>
        <button
            className="flex flex-col border-slate-100 text-slate-700 w-full focus:ring-2 rounded-t-1 group relative items-center p-4 transition-all ease-in"
            data-collapse-target="animated-collapse-3">
            <p className='flex flex-col text-xl'>Do you support with document review and CV review ?</p>
            <i className="fa fa-chevron-down relative right-0 pt-2 text-base transition-transform group-open:rotate-180"></i>
        </button>
        </h2>
        <div data-collapse="animated-collapse-3"
            className="h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div className="p-4 w-full">
            Yes, we provide services for document reviews.   
        </div>
        </div>
        </div>

        <div className="flex flex-col justify-between mb-3 mt-5">
        <h2>
        <button
            className="flex flex-col border-slate-100 text-slate-700 w-full focus:ring-2 rounded-t-1 group relative items-center p-4 transition-all ease-in"
            data-collapse-target="animated-collapse-3">
            <p className='flex flex-col text-xl'>Do you have a physical address ?</p>
            <i className="fa fa-chevron-down relative right-0 pt-2 text-base transition-transform group-open:rotate-180"></i>
        </button>
        </h2>
        <div data-collapse="animated-collapse-3"
            className="h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div className="p-4 w-full">
            No, we do not have a physical address. However, all our staffs are scattered all over the
             world. So, based on your country of interest, we assign a staff to you that will work with you and advice you accordingly.   
        </div>
        </div>
        </div>

        <div className="flex flex-col justify-between mb-3 mt-5">
        <h2>
        <button
            className="flex flex-col border-slate-100 text-slate-700 w-full focus:ring-2 rounded-t-1 group relative items-center p-4 transition-all ease-in"
            data-collapse-target="animated-collapse-4">
            <p className='flex flex-col text-xl'>Do you have information on Tuition fees ?</p>
            <i className="fa fa-chevron-down relative right-0 pt-2 text-base transition-transform group-open:rotate-180"></i>
        </button>
        </h2>
        <div data-collapse="animated-collapse-4"
            className="h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div className="p-4 w-full">
            Yes, we have information on tuition fees on our website, just select your desired course, university and country.   
        </div>
        </div>
        </div> 

        <div className="flex flex-col justify-between mb-3 mt-5">
        <h2>
        <button
            className="flex flex-col border-slate-100 text-slate-700 w-full focus:ring-2 rounded-t-1 group relative items-center p-4 transition-all ease-in"
            data-collapse-target="animated-collapse-5">
            <p className='flex flex-col text-xl'>Do you offer information for all courses ?</p>
            <i className="fa fa-chevron-down relative right-0 pt-2 text-base transition-transform group-open:rotate-180"></i>
        </button>
        </h2>
        <div data-collapse="animated-collapse-5"
            className="h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div className="p-4 w-full">
            Yes, we have information on all courses on our website, just select your desired course, university and country.   
        </div>
        </div>
        </div> 

         <div className="flex flex-col justify-between mb-3 mt-5">
        <h2>
        <button
            className="flex flex-col border-slate-100 text-slate-700 w-full focus:ring-2 rounded-t-1 group relative items-center p-4 transition-all ease-in"
            data-collapse-target="animated-collapse-6">
            <p className='flex flex-col text-xl'>Do you have information on nursing and caregiver ?</p>
            <i className="fa fa-chevron-down relative right-0 pt-2 text-base transition-transform group-open:rotate-180"></i>
        </button>
        </h2>
        <div data-collapse="animated-collapse-6"
            className="h-0 overflow-hidden transition-all duration-300 ease-in-out">
        <div className="p-4 w-full">
            No, we have do not have information on nursing and caregivers on our website, just select your desired course, university and country.   
        </div>
        </div>
        </div> 
</div>      
  )
}

export default Faq
