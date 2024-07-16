import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='h-14 pl-10 w-screen flex items-center justify-between  pr-64 z-50 text-white'>
        <h1>Sambhav</h1>
        <div id='navLinkContainer' className='z-50'>
            <NavLink to='/' className={(e)=>(
                `ml-20 ${e.isActive ? 'text-white font-bold' : ''}`
            )}>Home</NavLink>
            <NavLink to='/about' className="ml-20">About</NavLink>
            <NavLink to='/contact' className="ml-20">Contact</NavLink>
            <NavLink to='/skills' className="ml-20">Skills</NavLink>
            <NavLink to='/projects' className="ml-20">Projects</NavLink>
        </div>
    </div>
  )
}

export default NavBar
