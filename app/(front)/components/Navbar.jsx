"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [isDivVisible, setDivVisible] = useState(false);

  // Toggle function
  const handleToggle = () => {
    setDivVisible(!isDivVisible);
  };
  return (
    <div className='bg-transparent flex py-3 border-b-2 items-center justify-between'>
        <Link href="/" className=' text-[#4A628A] font-extrabold text-3xl font-sans'>READSPACE</Link>
        <div onClick={handleToggle} className='flex flex-col'>
          <img src="user.jpg" alt="user"  className='h-12 rounded-full cursor-pointer'/>
        </div>
        {isDivVisible && (
        <div>
          LOGOUT
        </div>
      )}
    </div>
  )
}

export default Navbar