"use client"
import React, { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'


const initialFormState : {
  [key:string]:string
} = {
  search:"",
}

export default function SideBar({displaySearch, toggleSidebar}:{
  displaySearch: boolean
  toggleSidebar:()=>void
}) {

  const [searchForm, setSearchForm] = useState(initialFormState)
  const { search } = searchForm
  const courseRef = useRef<HTMLSelectElement>(null)
  const countryRef = useRef<HTMLSelectElement>(null)

  const router = useRouter()

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const course = courseRef.current?.value;
    const country = countryRef.current?.value;
    const searchData = `search=${search? search: ""}`
    const countryData = `country=${country? country:""}`
    const courseData = `course=${course?course:""}`

    if (course || country || search){
      toggleSidebar()
      router.push(`/search/?${search.trim()?searchData+"&":""}${country?countryData + "&":""}${course?courseData:""}`) 
    }
    
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name,value} = e.target
    setSearchForm(prevState=>({
      ...prevState,[name]:value}))
  }
  
  return (
    <div className={`sidebar fixed ${!displaySearch ? "hidden": "flex" }  flex-col items-center top-0 w-full h-full
                         bg-black bg-opacity-20 md:bg-transparent left-0 md:sticky md:w-auto md:flex`}>
      <form onSubmit={handleSubmit} action="" className= {` flex flex-col bg-blue-500 rounded md:bg-transparent
                                justify-around items-center 
                                h-full w-80 `}>
        <div>
          <h3>Enter a key word</h3>
          <input onChange={handleInput} value={search} name="search" className="text-center bg-placeholder h-[45px]
                            text-placeholder-text rounded"
                            type="text" placeholder="search course "/>
        </div>
        <div>
          <h3 >Select a Country</h3>
          <select ref={countryRef} name="country" id="country" className="bg-placeholder h-[45px]">
            <option value="ng" >Nigeria</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
        <div>
           <h3 >Select a Course</h3>
            <select ref={courseRef}  name="course" id="course" className="bg-placeholder h-[45px]">
              <option value="software">Software Engineering</option>
              <option value="nursing">Nursing</option>
            </select>
        </div>
        
        <button className="bg-button text-white">Submit</button>
      </form>
    </div>
  );
};




