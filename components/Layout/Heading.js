import React,{ useEffect } from 'react'
import classes from './Heading.module.css'

// framer motion & react-intersection-observer
import {useAnimation,motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
// framer motion variables
const variantsLeft={
  hidden:{
    opacity:0,
    x:-100
  },
  visible:{
    opacity:1,
    x:0
  }
}
const variantsRight={
  hidden:{
    opacity:0,
    x:100
  },
  visible:{
    opacity:1,
    x:0
  }
}
const variantsDown={
  hidden:{
    opacity:0,
    y:15
  },
  visible:{
    opacity:1,
    y:0
  }
}

function Heading(props) {
  // on scroll animation effect using useAnimation (framermotion) and useInView (react-intersection-observer)
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);



  return (
    <div className='flex flex-col w-full'>
      <div className="flex justify-center text-4xl text-[#ab24f7] font-black w-full">
        <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variantsLeft}
        transition={{ease:"easeInOut",  duration: 1 }}
        > &lt; </motion.span>

        <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variantsDown}
        transition={{ease:"easeInOut", delay:1,  duration: 1 }}
        >&nbsp;{props.title}&nbsp;</motion.span>

        <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variantsRight}
        transition={{ease:"easeInOut",  duration: 1 }}
        > /&gt;</motion.span>
      </div>
      {/* <div className={classes.horizontal}></div>      */}
    </div>
  )
}

export default Heading  