import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col mt-5 items-center'>
      <div className='flex text-2xl font-sans px-10 rounded font-semibold w-fit  bg-[#4A628A] text-[#DFF2Eb] shadow-b-xl justify-center py-2 '>
        Add Session
        </div>
     
       <form action='' className='flex justify-center p-5 flex-col gap-5 ' >
           <div className='flex w-full justify-start gap-5 '>
           <label id="Sname" className='text-xl w-fit  font-semibold font-sans '>
                Student Name :
            </label>
            <input id='Sname' className='p-1 w-[70vh] ml-8 rounded hover:border-[#4A628A] border  outline-none'required />

           </div>
           <div className='flex w-full justify-start gap-5 '>
           <label id="Fname" className='text-xl w-fit  font-semibold font-sans '>
                Father's Name :
            </label>
            <input id='Fname' className='p-1 w-[70vh] rounded ml-9  hover:border-[#4A628A] border  outline-none'required/>

           </div>
           <div className='flex w-full justify-start gap-5 '>
           <label id="Aname" className='text-xl w-fit  font-semibold font-sans '>
                Add:
            </label>
            <input id='Aname' className='p-1 w-[70vh] rounded ml-32 hover:border-[#4A628A] border  outline-none'required/>

           </div>
           <div className='flex w-full justify-start gap-5 '>
           <label id="Pname" className='text-xl w-fit  font-semibold font-sans '>
                Pin code :
            </label>
            <input id='Pname' type='Number' className='p-1 w-[70vh] rounded ml-20 hover:border-[#4A628A] border  outline-none'required/>

           </div>
           <div className='flex w-full justify-start gap-5 '>
           <label id="Mname" className='text-xl w-fit  font-semibold font-sans '>
                Mob :
            </label>
            <input id='Mname' type='Number'  className='p-1 w-[70vh] rounded ml-28 hover:border-[#4A628A] border  outline-none'required/>

           </div>
           <div className='flex w-full justify-start gap-5 '>
           <label id="Ename" className='text-xl w-fit  font-semibold font-sans '>
               Email :
            </label>
            <input id='Ename' placeholder='your@gmail.com'   className=' text-gray-300 p-1 w-[70vh] ml-28 rounded hover:border-[#4A628A] border  outline-none'required/>

           </div>
           <div className='flex w-full justify-start gap-5 '>
           <label id="Nname"  className='text-xl w-fit  font-semibold font-sans '>
               Nem Password :
            </label>
            <input id='Nname'type='Password' className='p-1 w-[70vh] ml-7 rounded hover:border-[#4A628A] border  outline-none'required/>

           </div>
           <div className='flex w-full justify-start gap-5 '>
           <label id="Cname" className='text-xl w-fit  font-semibold font-sans '>
                Confirm Password :
            </label>
            <input id='Cname'type='Password' className='p-1 w-[70vh] rounded hover:border-[#4A628A] border  outline-none'required  />

           </div>
           <div className='flex  justify-center w-full gap-5 mt-5 '>
           
            <input id='Sname'type='submit' value="Create Account" className='p-2 text-[#DFF2Eb] text-2xl font-semibold font-sans w-[95vh] bg-[#4A628A] rounded  hover:border-[#4A628A]  border  outline-none'/>

           </div>
        </form>
        <div className='flex pt-2 gap-1'>
            <p className='font-sans font-semibold text-gray-500 '>Already have an account?</p>
            <Link  href="/account" className='text-blue-600 font-sans'> Login here</Link>
        </div>
    </div>
  )
}

export default page
