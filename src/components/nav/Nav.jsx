import React from 'react'
import './nav.css' 
import { HiOutlineHome } from 'react-icons/hi';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { IoIosContact } from 'react-icons/io';
import { useState } from 'react';


const Nav = () => {
   const [ activeNav, setActiveNav ] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><HiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><HiOutlineInformationCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiOutlineDesktopComputer/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoIosContact/></a>
      
    </nav>
  )
}

export default Nav