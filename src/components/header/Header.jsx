import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Ueissss</h5>
      <h1>im fab</h1>
      <h5 className="text-light">Fullstack dev</h5>
      <CTA/>
      <HeaderSocials/>
      
      

      <div >
        <img src={ME} alt="me"  className="me"/>
      </div>

      <a href="#contact" className='scroll__down'>Scroll down</a>
    </div>
   </header>
  )
}

export default Header