import React, { useEffect } from "react";
import ProjectCard from "../project-card/project-card.component";
import "./projects-grid.styles.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { RecoilProjects } from "../../atoms/projects.js";

const ProjectsGrid = ({ filteredState }) => {
  const [projects, setProjects] = useRecoilState(RecoilProjects);

  let projectList = [];

  if (filteredState === "All") {
    projectList = projects.map((project) => <ProjectCard key={project.name} {...project} />);
  } else {
    if (projects.filter((project) => project.framework.includes(filteredState)).length == 0) {
      projectList = (
        <div className="flex">
          <p>Sorry, currently there are no projects built with {filteredState} to show you. 😞</p>
          <p style={{ marginTop: "25px" }}>
            Contact me and I'll explain to you what I did with {filteredState} in more details! 😊
          </p>
        </div>
      );
    } else {
      projectList = projects
        .filter((project) => project.framework.includes(filteredState))
        .map((project) => <ProjectCard key={project.name} {...project} />);
    }
  }

  return <div className="projects-section-container section-container">{projectList}</div>;
};

export default ProjectsGrid;
