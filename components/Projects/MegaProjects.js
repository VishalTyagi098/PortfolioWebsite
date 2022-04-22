import React,{useEffect} from "react";
// importing images
import projects1 from '../../public/images/projects1.png'
import projects2 from '../../public/images/projects2.png'
import projects3 from '../../public/images/projects3.png'
import projects4 from '../../public/images/projects4.png'

// framer motion & react-intersection-observer
// useViewportScroll & useTransform for parllax
import {useAnimation,motion, useViewportScroll, useTransform} from "framer-motion"
import { useInView } from "react-intersection-observer";
import ProjectImg from "./ProjectImg";
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

function MegaProjects(props) {
  // on scroll animation effect using useAnimation (framermotion) and useInView (react-intersection-observer)
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <div className="flex justify-center items-center relative h-full">
      <div className="w-2/4">

        <motion.div className="text-2xl font-bold absolute top-0 left-0"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variantsLeft}
          transition={{ease:"easeInOut",  duration: 1 }}
        >{props.number}</motion.div>

        <motion.div className="flex flex-col justify-center items-start pl-3"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variantsDown}
          transition={{ease:"easeInOut",delay:1,  duration:1 }}
        >
          <div className="text-5xl text-[#ab24f7] font-black my-4">
            {props.title}
          </div>
          <div className="text-3xl font-medium text-[#8993b0] my-2">{props.tech}</div>
          <div className="text-2xl text-[#8993b0] my-3">{props.description}</div>
        </motion.div>
      </div>

      {/* Animation with parallax effect */}
      <div className="w-2/4">
        <div className="grid grid-cols-2">
          <ProjectImg img={projects1.src} speed={-2}/>
          <ProjectImg img={projects2.src} speed={-1}/>
          <ProjectImg img={projects3.src} speed={-1}/>
          <ProjectImg img={projects4.src} speed={-0.5}/>
        </div>
      </div>
    </div>
  );
}

export default MegaProjects;
