import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='h-20 w-screen  flex items-center justify-between p-10 pr-64'>
        <h1>Sambhav</h1>
        <div id='navLinkContainer' className=''>
            <NavLink to='/' className={(e)=>(
                `ml-20 ${e.isActive ? 'white font-bold':''}`
            )}>Home</NavLink>
            <NavLink className="ml-20">About</NavLink>
            <NavLink className="ml-20">Contact</NavLink>
            <NavLink className="ml-20">Skills</NavLink>
            <NavLink className="ml-20">Projects</NavLink>
        </div>
    </div>
  )
}

export default NavBar