import React from "react";
import resume from "public/resume.png";
import Image from "next/image";

const Resume = () => {
  return (
    <>
    <div className="border-2 border-black my-1 ml-1 text-center bg-gradient-to-br shadow-gray-700 shadow-md from-red-300 via-yellow-100 to-teal-200 w-40 rounded-lg font-serif">
    <a href="/renita-gidlund-resume.pdf" target="_blank">Download as PDF</a>
    </div>
    <div>
      <Image src={resume} alt="resume"/>
    </div>
    </>
  );
};

export default Resume;
