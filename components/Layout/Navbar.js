import React from 'react'
import Link from 'next/link'
import classes from './Navbar.module.css'

import {motion} from 'framer-motion';

const variants={
  hidden:{
    opacity:0,
    y:-15
  },
  visible:{
    opacity:1,
    y:0
  }
}

function Navbar() {
  return (
    <div className='flex justify-center h-[10vh] bg-[#020c1b] text-[#9fa8c6]'>
      <nav className='flex justify-center w-11/12'>
        <ul className='flex justify-end items-center border border-blue-700 w-full'>
          <li className='mr-auto'><Link href="/">Logo</Link></li>
          <motion.li
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ease:"easeInOut",  duration: 0.3 }}
          className='relative'><span className={classes.link}><Link href="/about">About</Link></span></motion.li>

          <motion.li
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ease:"easeInOut", delay:0.1, duration: 0.3}}
          className='relative'><span className={classes.link}><Link href="/skills">Skills</Link></span></motion.li>
          
          <motion.li
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ease:"easeInOut", delay:0.2, duration: 0.3 }}
          className='relative'><span className={classes.link}><Link href="/projects">Projects</Link></span></motion.li>
          
          <motion.li
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ease:"easeInOut", delay:0.3, duration: 0.3 }}
          className='mx-[10px]'><Link href="/contact"><button className='border border-[#ab24f7] rounded p-2 hover:bg-[#2d0b40]'>Resume</button></Link></motion.li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar