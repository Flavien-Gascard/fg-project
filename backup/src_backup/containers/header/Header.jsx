import React from 'react'
import './Header.css'
import logo from '../../assets/header-logo.png'

const Header = () => {
  return (
    <div className="fgproject__header section__padding" id="home">
      <div className="fgproject__header-content">
        <h1 className="gradient__text">
          F.G.Project : My Full Stack Journey
        </h1>
        <p>
        My name is Flavien Gascard and my tech journey began with a keen eye for detail as a QA Analyst. By ensuring software met rigorous quality standards around data, the desire to build, not just test, fueled my transition to Ab-Initio development. Here, I learned to craft applications from scratch, gaining a deep understanding of core programming and database concepts. This hunger for knowledge and modernizing monolithic legacy applications only grew, leading me to full-stack development. Now, I leverage the power of React for dynamic front-ends, couple it with Spring Boot's robust backend capabilities, and utilize AWS for scalable infrastructure. My passion extends beyond technical mastery; I actively seek out collaboration with peers, fostering a continuous learning environment where we push each other to excel, while having fun in the process.</p>
        {/* <div className="fgproject__header-content__input">

          <input type='email' placeholder='Your Email Address'>

          </input>
          <button type='button'>Get Started</button>
        </div> */}

      </div>

      <div className="fgproject__header-image">
        <img src={logo} alt="logo" />
      </div>

    </div>
  )
}

export default Header
