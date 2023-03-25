import React from 'react'
import './nav.css'
import {RiHomeHeartLine} from 'react-icons/ri'
import {BiInfoSquare} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {IoMdContacts} from 'react-icons/io'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHomeHeartLine /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiInfoSquare /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContacts /></a>
    </nav>
  )
}

export default Nav