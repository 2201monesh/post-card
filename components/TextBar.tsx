"use client"
import React, { useState } from 'react'

function TextBar() {

  const [content, setContent] = useState('');

  const handleChange = (event: any) => {
    const { value } = event.target;
    setContent(value);
  };
  
  const autoResize = (element: any) => {
    element.style.height = 'auto'; // Reset the height to auto
    element.style.height = `${element.scrollHeight}px`; // Set the height to the content's scroll height
  };  

  return (
    <div className='px-4 py-2 ml-14'>
      <textarea
       value={content}
       onChange={handleChange} 
       name="text" 
       placeholder='What is happening?' 
       className='w-11/12 p-2'
       onInput={(e) => autoResize(e.target)}
       style={{
        resize: 'none', // Disable the resizing handle
        overflowY: 'hidden', // Hide the vertical scrollbar
       }}
      >        
      </textarea>
    </div>
  )
}

export default TextBar;
