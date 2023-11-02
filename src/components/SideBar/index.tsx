"use client"
import React, { useState } from 'react'

export default function SideBar({displaySearch}:{
  displaySearch: bool
}) {
  

  return (
    <div className={`sidebar fixed ${!displaySearch ? "hidden": "flex" }  flex-col items-center top-0 w-full h-full
                         bg-black bg-opacity-20 md:bg-transparent left-0 md:sticky md:w-auto md:flex`}>
      <section className= {` flex flex-col bg-blue-500 rounded md:bg-transparent
                                justify-around items-center 
                                h-full w-80 `}>
        <div>
          <h3>Enter a key word</h3>
          <input className="text-center bg-placeholder h-[45px]
                            text-placeholder-text rounded"
                            type="text" placeholder="search course "/>
        </div>
        <div>
          <h3 >Select a Country</h3>
          <select name="" id="country" className="bg-placeholder h-[45px]">
            <option value="ng" default>Nigeria</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
        <div>
           <h3 >Select a Course</h3>
            <select name="" id="country" className="bg-placeholder h-[45px]">
              <option value="software" default>Software Engineering</option>
              <option value="nursing">Nursing</option>
            </select>
        </div>
        
        <button className="bg-button text-white">Submit</button>
      </section>
    </div>
  );
};




