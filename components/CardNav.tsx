import React from 'react'
import { RxCross2 } from "react-icons/rx";

function CardNav() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <RxCross2 />
        <h5>Drafts</h5>
    </div>
  )
}

export default CardNav
