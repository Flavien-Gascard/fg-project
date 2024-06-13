import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import {AppWrap} from '../../wrapper'


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.headerCircle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {/* {[images.javascriptlogo, images.reactlogo, images.awslogo].map((circle, index) => ( */}
        <motion.div 
        className="circle-cmp app__flex" 
        // key={`circle-${index}`}
        whileTap={{ scale: 3, rotate: 360, zIndex:1}}
        transition={{ duration: 0.5 }}
        // whileTap={{ scale: 0.8 }}    // Scale down to 0.8 on tap
        >
          <img src={images.javalogo} alt="profile_bg" />
        </motion.div>
      {/* ))} */}
      <motion.div 
        className="circle-cmp app__flex" 
        // key={`circle-${index}`}
        whileTap={{ scale: 3, rotate: 360, zIndex:1}}
        transition={{ duration: 0.5 }}
        >
          <img src={images.reactlogo} alt="profile_bg" />
        </motion.div>

        <motion.div 
        className="circle-cmp app__flex" 
        // key={`circle-${index}`}
        whileTap={{ scale: 3, rotate: 360, zIndex:1}}
        transition={{ duration: 0.5 }}
        >
          <img src={images.awslogo} alt="profile_bg" />
        </motion.div>




    </motion.div>
  </div>
);
export default AppWrap(Header, 'home')


