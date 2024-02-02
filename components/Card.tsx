import React from 'react'
import CardNav from './CardNav';
import Profile from './Profile';

function Card() {
  return (
    <div className='w-2/5 h-2/5 border border-slate-400 rounded-lg'>
      <CardNav />
      <Profile />
    </div>
  )
}

export default Card;
