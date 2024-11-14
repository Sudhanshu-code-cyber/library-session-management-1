import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col mt-5 items-center'>
      <div className='flex text-4xl font-sans px-10 rounded font-semibold w-fit  bg-[#4A628A] text-[#DFF2Eb] shadow-b-xl justify-center py-5 '>
        Add Session
        </div>
     
       <form action='' className='flex justify-center p-5 ' >
           <div className='flex w-[50%]  justify-center gap-5 '>
           <label id="Sname" className='text-xl   font-semibold font-sans '>
                Student Name:
            </label>
            <input id='Sname' className='p-1 w-[50%]  outline-none border-[#7AB2D3]'/>

           </div>
        </form>
       
    </div>
  )
}

export default page
