import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-5 shadow-md flex justify-between items-center'>
    <div className='flex items-center ml-10'>
      <img src="" alt="" />
      <span>NVC Training Center</span>
    </div>
    <ul>
        <li> <NavLink to="/" className='text-white'>หน้าหลัก</NavLink></li>
        <li> <NavLink to="/course" className='text-white'>เกี่ยวกับ</NavLink></li>
        <li> <NavLink to="/contact" className='text-white'>ติดต่อ</NavLink></li>
    </ul>
    </nav>
  )
}

export default Navbar
