import React from 'react'
import Sidebar from '../components/Sidebar'

const page = () => {
  return (
    <div className='flex  gap-5'>
       <div className='flex flex-col'>
        <div>
            <h1 className='text-2xl mt-10 font-bold'>Checkout Sessions</h1>
            {/* search bar */}
            {/* date */}
        </div>
        
        <table className="table-auto border-collapse border-2 border-[#195758] w-full max-w-screen-lg shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#37babd] text-white text-lg">
            <th className="border p-3 text-center">SI.NO</th>
            <th className="border p-3 text-center">Student Name</th>
            <th className="border p-3 text-center">CheckIn-Time</th>
            <th className="border p-3 text-center">Assign Hour</th>
            <th className="border p-3 text-center">CheckOut Time</th>
            <th className="border p-3 text-center">Total Duration</th>
            <th className="border p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
         
            <tr
              className="hover:bg-[#f4f4f4] transition-colors duration-300 ease-in-out"
            >
              <td className="border p-4 text-center">1</td>
              <td className="border p-4 text-center">vikash</td>
              <td className="border p-4 text-center">18/11/2024 02:43</td>
              <td className="border p-4 text-center">0.5 hour</td>
              <td className="border p-4 text-center">18/11/2024 03:07</td>
              <td className="border p-4 text-center">0.5 hour</td>
              <td className="border p-4 text-center">Recipt</td>
              
            </tr>
        </tbody>
      </table>
        </div>
        
        
    </div>
  )
}

export default page