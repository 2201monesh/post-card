import React from 'react'
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { TfiList } from "react-icons/tfi";
import { PiSmiley } from "react-icons/pi";
import { TbCalendarTime } from "react-icons/tb";

function PostSection() {
  return (
    <div className='px-4 py-2 flex justify-between'>
      <div className='flex w-1/3 justify-between items-center'>
        <CiImageOn size={22} className='text-blue-600 cursor-pointer' />
        <MdOutlineGifBox size={22} className='text-blue-600 cursor-pointer' />
        <TfiList size={22} className='text-blue-600 cursor-pointer' />
        <PiSmiley size={22} className='text-blue-600 cursor-pointer' />
        <TbCalendarTime size={22} className='text-blue-600 cursor-pointer' />
      </div>
      <div>
        <button className='px-4 py-1.5 rounded-3xl bg-blue-600 text-white font-semibold cursor-pointer'>Post</button>
      </div>
    </div>
  )
}

export default PostSection
