import React from 'react'
import './portfolio.css';

const data = [
  {
    id: 1,
    image: "https://cdn.zeebiz.com/hindi/sites/default/files/2022/11/08/109267-untitled-design.png?im=FitAndFill=(1200,1200)",
    title: 'Youtube Clone App',
    github: 'https://github.com/bipu1417/Youtube-clone',
    demo: 'https://github.com/bipu1417/Youtube-clone?tab=readme-ov-file#demo-video-of-the-project'
  },
  {
    id: 2,
    image: "https://static.vecteezy.com/system/resources/previews/021/813/141/original/food-delivery-logo-design-template-with-delivery-and-food-icon-perfect-for-business-company-mobile-app-restaurant-etc-free-vector.jpg",
    title: 'Food Delivery App',
    github: 'https://github.com/bipu1417/Food-delivery-App',
    demo: 'https://github.com/bipu1417/Food-delivery-App?tab=readme-ov-file#demo-video-of-the-project'
  },
  {
    id: 3,
    image: "data:image/jpeg;base64,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",
    title: 'My Portfolio using React',
    github: 'https://github.com/bipu1417/reactPortfolio',
    demo: 'https://drevolution1417.web.app/'
  },
  {
    id: 4,
    image: "https://logo.com/image-cdn/images/kts928pd/production/0edce5f2a29f39d2266c1ded3a9107bfe806736a-357x352.png?im=FitAndFill=(1200,1200)",
    title: 'Blogging Website',
    github: 'https://github.com/bipu1417/Blogging-Website',
    demo: 'https://github.com/bipu1417/Blogging-Website?tab=readme-ov-file#demo-'
  }
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article className="portfolio__item">
                <div className='portfolio__item-image'>
                 <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item_cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio