import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-transparent flex py-3 border-b-2 items-center justify-between'>
        <h1 className=' text-[#4A628A] font-extrabold text-3xl font-sans'>READSPACE</h1>
        <img src="user.jpg" alt="user"  className='h-12 rounded-full cursor-pointer'/>
    </div>
  )
}

export default Navbar