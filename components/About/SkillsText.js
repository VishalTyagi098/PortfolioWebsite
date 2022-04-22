import React from "react";
import Heading from "../Layout/Heading";
import SkillsCard from "./SkillsCard";

function SkillsText() {
  return (

      <div className="">
        <div className="text-3xl text-white my-3">
          Skills
        </div>
        <div className="grid grid-cols-3 gap-4 text-[#8993b0] my-3">
          <SkillsCard title="HTML"/>
          <SkillsCard title="CSS"/>
          <SkillsCard title="JS"/>
          <SkillsCard title="React.js"/>
          <SkillsCard title="Next.js"/>
          <SkillsCard title="TailwindCSS"/>
        </div>
        
      </div>

  );
}

export default SkillsText;
