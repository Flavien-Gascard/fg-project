import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
    <p><a href="#home" />Home</p>
    <p><a href="#whatFGProject" />About F.G Project</p>
    <p><a href="#possibility" />Interests</p>
    <p><a href="#features" />Case Studies</p>
    <p><a href="#blog" />Library</p>
  </>
)





const Navbar = () => {




  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    // Notice the className? It is in BEM (Block Element Modifier) format, a common css convention
    <div className="fgproject__navbar">
      <div className="fgproject__navbar-links">
        <div className="fgproject__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="fgproject__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="fgproject__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>

      <div className="fgproject__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (

          <div className="fgproject__navbar-menu_container scale-up-center">
            <div className="fgproject__navbar-menu_container-links">
              <Menu />
              </div>
              <div className="fgproject__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>

            </div>

          


        )}
      </div>
    </div>

  )
}

export default Navbar;
