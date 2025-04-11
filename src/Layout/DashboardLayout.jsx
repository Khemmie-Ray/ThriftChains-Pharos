import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import { Outlet }from 'react-router'
import MobileSidebar from '../components/dashboard/MobileSidebar'

const DashboardLayout = () => {
  return (
    <div>
      <MobileSidebar />
        <div className='flex justify-between'>
          <div className='w-[20%] hidden lg:flex md:flex bg-darker'>
        <Sidebar />
        </div>
        <div className='h-[100vh] overflow-y-scroll w-[95%] lg:w-[80%] md:w-[80%] bg-[#F3F5F7] mx-auto'>
        <Outlet />
        </div>
        </div>
    </div>
  )
}

export default DashboardLayout