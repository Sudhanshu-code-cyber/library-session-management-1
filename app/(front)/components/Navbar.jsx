import Link from 'next/link'
import React from 'react'
import Avatar from './Avtar'

const Navbar = () => {
  return (
    <div className='bg-transparent flex py-3 border-b-2 items-center justify-start'>
        <Link href="/" className=' text-[#4A628A] font-extrabold text-3xl font-sans flex flex-[0.6]'>READSPACE</Link>
        <div className='ml-[70%]'>
        <Avatar/>
        </div>
    </div>
  )
}

export default Navbar