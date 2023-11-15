"use client"
import React, { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useFetchOptionsQuery } from '@/services/api'
import './sidebar.css'

const initialFormState : {
  [key:string]:string
} = {
  search:"",
  course:""
}

export default function SideBar({displaySearch, toggleSidebar}:{
  displaySearch: boolean
  toggleSidebar:()=>void
}) {

  // define the Sidebar visuals and logic

  const [searchForm, setSearchForm] = useState(initialFormState);
  const { data, isLoading } = useFetchOptionsQuery();
  const { search, course } = searchForm
  const courseRef = useRef<HTMLSelectElement>(null)  // track the course option
  const countryRef = useRef<HTMLSelectElement>(null) // track the country option
  const router = useRouter()

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>)=>{
    // manage the search form submission

    e.preventDefault();
    const course = courseRef.current?.value;  // get the value of course
    const country = countryRef.current?.value;  // get the value of country
    const searchData = `${search? "search=" + search: ""}`  // set the url format for search query
    const countryData = `${country != "select" ? "country=" + country:""}`  // set url format for country query
    const courseData = `${course != "select" ? "course=" + course:""}`  // set url format for course query

    if (countryData.length > 0 || courseData.length > 0 || search.length > 0){
      toggleSidebar()   // effective only for smaller screen

      // create a url from non empty search queries and switch to the url
      router.push(`/search/?${search ?searchData:""}${countryData? "&" + countryData :""}${courseData? "&" + courseData:""}`) 
    }
    
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    // handles input entered by user
    
    e.preventDefault()
    const { name,value} = e.target
    setSearchForm(prevState=>({
      ...prevState,[name]:value}))
  }
  
  return (
    <div className={`sidebar fixed ${!displaySearch ? "hidden": "flex" }  flex-col items-center w-full h-full
                         bg-black bg-opacity-20 md:bg-transparent left-0  md:w-auto md:flex`}>
      <form onSubmit={handleSubmit} action="" className= {` flex flex-col bg-blue-500 rounded md:bg-transparent
                                justify-around items-center 
                                h-full w-80 `}>
        <div>
          <h3>Enter a key word</h3>
          <input onChange={handleInput} disabled={course !== "select" && course != ""} value={search} name="search" className="text-center bg-placeholder h-[45px]
                            text-placeholder-text rounded"
                            type="text" placeholder="search course "/>
        </div>
        <div>
          <h3 >Select a Country</h3>
          <select ref={countryRef} name="country" id="country" className="bg-placeholder h-[45px]">
             <option value="select" >----------</option>
             {!isLoading && data?.countries && data.countries.map(({name, code2})=><option key={code2} value={code2} >
              {name}</option>)}
          </select>
        </div>
        <div>
           <h3 >Select a Course</h3>
            <select ref={courseRef} onChange={handleInput} disabled={search.length > 0}  name="course" id="course" className="bg-placeholder h-[45px]">
              <option value="select">------------</option>
              {!isLoading && data?.courses && data.courses.map(({name})=><option key={name.replace(' ', '_')} value={name}>
                {name}</option>)}
            </select>
        </div>
        
        <button className="bg-button text-white text-lg p-2">Search For Course</button>
      </form>
    </div>
  );
};




