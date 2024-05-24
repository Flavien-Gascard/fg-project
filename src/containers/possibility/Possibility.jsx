import React from 'react'
import './Possibility.css'
import possibilityImage from "../../assets/computer-logo.jpg"

const Possibility = () => {
  return (
    <div className="fgproject__possibility section__padding" id="possibility">
      <div className="fgproject__possibility-image">

        <img src={possibilityImage} alt="Possibility"/>
      </div>

      <div className="fgproject__possibility-content">
        <h4>Get Started</h4>
        <h1 className="gradient__text">You are not alone. I have had many experiences I would like to share!</h1>
        <p>Through trial and error I have been looking for work and found it very daunting. I want to document my experiences so I may share them with you!</p>
      
      <h4>Request help and let's get started!</h4>
      
      </div>
    </div>
  )
}

export default Possibility
