import React from 'react'
import Sidebar from '../components/Sidebar'

const page = () => {
  return (
    <div className='flex  gap-5'>
      <div className='w-3/12'><Sidebar/></div>
       <div>
          <h1 className='text-2xl mt-10 font-bold'>Checkout Sessions</h1>
       </div>
        
    </div>
  )
}

export default page