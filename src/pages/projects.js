import React, { useState } from "react";
import Image from "next/image";
import projectData from "../data/projectData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [project, setProject] = useState(projectData[3]);
  const [button, setButton] = useState("rounded-xl");
  const [menu, setMenu] = useState("hidden -z-20");
  const handleClick = (id) => {
    setProject(projectData[id - 1]);
    handleMenu();
  };

  const handleMenu = () => {
    if (menu === "hidden -z-20") {
      setMenu("visible");
      setButton("rounded-t-xl");
    } else if (menu === "visible") {
      setMenu("hidden -z-20");
      setButton("rounded-xl");
    }
  };
  console.log(project);
  return (
    <section className="mt-6 flex flex-col items-center md:ml-4 md:flex-row md:items-start">
      <div
        className="z-10 flex w-11/12 flex-col  dark:text-black md:mr-4 md:w-[300px]
      
      "
      >
        <button
          className={`mt-1 ${button}  bg-gradient-to-r from-orange-400 via-amber-200 to-rose-300 p-1 shadow-md shadow-gray-600 
          dark:shadow-black md:w-60 md:rounded-t-lg md:rounded-b-none md:from-orange-300 md:via-orange-200
          md:to-orange-300
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
        className="align-center mx-0 flex w-11/12 flex-col items-center pt-2 md:flex-row md:flex-wrap md:items-start md:justify-start"
      >
        <div id="info column" className="order-1 md:mx-3 md:w-[300px]">
          <div className="text-center font-header text-xl">
            {project?.title}
          </div>
          <div className="flex justify-evenly py-2">
            <a href={project.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} /> Github Repo
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faStar} /> Deployed Project
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
        <div
          id="image-container"
          className="order-2 my-3  w-[300px] rounded-xl bg-gradient-to-br from-orange-600 via-rose-500 to-amber-400 shadow-md shadow-gray-700 dark:shadow-black md:order-3 md:mt-0 md:mr-20"
        >
          <div className="m-0.5  w-[296px] overflow-hidden rounded-xl bg-white">
            {project.video ? (
              <iframe
                src={project.video}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                title="Didjadoo.webm"
              />
            ) : project.image ? (
              <Image
                src={project.image}
                alt="project preview"
                className="h-[296px] rounded-xl object-cover"
              />
            ) : null}
          </div>
        </div>
        <div className="order-3 w-[300px] whitespace-pre-line px-3 pb-5 text-justify text-sm md:w-[100%] md:pt-4">
          <p className="font-semibold text-md pb-1">Description:</p>
          {project?.description}
        </div>
      </div>
    </section>
  );
};

export default Projects;
