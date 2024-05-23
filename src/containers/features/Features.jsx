import React from 'react';
import './Features.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Focus on the skills you have',
    text: 'While they might not have seen you as a full-stack developer yet, your QA background is valuable. You understand the software development lifecycle and how to identify and fix bugs - both crucial skills for full-stack development.'
  },
  {
    title: 'Highlight transferable skills',
    text: 'When applying for future full-stack roles, tailor your resume and cover letter to showcase the transferable skills you have from QA, like problem-solving, analytical thinking, and a deep understanding of software functionality.'
  },
  {
    title: 'Build your full-stack skillset',
    text: 'Consider taking online courses, personal projects, or contributing to open-source projects to build your full-stack development skills. This will demonstrate your passion and initiative.'
  },
  {
    title: 'Network with full-stack developers',
    text: 'Connect with full-stack developers online or in your local area. They can offer valuable insights and potentially even referrals.'
  }
]

const Features = () => {
  return (
    <div className="fgproject__features section__padding" id="features">
      <div className="fgproject__features-heading">

        <h1 className="gradient__text">From a QA background to Full Stack Development</h1>
        <p>Story so far...</p>

      </div>
      <div className="fgproject__features-container">

        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} index={item.title + index} />

        ))}



      </div>
    </div>
  )
}

export default Features
