import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Banner from './Banner'
import Avtar from './Avtar'

const Main = () => {
  return (
    <div className='flex gap-10'>  
      <div className='w-3/12'><Sidebar/> </div>  
        <div className='w-9/12'><Banner/></div>
    </div>
  )
}

export default Main