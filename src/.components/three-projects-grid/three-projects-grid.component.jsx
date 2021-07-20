import React from "react";
import ProjectCard from "../project-card/project-card.component";
import "./three-projects-grid.styles.scss";

const ProjectsGrid = () => {
  const projects = [
    {
      name: "Spending Insider App",
      framework: "React",
      demoLink: "https://spending-insider.web.app/",
      githubLink: "",
      description: "I'm currently building a personal finance tracker app with React and Firebase.",
      image: "/images/project-screenshots/Spending Insider.png",
      progress: "in-progress",
    },
    {
      name: "Simple Todo App",
      framework: "React",
      demoLink: "https://scokic.github.io/simpletodoapp/",
      githubLink: "https://github.com/scokic/simpletodoapp",
      description: "Complete CRUD functionality with some beautiful CSS that inspires users to create new tasks.",
      image: "/images/project-screenshots/Simple Todo App.png",
    },
    {
      name: "Personal Portfolio",
      framework: "JavaScript",
      demoLink: "https://strahinjacokic.com/",
      githubLink: "https://github.com/scokic/personal-portfolio-website/",
      description: "I designed and created first version of my personal portfolio with vanilla HTML, CSS, and JS.",
      image: "/images/project-screenshots/Personal Portfolio v1.png",
    },
  ];

  const projectList = projects.map((project) => <ProjectCard key={project.name} {...project} />);

  return <div className='projects-section-container section-container'>{projectList}</div>;
};

export default ProjectsGrid;
