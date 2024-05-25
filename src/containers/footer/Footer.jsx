import React from 'react'
import './Footer.css'
import fgprojectLogo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="fgproject__footer section__padding">
    <div className="fgproject__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="fgproject__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="fgproject__footer-links">
      <div className="fgproject__footer-links_logo">
        <img src={fgprojectLogo} alt="fgproject_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="fgproject__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="fgproject__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="fgproject__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="fgproject__footer-copyright">
      <p>@2021 FGProject. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer
