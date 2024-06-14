import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'


const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >

<motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.headerCircle}
        alt="header_profile_circle"
        className="header__circle"
      />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.profile}
        alt="header_profile_image"
        className="header__profile"
      />
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-thoughts"
    >
      <motion.img
        src={images.reactlogo}
        className='thinking__java'
      />

      <motion.img
        src={images.awslogo}
        className='thinking__aws'
      />

      <motion.img
        src={images.javalogo}
        className='thinking__java'
      />

    </motion.div>

  </div>
);
export default AppWrap(Header, 'home')


