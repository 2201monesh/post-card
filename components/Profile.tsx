import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function Profile() {
  return (
    <div className='px-4 py-2 flex'>
      <img src="https://wallpapers.com/images/high/pfp-pictures-emc0u55tsw3bn1d9.webp" alt="image" width={40} className='rounded-full border mr-3' />
      <div className='flex items-center w-28 h-6 px-1 rounded-3xl justify-center border border-slate-300'>
        <h4 className='pr-1'>Everyone</h4>
        <IoIosArrowDown />
      </div>
    </div>
  )
}

export default Profile
