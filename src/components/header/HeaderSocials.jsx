import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsSpotify } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';



const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target=""><BsLinkedin/></a>
        <a href="https://github.com" target=""><BsSpotify/></a>
        <a href="https://spotify.com" target=""><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials