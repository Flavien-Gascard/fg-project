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
    {/* <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, </p>
            
            <h1 className="head-text">Flavien</h1>
            
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text"> Creator of the</p>
          <p className="p-text">FG Project</p>
        </div>
      </div>
    </motion.div> */}

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
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
        whileHover={{ scale: 3, rotate: 360, zIndex:1}}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.8 }}    // Scale down to 0.8 on tap
        >
          <img src={images.javalogo} alt="profile_bg" />
        </motion.div>
      {/* ))} */}
      <motion.div 
        className="circle-cmp app__flex" 
        // key={`circle-${index}`}
        whileHover={{ scale: 3, rotate: 360, zIndex:1}}
        transition={{ duration: 0.5 }}
        >
          <img src={images.reactlogo} alt="profile_bg" />
        </motion.div>

        <motion.div 
        className="circle-cmp app__flex" 
        // key={`circle-${index}`}
        whileHover={{ scale: 3, rotate: 360, zIndex:1}}
        transition={{ duration: 0.5 }}
        >
          <img src={images.awslogo} alt="profile_bg" />
        </motion.div>




    </motion.div>
  </div>
);
export default AppWrap(Header, 'home')


