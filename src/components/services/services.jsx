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
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
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
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
            </li>
          </ul>
        </article>
        {/* End Of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem Ipsum dolor sit amet constructetur elit.</p>
            </li>
          </ul>
        </article>
        {/* End Of Content Creation */}
      </div>
    </section>
  )
}

export default services