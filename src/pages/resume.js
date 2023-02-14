import React from "react";
import resume from "public/resume.png";
import Image from "next/image";

const Resume = () => {
  return (
    <div>
      <Image src={resume} alt="resume"/>
    </div>
  );
};

export default Resume;
