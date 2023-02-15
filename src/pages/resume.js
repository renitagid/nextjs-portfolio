import React from "react";
import resume from "public/resume.png";
import Image from "next/image";

const Resume = () => {
  return (
    <div className="border-2 border-black mt-12 mx-2 text-center text-sm bg-gradient-to-br shadow-gray-700 shadow-md from-red-300 via-yellow-100 to-teal-200 w-11/12 rounded-xl pb-3 font-serif">
    <div>
    <a href="/renita-gidlund-resume.pdf" target="_blank">Download as PDF</a>
    </div>
    <div>
      <Image src={resume} alt="resume"/>
    </div>
    </div>
  );
};

export default Resume;
