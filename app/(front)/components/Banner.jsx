import { RxDashboard } from "react-icons/rx";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdExitToApp } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaReceipt } from "react-icons/fa6";




const Banner = () => {
  return (
    <div className='flex gap-10 mt-10'>
      {/* sidebar */}
      <div className='grid grid-rows-7 w-3/12 gap-4'>
        <div className='flex gap-3 hover:shadow  items-center pl-2 py-3 flex-row rounded-lg hover:scale-105 hover:cursor-pointer bg-[#B9E5E8]'>
          <RxDashboard  className="size-6"/>
          <p className='text-xl text-white font-bold font-sans'>Dashboard</p>
        </div>
        <Link href="/login" className='flex gap-3 hover:shadow  items-center pl-2 py-3 flex-row rounded-lg hover:scale-105 hover:cursor-pointer bg-[#B9E5E8]'>
          <IoPersonAddOutline  className="size-6"/>
          <p  className='text-xl text-white font-bold font-sans'>Add Session</p>
        </Link>
        <div className='flex gap-3 hover:shadow  items-center pl-2 py-3 flex-row rounded-lg hover:scale-105 hover:cursor-pointer bg-[#B9E5E8]'>
          <MdExitToApp  className="size-6"/>
          <p className='text-xl text-white font-bold font-sans'>Manage CheckOuts</p>
        </div>
        <div className='flex gap-3 hover:shadow  items-center pl-2 py-3 flex-row rounded-lg hover:scale-105 hover:cursor-pointer bg-[#B9E5E8]'>
          <TbReport  className="size-6"/>
          <p className='text-xl text-white font-bold font-sans'>Reports</p>
        </div>
        <div className='flex gap-3 hover:shadow  items-center pl-2 py-3 flex-row rounded-lg hover:scale-105 hover:cursor-pointer bg-[#B9E5E8]'>
          <IoSettingsOutline  className="size-6"/>
          <p className='text-xl text-white font-bold font-sans'>Settings</p>
        </div>
        <div className='flex gap-3 hover:shadow  items-center pl-2 py-3 flex-row rounded-lg hover:scale-105 hover:cursor-pointer bg-[#B9E5E8]'>
          <RiGitRepositoryPrivateLine className="size-6"/>
          <p className='text-xl text-white font-bold font-sans'>Roles</p>
        </div>
      </div>
      {/* sidebar end */}
      <div className="flex flex-col gap-5 w-9/12">
      <h2 className="text-2xl font-bold font-sans">Realtime Sessions(13)</h2>
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-red-200 flex flex-row justify-between  w-[40vh] rounded shadow p-5 border border-b-4 border-b-red-600">
           <div className="flex gap-4 flex-col text-sm">
              <p>Pince raj</p>
              <div className="flex gap-1 items-center">
              <IoLocationOutline />
               <p>15:40 PM</p>
              </div>
              <p>Time left:0h 23m left</p>
           </div>
           <div className="flex flex-col gap-4 text-sm">
              <div  className="flex gap-1 w-full  items-center  ">
              <IoMdTime  />
             <p>  0.5 hours</p></div>
            <div className="flex items-center gap-1"> <FaReceipt />
            <p>reciept</p></div>
              <p>CheckOut</p>
           </div>
        </div>
       
      
      </div>
      </div>
    </div>
  )
}

export default Banner



// work to do
// 1. after time limit expire bg-red
// 2. after adding a new session that is show in dashboard screen