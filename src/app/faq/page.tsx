import React from 'react'
import Image from 'next/image'
import './faq.css'


// An array of objects representing descriptions on the faq page
const faqTopDisplayList = [
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

// an array of objects each representing a complete faq that enables dynamic updates
const faqList = [
        {
            id:0,
            question:'Do you offer information for full funding / scholarship?',
            answer:'We do not offer information on funding / scholarship.'
        },
        {
            id:1,
            question:'How do we get started ?',
            answer:'Create an account with your personal details, to log-into our website then search for desired course and country.'
        },
        {
            id:2,
            question:'Do you support with document review and CV review ?',
            answer:'Yes, we provide services for document reviews. '
        },
        {
            id:3,
            question:'Do you have a physical address ?',
            answer:'No, we do not have a physical address. However, all our staffs are scattered all over the world. So, based on your country of interest, we assign a staff to you that will work with you and advice you accordingly.Yes, we provide services for document reviews. '
        },
        {
            id:4,
            question:'Do you have information on Tuition fees ?',
            answer:'Yes, we have information on tuition fees on our website, just select your desired course, university and country.'
        },
        {
            id:5,
            question:'Do you offer information for all courses ?',
            answer:'Yes, we have information on all courses on our website, just select your desired course, university and country.'
        },
        {
            id:6,
            question:'Do you have information on nursing and caregiver ?',
            answer:'No, we have do not have information on nursing and caregivers on our website, just select your desired course, university and country.'
        },
    ]

function Faq() {
  return (
    
    <div className='flex flex-col w-full'>
        <h1 className='text-center mt-10 text-2xl'>
            HOW IT WORKS
        </h1> 
        <div className='flex flex-wrap justify-center gap-5 mt-5'>
            {faqTopDisplayList.map(({name,url})=><div className='flex flex-col items-center justify-center bg-principles w-[12rem] rounded-2xl p-4' key={name}>
            {name}
            <Image src={url} alt={`image of ${name}`} width={50} height={50} />
            <h2>Consultations helps you clear any doubts</h2>
        </div>)}
        </div>
        

        <div className='border-b-2 border-black'>
            <h2 className='flex flex-col items-center justify-center mt-10 ml-10 text-2xl'>Frequently Asked Questions</h2>
        </div>

       



        <section>
            {faqList.map(({question, answer, id})=><div key={id} className="relative mb-3">
                  <h6 className="mb-0">
                    <button
                      className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
                      data-collapse-target={`collapse-${id}`}
                    >
                      <span>{question}</span>
                      <i className="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
                      <i className="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
                    </button>
                  </h6>
                  <div
                    data-collapse={`collapse-${id}`}
                    className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                      {answer}
                    </div>
                  </div>
            </div>)}
        </section>
</div>      
  )
}

export default Faq
