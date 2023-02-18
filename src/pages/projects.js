import React, { useState } from "react";
import Image from "next/image";
import projectData from "../data/projectData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [project, setProject] = useState(projectData[0]);
  const [button,  setButton] = useState("md:rounded-t-xl rounded-xl")
  const [menu, setMenu] = useState("hidden -z-20");
  const handleClick = (id) => {
    setProject(projectData[id - 1]);
    handleMenu();
  };

  const handleMenu = () => {
    if (menu === "hidden -z-20") {
      setMenu("visible");
      setButton("md:rounded-t-xl rounded-t-xl")
    } else if (menu === "visible") {
      setMenu("hidden -z-20");
      setButton("md:rounded-t-xl rounded-xl")
    }
    console.log(menu);
  };
  console.log(project);
  return (
    <section className="m-2 mx-4 md:mx-0 w-full md:flex ">
      <h1 className="font-header text-xl md:invisible">My projects:&nbsp;</h1>
      <div
        className="z-10 flex flex-col dark:text-black md:mr-4 w-11/12 md:w-[300px]
      
      "
      >
        <button
          className={`mt-1 ${button} bg-gradient-to-r from-orange-400 via-amber-200 to-rose-300 p-1 shadow-md shadow-gray-600 
          md:w-60 md:from-orange-300 md:via-orange-200 md:to-orange-300
          `}
          onClick={handleMenu}
        >
          Choose a project:
        </button>

        <div
          className={`flex flex-col md:z-10 md:block md:w-60 ${menu} overflow-hidden rounded-b-md shadow-md shadow-gray-600 dark:shadow-black `}
        >
          {projectData?.map((project, index) => {
            return (
              <button key={index} onClick={() => handleClick(project.id)}>
                <div className="border-2 bg-white px-1 md:w-60 md:text-sm">
                  {project.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="all-project-info"
        className="mx-0 w-11/12 pt-2 flex flex-col md:flex-row justify-center"
      >
        <div id="info column" className="order-1 md:w-[300px]">
          <div className="text-center font-header text-xl">
            {project?.title}
          </div>
          <div className="flex justify-evenly py-2">
            <a href={project.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Github Repo
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faStar} /> Project Demo
            </a>
          </div>
          {project.problem && (
            <div className="mt-3 whitespace-pre-line">
              <span className="font-semibold">The problem:</span>{" "}
              {project.problem}
            </div>
          )}
          {project.solution && (
            <div className="mt-3 whitespace-pre-line">
              <span className="font-semibold">The solution:</span>{" "}
              {project.solution}
            </div>
          )}
        </div>
        <div className="order-3 md:order-2 mx-3 mt-3 w-[300px] whitespace-pre-line pb-5 text-sm">
          {project?.description}
        </div>
        <div id="image-container" className="order-2 md:order-3 mx-4 mt-3 h-[300px] w-[300px] rounded-xl bg-gradient-to-br from-orange-600 via-rose-500 to-amber-400 shadow-md shadow-gray-700 dark:shadow-black md:mt-0 md:ml-5">
          <div className="relative top-0.5 m-0.5 h-[296px] w-[296px] rounded-xl bg-white object-cover">
            {project?.image && (
              <Image
                src={project.image}
                alt="project preview"
                className="h-[296px] rounded-xl object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
