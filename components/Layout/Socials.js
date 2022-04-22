import React from 'react'
import classes from './Socials.module.css'
import github from '../../public/icons/github.svg'
import instagram from '../../public/icons/instagram.svg'
import linkedin from '../../public/icons/linkedin.svg'

// frame motion
import {motion} from 'framer-motion';

const variants={
  hidden:{
    opacity:0,
    x:-15
  },
  visible:{
    opacity:1,
    x:0
  }
}


function Socials() {
  return (
    <div className='inline-flex flex-col justify-end fixed left-[40px] bottom-0 w-10 h-1/2'>

      <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ease:"easeInOut",  duration: 0.3 }}
      className="flex justify-center items-center w-full h-6 my-3">
        <a href="/"><img  src={github.src} alt="" className={classes.img}/></a>       
      </motion.div>

      <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ease:"easeInOut", delay:0.1, duration: 0.3}}
      className="flex justify-center items-center w-full h-6 my-3">
        <a href="/"><img  src={instagram.src} alt="" className={classes.img}/></a>       
      </motion.div>

      <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ease:"easeInOut", delay:0.2, duration: 0.3 }}
      className="flex justify-center items-center w-full h-6 my-3">
        <a href="/"><img  src={linkedin.src} alt="" className={classes.img}/></a>       
      </motion.div>

      <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ease:"easeInOut", delay:0.3, duration: 0.3 }}
      className={classes.vertical}></motion.div>
    </div>
  )
}

export default Socials