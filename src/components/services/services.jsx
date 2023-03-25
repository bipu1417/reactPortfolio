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
            <h3>Bckend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Working experience in project based on Spring boot</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Proficient in Java based Development</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Worked with MySQL, Oracle SQL for Database.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Good exposure to tools like JIRA, Postman, GIT & IDEs like Eclipse, VS Code</p>
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
              <p>Having proven experience in Web Development and Web Automation</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>experience in project based on Spring boot, Javascript, MySQL, HTML, Bootstrap.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Learning ReactJS by developing Single Page Applications.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Highly adaptable to learn new technologies.</p>
            </li>
          </ul>
        </article>
        {/* End Of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Automation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Strong experience in Web Automation Using Selenium.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Experienced in Framework Development for Web Automation.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Experienced in CI/CD pipeline(Jenkins).</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Have worked with Oracle Weblogic, TestNG, GIT, Docker.</p>
            </li>
          </ul>
        </article>
        {/* End Of Content Creation */}
      </div>
    </section>
  )
}

export default services