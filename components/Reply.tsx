import React from 'react'
import { BiWorld } from "react-icons/bi";

function Reply() {
  return (
    <div className='flex items-center px-4 py-2'>
      <BiWorld className='text-blue-600'/>
      <h4 className='pl-2 text-blue-600 font-semibold'>Everyone can reply</h4>
    </div>
  )
}

export default Reply;
