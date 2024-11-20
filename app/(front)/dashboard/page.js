import React from 'react'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'

const page = () => {
  return (
    <div className='flex '>
        <div className='w-3/12'><Sidebar/></div>
      <div className='w-9/12'><Banner/></div>
    </div>
  )
}

export default page