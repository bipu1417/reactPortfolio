import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaHackerrank} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const headerSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/biplab-mahato-945441141/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://www.hackerrank.com/bips4lcs" target="_blank" rel="noreferrer"><FaHackerrank /></a>
        <a href="https://github.com/bipu1417?tab=repositories" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default headerSocial