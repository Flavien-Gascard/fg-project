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
        By combining a deep technical expertise through learning and a passion for open-source collaboration, I constantly strive for innovation while fostering a community that thrives on shared knowledge and collective growth.</p>
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
