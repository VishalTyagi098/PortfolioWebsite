import React from "react";
import Heading from "../Layout/Heading";

function Contact() {
  return (
    <div className="w-2/4">
      <Heading title="Contact me" />
      <div className="my-4">
        Freelance assignments, particularly ambitious or huge ones, pique my
        attention. Please don't hesitate to utilise the form if you have any
        further requests or questions.
      </div>

      <form action="" className="my-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="border-0 focus:border-b-2 focus:border-[#ab24f7] bg-[#2b2a2b] outline-0 p-3"/>
          <input type="text" placeholder="Email" className="border-0 focus:border-b-2 focus:border-[#ab24f7] bg-[#2b2a2b] outline-0 p-3"/>
          <input type="text" placeholder="Subject" className="col-span-2 border-0 focus:border-b-2 focus:border-[#ab24f7] bg-[#2b2a2b] outline-0 p-3"/>
          <textarea placeholder="Message" rows="6" cols="50" className="col-span-2 border-0 focus:border-b-2 focus:border-[#ab24f7] bg-[#2b2a2b] outline-0 p-3"/>
        </div>
      </form>
    </div>
  );
}

export default Contact;
