import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-transparent flex py-3 border-b-2 items-center justify-between'>
        <Link href="/" className=' text-[#4A628A] font-extrabold text-3xl font-sans'>READSPACE</Link>
        <div>
          <img src="user.jpg" alt="user"  className='h-12 rounded-full cursor-pointer'/>
        </div>
    </div>
  )
}

export default Navbar