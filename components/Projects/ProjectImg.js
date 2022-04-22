import React from 'react'
import {motion, useViewportScroll, useTransform} from "framer-motion"

function Box(props) {
  const { scrollYProgress }=useViewportScroll();
  const yValue=useTransform(
    scrollYProgress,
    [0.3,1],
    [0,200*(props.speed)],
  );
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
      style={{y:yValue}}
    >
      <img src={props.img} alt="" className='h-[500px]'/>
    </motion.div>
  )
}

export default Box