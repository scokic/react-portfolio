import React from "react";
import ProjectCard from "../project-card/project-card.component";
import "./three-projects-grid.styles.scss";
import { useRecoilState } from "recoil";
import { RecoilProjects } from "../../atoms/projects.js";

const ProjectsGrid = () => {
  const [projects, setProjects] = useRecoilState(RecoilProjects);

  const firstThreeProjects = projects.filter((element, index) => index < 3);

  const projectList = firstThreeProjects.map((project) => <ProjectCard key={project.name} {...project} />);

  return <div className='three-projects-section-wrapper section-wrapper'>{projectList}</div>;
};

export default ProjectsGrid;
