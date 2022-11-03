import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>FrondEnd Development</h3>
          <div className='experience__content'>
            <article className='exoperience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exoperience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exoperience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='exoperience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>BackEnd Development</h3>
          <div className='experience__content'>
            <article className='exoperience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exoperience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Spring Boot</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exoperience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JAVA</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='exoperience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Microservices</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='exoperience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Oracle SQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience