import React from 'react';
import './Brand.css';
import { reactlogo, awslogo, javalogo,javascriptLogo, dockerlogo, githublogo, kuberneteslogo } from './imports';

const Brand = () => {
  return (
    <div className="fgproject__brand section__padding">
      <div><img src={ reactlogo } alt="React" /></div>
      <div><img src={ awslogo } alt="AWS" /></div>
      <div><img src={ javalogo } alt="Java" /></div>
      <div><img src={ javascriptLogo } alt="Java" /></div>
      <div><img src={ dockerlogo } alt="Docker" /></div>
      <div><img src={ githublogo } alt="Github" /></div>
      <div><img src={ kuberneteslogo } alt="Github" /></div>

    </div>
  )
}


export default Brand
