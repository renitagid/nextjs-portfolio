import React from "react";
import resume from "public/resume.png";
import Image from "next/image";

const Resume = () => {
  return (
    <div className="border-2 border-black mt-12 mx-2 text-center text-sm bg-gradient-to-br shadow-gray-700 shadow-md from-orange-300 via-amber-200 to-rose-300 dark:from-orange-700 dark:via-rose-800 dark:to-amber-600 w-11/12 rounded-xl pb-3">
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
