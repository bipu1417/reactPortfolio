import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'
const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Very good hands on experience with React JS</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>I have used Tailwind CSS in all my project for better UX</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Have experience of using Redux Toolkit</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Experience of Debouncing and other optimization</p>
            </li>
          </ul>
        </article>
        {/* End Of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Developed many web Application using React JS</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Have experience of backend as well in Spring Boot</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Experienced end-to-end development</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>With Latest technologies and trends</p>
            </li>
          </ul>
        </article>
        {/* End Of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>CI/CD & Automation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Have very good experience of JENKINS</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Have used Weblogis and Docker as well</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Have pretty good experience of web automation in Selenium</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>I have Good experience in using CI/CD tools</p>
            </li>
          </ul>
        </article>
        {/* End Of Content Creation */}
      </div>
    </section>
  )
}

export default services