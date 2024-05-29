import React from 'react'
import './Footer.css'
import fgprojectLogo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="fgproject__footer section__padding">
    <div className="fgproject__footer-heading">
      <h1 className="gradient__text">Visit often as content will be added on a daily basis!</h1>
    </div>

    {/* <div className="fgproject__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="fgproject__footer-links">
      <div className="fgproject__footer-links_logo">
        <img src={fgprojectLogo} alt="fgproject_logo" />
        <p> F.G. Project is created by Flavien Gascard</p>
      </div>
      {/* <div className="fgproject__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div> */}
      {/* <div className="fgproject__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="fgproject__footer-links_div">
        <h4>Get in touch</h4>
        <p>Pensacola, Fl</p>
        <p>(828) 707-4825</p>
        <p>flavien.gascard@gmail.com</p>
      </div>
    </div>

    <div className="fgproject__footer-copyright">
      <p>@2021 FGProject. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer
