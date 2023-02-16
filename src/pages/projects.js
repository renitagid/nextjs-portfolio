import React, { useState } from "react";
import Image from "next/image";
import projectData from "../data/projectData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [project, setProject] = useState(projectData[0]);
  const [menu, setMenu] = useState("collapse");
  const handleClick = (id) => {
    setProject(projectData[id - 1]);
    handleMenu();
  };

  const handleMenu = () => {
    if (menu === "collapse") {
      setMenu("visible");
    } else if (menu === "visible") {
      setMenu("collapse");
    }
    console.log(menu);
  };
  console.log(project);
  return (
    <section className="m-2">
      <h1 className="font-header text-xl">My projects:</h1>
      <div className="fixed right-1 left-1 z-10 flex flex-col">
        <button
          className="rounded-t-md mt-1 bg-gradient-to-r from-orange-400 via-amber-200 to-rose-300 p-1 shadow-md shadow-gray-600"
          onClick={handleMenu}
        >
          Choose a project:
        </button>

        <div className={`flex flex-col ${menu} shadow-md shadow-gray-600 `}>
          {projectData?.map((project, index) => {
            return (
              <button key={index} onClick={() => handleClick(project.id)}>
                <div className="border-2 bg-white px-1">{project.title}</div>
              </button>
            );
          })}
        </div>
      </div>
      <div className=" fixed right-0 left-0 top-28">
        {/* <div className="flex justify-evenly">
          {projectData.map((project, index) => {
            return (
              <div key={index} className="">
                <Image src={project.image} alt="pic" className="w-16" />
              </div>
            );
          })}
        </div> */}

        <div className="font-header text-center text-xl">{project?.title}</div>
        <div className="flex justify-evenly py-2">
          <a href={project.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/> Github Repo</a>
          <a href={project.demo} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faStar}/> Project Demo</a>
        </div>
        {project.problem && <div className="mx-6 whitespace-pre-line text-xs mt-3">The problem: {project.problem}</div>}
        {project.solution && <div className="mx-6 whitespace-pre-line text-xs mt-3">The solution: {project.solution}</div>}
        <div className="bg-gradient-to-br from-orange-600 via-rose-500 to-amber-400 rounded-xl w-[300px] h-[300px] mt-3 mx-10 shadow-md shadow-gray-700 dark:shadow-black">
          <div className="w-[296px] h-[296px] bg-white m-0.5 relative top-0.5 rounded-xl object-cover">
          {project?.image && (
            <Image src={project.image} alt="project preview"  className="rounded-xl h-[296px] object-cover"/>
          )}
          </div>

        <div className="mx-3 whitespace-pre-line text-xs mt-3">{project?.description}</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
