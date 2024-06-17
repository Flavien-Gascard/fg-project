import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'


const Header = () => (
  <div className="header">

    <div className='profile'>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        animate={{ rotate: [0, 360, -360, 0] }}
        transition={{
          duration: 1,
          ease: 'linear',
        }}
        src={images.headerCircle}
        alt="profile_circle"
        className="profile_circle"
      />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        src={images.profile}
        alt="profile_image"
        className="profile_image"
      />
    </div>

    <div className='logos'>

      <img src={images.reactlogo} alt="React Logo" />

      <img src={images.awslogo} alt="AWS Logo" />

      <img src={images.javalogo} alt="Java Logo" />


    </div>

  </div>
);
export default AppWrap(Header, 'home')


