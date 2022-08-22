import React from 'react'
import Heading from '../Layout/Heading'
import MegaProjects from './MegaProjects'





function projects() {



  // Props for mega projects
  const mega1={
    number:"01.",
    title: "Mega project 1",
    tech:"React.js",
    description: "This is dummy description for the mega project 1"
  }


  return (
    <div className="flex justify-center h-full ">
      <div className="flex flex-col justify-center items-center w-4/5">
        <div className=" w-full h-full ">
          <MegaProjects {...mega1}/>
        </div>
        
      </div>
    </div>
  )
}

export default projects