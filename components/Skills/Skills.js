import React from 'react'
import SkillsCard from './SkillsCard'

function Skills() {
  return (
    <div className='border-2 border-red-500 flex justify-center items-center'>
      <SkillsCard/>
      <SkillsCard/>
      <SkillsCard/>
    </div>
  )
}

export default Skills