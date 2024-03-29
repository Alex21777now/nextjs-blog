import React, { useState } from 'react';

export default function Filters() {
  const [isOpen1, setIsOpen1] = useState(false);
    return (     
      <section className="bg-gray-800 xl:w-72">
<div className="flex justify-between  px-4 py-3  xl:hidden">
   <div className="relative max-w-xs  w-full">
    <div className="absolute inset-y-0  left-0  flex items-center pl-3">
        <svg className="h-6 w-6 fill-current  text-gray-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3199 12.9056L15.4165 14.0023C15.8277 13.9795 16.2465 14.1252 16.5607 14.4393L19.5607 17.4393C20.1464 18.0251 20.1464 18.9749 19.5607 19.5607C18.9749 20.1464 18.0251 20.1464 17.4393 19.5607L14.4393 16.5607C14.1252 16.2465 13.9795 15.8277 14.0023 15.4165L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#A0AEC0"/>
        </svg>
    </div>
    <input className="block w-full bg-gray-900   focus: outline-none focus:bg-white  focus:text-gray-900  text-white  rounded-lg   pl-10 pr-5  py-2"  
            placeholder="Search by keywords"/>
</div>
<button  onClick={() => setIsOpen1(!isOpen1)} className="ml-4 items-center inline-flex {isOpen1? bg-gray-600 : bg-gray-700 } hover:bg-gray-600  focus:outline-none  focus:shadow-outline 
  rounded-lg   pl-3  pr-4"> 
    <svg className="h-6 w-6  fill-current text-gray-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path  d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z" /></svg>
    <span  className="ml-1 text-white font-medium">Filters</span> 
</button> 
</div>
   { 
    isOpen1 &&
   <form className="xl:h-full xl:flex xl:flex-col xl:justify-between">
     <div className="lg:flex xl:block  xl:overflow-y-auto">     
  <div className="px-4  py-4  border-t  border-gray-900  lg:w-1/3 xl:border-t-0 xl:w-full ">
     <div className="flex flex-wrap -mx-2">    
      <label className="block w-1/2 px-2  sm:w-1/4 lg:w-1/2">
          <span className="text-sm font-semibold  text-gray-500">Bedrooms</span>
          <select className="mt-1 form-select block w-full    shadow focus:bg-gray-600">
            <option>4</option>
          </select>
      </label>
      <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
          <span className="text-sm font-semibold  text-gray-500">Bathrooms</span>
          <select className="mt-1 form-select block w-full shadow">
            <option>2</option>
          </select>
      </label>
      <label className="block w-1/2 px-2 sm:mt-0 sm:w-1/2  lg:w-full">
        <span className="text-sm font-semibold text-gray-500">Price Range</span>
          <select  className="mt-1 form-select block w-full shadow" >
            <option>Up to $2.0000/wk</option>
          </select>
        </label>
      </div>   
     </div> 
    <div  className="px-4 py-4 border-t border-gray-900  lg:w-1/3  lg:border-l">     
  <span className=" block text-sm font-semibold text-gray-500">Property Type</span>
   <div className="sm:flex sm:-mx-2  lg:block  lg:mx-0">
  <label className="mt-3  sm:w-1/4  flex items-center  lg:w-full lg:px-0">
  <input  className="form-radio"  type="radio"  name="propertyType"  value="house"/> 
    <span className="ml-2  text-white">House</span> 
  </label>
  <label className= "mt-3 sm:w-1/4  flex items-center  lg:w-full  lg:px-0">
  <input  className="form-radio"  type="radio"  name="propertyType"  value="apartment"/> 
  <span className="ml-2  text-white ">Apartment </span>
  </label>
  <label className="mt-3  sm:w-1/4  flex items-center lg:w-full  lg:px-0">
  <input   className="form-radio"  type="radio"  name="propertyType"  value="loft"/> 
  <span className="ml-2  text-white">Loft  </span>
  </label>
  <label className="mt-3  sm:w-1/4 flex items-center lg:w-full  lg:px-0">
  <input    className="form-radio"   type="radio"  name="propertyType"  value="townhouse"/>
  <span className="ml-2   text-white">Townhouse </span>
  </label>
  </div> 
  </div> 
  <div className="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l  xl:w-full">
    <span className="block text-sm font-semibold text-gray-500"> Amenities</span> 
    <div className="sm:flex sm:-mx-2  sm:flex-wrap">       
  <label className= "mt-3 flex items-center  sm:w-1/4 sm:px-2  lg:w-1/2 xl:w-full">
  <input className= "form-checkbox  bg-gray-900"  type="checkbox"  name="balcony" />
  <span className="ml-2  text-white"> Balcony </span>  
  </label>
  <label className= "mt-3 flex items-center sm:w-1/4  sm:px-2   lg:w-1/2 xl:w-full">
  <input  className= "form-checkbox   bg-gray-900"   type="checkbox"  name="pool"/> 
  <span className="ml-2  text-white"> Pool </span> 
  </label>
  <label className= "mt-3 flex items-center sm:w-1/4  sm:px-2   lg:w-1/2   xl:w-full">
  <input   className= "form-checkbox   bg-gray-900"    type="checkbox"  name="beach"/>
  <span className="ml-2  text-white">  Beach </span> 
  </label>
  <label className= "mt-3 flex items-center sm:w-1/4 sm:px-2  lg:w-1/2  xl:w-full">
  <input   className= "form-checkbox   bg-gray-900"   type="checkbox"  name="petFriendly"/>
  <span className="ml-2  text-white">   Pet friendly </span> 
  </label>
  <label className= "mt-3 flex items-center sm:w-1/4  sm:px-2   lg:w-1/2   xl:w-full">
  <input   className= "form-checkbox     bg-gray-900"   type="checkbox"  name="kidFriendly"/>
  <span className="ml-2  text-white">   Kid friendly </span>
  </label>
  <label className= "mt-3 flex items-center  sm:w-1/4  sm:px-2   lg:w-1/2   xl:w-full">
  <input   className= "form-checkbox     bg-gray-900"   type="checkbox"  name="parking"/>
  <span className="ml-2  text-white">   Parking  </span>
  </label>
  <label className= "mt-3 flex items-center sm:w-1/2  sm:px-2   lg:w-full ">
  <input  className= "form-checkbox  bg-gray-900"  type="checkbox"  name="airConditioning" /> 
  <span className="ml-2  text-white"> Air conditioning </span> 
  </label>
  </div> 
  </div>
  </div> 
  <div className="bg-gray-900 px-4  py-4  sm:text-right">
 <button className="block w-full  sm:w-auto  sm:inline-block  bg-indigo-500   hover:bg-indigo-400   font-semibold px-4 py-2 text-white px-4 py-2 rounded-lg xl:block xl:w-full">Update results</button>          
</div>  
  </form> 
}                          
</section>

)
}