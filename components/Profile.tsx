import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function Profile() {
  return (
    <div className='px-4 py-1 flex'>
      <img src="https://wallpapers.com/images/high/pfp-pictures-emc0u55tsw3bn1d9.webp" alt="image" width={40} className='rounded-full border mr-3' />
      <div className='flex items-center w-28 h-6 px-1 rounded-3xl justify-center border border-slate-300 cursor-pointer hover:bg-blue-50'>
        <h4 className='pr-1 text-blue-600 font-semibold'>Everyone</h4>
        <IoIosArrowDown className='text-blue-600 font-semibold' />
      </div>
    </div>
  )
}

export default Profile
