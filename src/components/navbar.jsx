import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-600 text-white py-3'>
      <div className="logo">
        <span className='font-bold mx-9 text-xl'>iTask </span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all  '>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all  '>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default navbar
