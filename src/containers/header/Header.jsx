import React from 'react'
import './Header.css'
import logo from '../../assets/header-logo.jpg'

const Header = () => {
  return (
    <div className="fgproject__header section__padding" id="home">
      <div className="fgproject__header-content">
        <h1 className="gradient__text">
          F.G.Project : My Full Stack Journey
        </h1>
        <p>
          I love to code because it allows me to create innovative solutions and bring ideas to life, while collaborating with people brings diverse perspectives and enhances the creativity and efficiency of our projects. Together, we transform complex challenges into meaningful results.</p>
        <div className="fgproject__header-content__input">

          <input type='email' placeholder='Your Email Address'>

          </input>
          <button type='button'>Get Started</button>
        </div>

      </div>

      <div className="fgproject__header-image">
        <img src={logo} alt="logo" />
      </div>

    </div>
  )
}

export default Header
