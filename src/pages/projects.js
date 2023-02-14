import React, { useState } from "react";

const Projects = () => {
  const [project, setProject] = useState("")
  const handleChange = (e) => {
    setProject(e.target.value)
  }
  return (
    
    <section>
      <h1>My projects</h1>
      <div>
        <label for="projects">Choose a project:</label>

        <select name="projects" id="projects" onChange={handleChange}>
          <option value="project1">Project 1</option>
          <option value="project2">Project 2</option>
          <option value="project3">Project 3</option>
          <option value="project4">Project 4</option>
        </select>
        <div>
          {project}
        </div>
      </div>
    </section>
  );
};

export default Projects;
