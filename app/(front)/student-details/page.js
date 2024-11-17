import Connect from '@/app/db/Connect'
import { redirect } from 'next/navigation';
import NewSession from '@/app/models/NewSession';
import React from 'react'

const page = async() => {
    Connect();
    const callingRecords = await NewSession.find()
    
    // const handleStartSession = async (FormData)=>{
    //     "use server"
    //     let id = FormData.get("recordId")

    //     await newSession.findByIdAndDelete()
    //     redirect("/student-details")
    // }

  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
        <h1 className="flex text-2xl mt-5 font-sans px-10 rounded font-semibold w-fit  bg-[#4A628A] text-[#DFF2Eb] shadow-b-xl justify-center py-2 ">
            Student Details
      </h1>
      <div>
        {
            callingRecords.map((record,index)=>{
                return(
                  <div key={index} className='bg-green-500 mb-5'>
                    <h1>{record.studentName}</h1>
                    <h1>{record.fatherName}</h1>
                    <h1>{record.mobile}</h1>
                    <h1>{record.pin}</h1>
                    <h1>{record.add}</h1>
                    <h1>{record.email}</h1>
                </div>
                )
            })
        }
        {/* <form action={handleStartSession} method='POST'>

        </form> */}
        </div>
    </div>
  )
}

export default page