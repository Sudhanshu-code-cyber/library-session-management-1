"use client"
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'


const page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);

      // Validate length
      if (value.length === 10) {
        setError(""); // Clear error if valid
      } else {
        setError("Phone number must be exactly 10 digits.");
      }
    }
  };
  return (
    <div className='flex flex-1 flex-row gap-[15rem] ' >
       <div className='flex gap-10 items-center justify-center pt-10'>
    
    
     <form  className='flex  px-8 py-10 border gap-2 flex-col rounded-xl bg-[#B9E5E6] shadow-xl '>
         <h1 className=' font-sans text-2xl font-bold text-gray-600'>Login</h1>
         <p className='font-sans font-semibold text-gray-500'>Please Login to library-session</p>
        <form action="" className=''>
        
           <div className='mt-4 '>
           <label htmlFor="phone" className='font-sans font-semibold text-gray-500' >Mobile No.</label>
           <input  value={phoneNumber} onChange={handleChange} maxLength="10"  placeholder="Enter 10-digit phone number" type="text" id="phone" className='px-3 py-2 w-full border  rounded font-sans font-semibold text-gray-700 ' required />
            {error && <p style={{ color: "red" }}>{error}</p>}
           </div>
          
           <div className='mt-4 flex gap-5 '>
           <label htmlFor="session" className='font-sans font-semibold text-gray-500' >Session-duration</label>
           <select id="session" className='px-3 rounded'>
            <option> 1 hour</option>   
            <option> 2 hours</option>   
            <option> 2.5 hours</option>   
            <option> 3 hours</option>   
            <option> 4 hours</option>   
            <option> 5 hours</option>   
           </select>
           </div>
           <button type='submit' className="bg-[#4A628A] mt-5 text-white font-semibold font-sans w-full py-2 my-3 rounded-md text-base">Start Session Now</button>
        </form>
        <div className='flex pt-2 gap-1'>
            <p className='font-sans font-semibold text-gray-500 '>Create an new account? </p>
            <Link  href="/addingSession" className='text-blue-600 font-sans'> Click here</Link>
        </div>
    </form>
        {/* <form >
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          value={phoneNumber}
          onChange={handleChange}
          maxLength="10" // Restrict max length to 10
          placeholder="Enter 10-digit phone number"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <button type="submit">Submit</button>
    </form> */}
   </div>
    </div>
  )
}

export default page
