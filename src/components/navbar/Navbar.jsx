import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    // Notice the className? It is in BEM (Block Element Modifier) format, a common css convention
    <div className="fgproject__navbar">
      <div className="fgproject__navbar-links">
        <div className="fgproject__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="fgproject__navbar-links_container">
        <p><a href="#home" />Home</p>
        <p><a href="#whatFGProject" />About F.G Project</p>
        <p><a href="#possibility" />Interests</p>
        <p><a href="#features" />Case Studies</p>
        <p><a href="#blog" />Library</p>
      </div>
    </div>
    <div className ="fgproject__navbar-sign">
<p>Sign In</p>
    <button type='button'>Sign Up</button>

    </div>
    </div>

  )
}

export default Navbar
