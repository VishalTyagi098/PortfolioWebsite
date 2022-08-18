import React from 'react'
import Button from '../Layout/Button'

// framer motion
import {motion} from "framer-motion"
// framer motion variables
const variants={
  hidden:{
    opacity:0,
    y:15
  },
  visible:{
    opacity:1,
    y:0
  }
}

function Intro() {
  return (
    <div className='flex justify-center h-[90vh]'>
      <div className=' flex flex-col justify-center w-4/5'>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ease:"easeInOut",  duration: 0.3 }}
        className='text-7xl my-1 font-black'>
          Hi,
        </motion.div>

        <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ease:"easeInOut", delay:0.1, duration: 0.3}}
        className='text-7xl my-1 font-black'>  
          I'm <span className='text-[#ab24f7]'>Vishal Tyagi</span>, 
        </motion.div>

        <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ease:"easeInOut", delay:0.2, duration: 0.3 }}
        className='text-7xl my-1 font-black'>
          Frontend Web developer.
        </motion.div>

        <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ease:"easeInOut", delay:0.3, duration: 0.3 }}
        className='text-lg text-[#8993b0] my-3'>
          I enjoy creating reliable, scalable frontend solutions that provide excellent user experiences.
        </motion.div>

        <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ease:"easeInOut", delay:0.3, duration: 0.3 }}
        className="mt-6">
        <Button title="CONTACT ME !"/>
        </motion.div>
      </div>
    </div>
  )
}

export default Intro