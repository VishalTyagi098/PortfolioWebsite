import React from 'react'

function SkillsCard(props) {
  return (
    <div>
      <div className="flex justify-center items-center rounded bg-[#3b2d48] text-[#a686c4] py-1 px-4 m-2">
        {props.title}
      </div>
    </div>
  )
}

export default SkillsCard