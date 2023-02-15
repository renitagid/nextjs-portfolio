import React, { useState } from "react";
import Image from "next/image"
import project1Image from "public/project.png"

const Projects = () => {
  const [project, setProject] = useState("");
  const [projectInfo, setProjectInfo] = useState("");
  const handleChange = (e) => {
    setProject(e.target.value);
  };

  return (
    <section className="font-serif m-2">
      <h1 className="text-xl">My projects</h1>
      <div>
        <label for="projects">Choose a project:</label>

        <select name="projects" id="projects" onChange={handleChange}>
          <option></option>
          <option value="project1">Capstone Project</option>
          <option value="project2">Data Visualization Project</option>
          <option value="project3">Project 3</option>
          <option value="project4">Project 4</option>
        </select>
        {project === "project1" ? (
          <div>Capstone Project
            <Image src={project1Image} alt="project 1 image" />
          </div>
        ) : project === "project2" ? (
          <div>Data Visualization Project</div>
        ) : project === "project3" ? (
          <div>Project information about number 3</div>
        ) :project === "project4" ? (
          <div>Project information about number 4</div>
        ) :null}
      </div>
    </section>
  );
};

export default Projects;
