import React from 'react';
import './WhatFGProject.css';
import Feature from '../../components/feature/Feature';

const WhatFGProject = () => {
  return (
    <div className="fgproject__whatfgproject section__margin" id="wfgproject">
      <div className="fgproject__whatfgproject-feature">
        <Feature title="What is F.G.Project" text="My learning journey through full stack development." />
      </div>
      <div className="fgproject__whatfgproject-heading">
        <h1 className="gradient__text">Exploring boundaries and developing new skills.</h1>
        <p>Explore F.G. Project</p>
      </div>
      <div className="fgproject__whatfgproject-container">

        <Feature title="Chatbots" text="Have a qeustion? Just want to talk? Chat with fellow explorers!"/>
        <Feature title="Knowledgebase" text="All the tools used in the journey of creating something wonderful."/>
        <Feature title="Education" text="Watch the videos I used for my journey into Full Stack Development."/>
  

      </div>
    </div>
  )
}

export default WhatFGProject
