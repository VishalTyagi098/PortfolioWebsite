import React from "react";
import AboutText from "./AboutText";
import SkillsText from "./SkillsText";
import Heading from "../Layout/Heading";

function About() {
  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div className="grid grid-col-2 gap-4 w-4/5 h-[70vh] ">

        <div className="flex justify-center items-center col-span-2 h-1/3">
          <Heading title="About me" />
        </div>
        <div className="flex justify-center items-center self-stretch h-2/3">
          <AboutText />
        </div>
        <div className="flex justify-center items-center h-2/3">
          <SkillsText />
        </div>

      </div>
    </div>
  );
}

export default About;
