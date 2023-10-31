import React from 'react'

export default function SideBar() {
  return (
    <div className="sidebar bg-white pt-[1rem] pb-[3rem]">
      <section className=" flex flex-col
                          justify-between items-center 
                          h-full w-full">
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




