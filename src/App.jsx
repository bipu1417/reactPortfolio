import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Testimonial from './components/testimonial/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio'

const App = () => {
  return (
  <>
  <Header />
  <Nav />
  <About />
  <Experience />
  <Services />
  <Portfolio />
  <Testimonial />
  <Contact />
  <Footer />
  </>
  )
};

export default App;