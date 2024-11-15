import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdExitToApp } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
         <div className='grid grid-rows-7 w-3/12 mt-10 gap-4'>
        <div className='flex gap-3 hover:shadow  items-center pl-2 py-3 flex-row rounded-lg hover:scale-105 hover:cursor-pointer bg-[#B9E5E8]'>
          <RxDashboard  className="size-6"/>
          <Link href="" className='text-xl text-white font-bold font-sans'>Dashboard</Link>
        </div>
        <div className='flex gap-3 hover:shadow  items-center pl-2 py-3 flex-row rounded-lg hover:scale-105 hover:cursor-pointer bg-[#B9E5E8]'>
          <IoPersonAddOutline  className="size-6"/>
          <Link href="/login" className='text-xl text-white font-bold font-sans'>Add Session</Link>
        </div>
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
    </div>
  )
}

export default Sidebar