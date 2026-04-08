import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

import info from '../components/info'

import './navbar.css'


export default function Navbar() {
  const location = useLocation();
  const [smallscreeen, setSmallscreen] = useState(window.innerWidth < 768)

  function isActive(path) {
    return location.pathname === path ? 'active' : '';
  }

  useEffect (()=>{
    function smallScreen(){
      setSmallscreen(window.innerWidth < 768)
    }
    window.addEventListener('resize', smallScreen)

    return ()=> window.removeEventListener('resize', smallScreen);
  
  },[]);

  const fullname =  `Portfolio/${info.name}`
  const shortname = ''

  return (
     <nav className='fade-up duration-0.1s' >
      <ul>
        <li>
          <Link to='/' className={`${isActive('/')}`}>Home</Link>
        </li>
        <li>
          <Link to='/about' className={`${isActive('/about')}`}>About</Link>
        </li>
        <li>
          <Link to='/project' className={`${isActive('/project')}`}>Project</Link>
        </li>
        <li>
          <Link to='/contact' className={`${isActive('/contact')}`}>Contact</Link>
        </li>
         <span className=' text-gray-600  text-sm lg:ml-190'>{smallscreeen ? shortname: fullname}</span>
      </ul>
     
     </nav>
   
  )
}

