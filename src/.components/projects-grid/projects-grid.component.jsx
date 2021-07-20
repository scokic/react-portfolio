import React from "react";
import ProjectCard from "../project-card/project-card.component";
import "./projects-grid.styles.scss";
import { useRecoilState } from "recoil";
import { RecoilProjects } from "../../atoms/projects.js";

const ProjectsGrid = () => {
  const [projects, setProjects] = useRecoilState(RecoilProjects);

  const projectList = projects.map((project) => <ProjectCard key={project.name} {...project} />);

  return <div className='projects-section-container section-container'>{projectList}</div>;
};

export default ProjectsGrid;
