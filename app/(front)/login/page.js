import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
       <div className='flex items-center justify-center pt-10'>
     <div className='flex  px-8 py-10 border gap-2 flex-col rounded-xl bg-[#B9E5E6] shadow-xl '>
         <h1 className=' font-sans text-2xl font-bold text-gray-600'>Login</h1>
         <p className='font-sans font-semibold text-gray-500'>Please sign up to library-session</p>
        <form action="" className=''>
        
           <div className='mt-4 '>
           <label htmlFor="name" className='font-sans font-semibold text-gray-500' >User Name</label>
           <input type="text" className='px-3 py-2 w-full border  rounded font-sans font-semibold text-gray-700 ' required />
           </div>
           <div className='mt-4 '>
           <label htmlFor="name" className='font-sans font-semibold text-gray-500' >Password</label>
           <input type="password" className='px-3 py-2 w-full border rounded font-sans font-semibold text-gray-700   ' required />
           </div>
           <div className='mt-4 flex gap-5 '>
           <label htmlFor="name" className='font-sans font-semibold text-gray-500' >Session-duration</label>
           <select className='px-3 rounded'>
            <option> 1 hour</option>   
            <option> 2 hours</option>   
            <option> 2.5 hours</option>   
            <option> 3 hours</option>   
            <option> 4 hours</option>   
            <option> 5 hours</option>   
           </select>
           </div>
           <button type='submit' className="bg-[#4A628A] mt-5 text-white font-semibold font-sans w-full py-2 my-3 rounded-md text-base">Login</button>
        </form>
        <div className='flex pt-2 gap-1'>
            <p className='font-sans font-semibold text-gray-500 '>Create an new account? </p>
            <Link  href="/addingSession" className='text-blue-600 font-sans'> Click here</Link>
        </div>
    </div>
   </div>
    </div>
  )
}

export default page
