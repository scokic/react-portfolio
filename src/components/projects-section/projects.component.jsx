import React from "react";
import "./projects.styles.scss";
import ProjectCard from "../project-card/project-card.component";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Simple Todo App",
      framework: "react",
      demoLink: "https://scokic.github.io/simpletodoapp/",
      githubLink: "https://github.com/scokic/simpletodoapp",
      description: "Complete CRUD functionality with some beautiful CSS that inspires users to create new tasks.",
      image: "/images/project-screenshots/Simple Todo App.png",
    },
    {
      name: "Personal Portfolio",
      framework: "javascript",
      demoLink: "https://strahinjacokic.com/",
      githubLink: "https://github.com/scokic/personal-portfolio-website/",
      description: "I designed and created first version of my personal portfolio with vanilla HTML, CSS, and JS.",
      image: "/images/project-screenshots/Personal Portfolio v1.png",
    },
    {
      name: "Marvel Heroes Cards",
      framework: "react",
      demoLink: "https://marvel-heroes-cards.netlify.app/",
      githubLink: "https://github.com/scokic/marvel-heroes",
      description: "Did you know that Marvel has open API? Check out some of your favourite Marvel Heroes!",
      image: "/images/project-screenshots/Marvel Heroes Cards.png",
    },
    {
      name: "Kanban Board",
      framework: "javascript",
      demoLink: "https://strahinjacokic.com/components/Kanban-Board/index.html",
      githubLink: "https://github.com/scokic/personal-portfolio-website/tree/main/components/Kanban-Board",
      description: "I designad and coded UI for kanban task management app for users to be able to create new stages and tasks.",
      image: "/images/project-screenshots/Kanban Board.png",
    },
    {
      name: "Two Player Dice Game",
      framework: "javascript",
      demoLink: "https://strahinjacokic.com/components/Two%20Player%20Dice%20Game/index.html",
      githubLink: "https://github.com/scokic/personal-portfolio-website/tree/main/components/Two%20Player%20Dice%20Game",
      description: "During JavaScript course I made two player game of dices. Winner is the one who reaches 100 points first. Give it a try!",
      image: "/images/project-screenshots/Two Player Dice Game.png",
    },
  ];

  const projectList = projects.map((project) => <ProjectCard key={project.name} {...project} />);

  return (
    <div className='section-wrapper'>
      <h2 className='section-heading'>My favourite projects</h2>
      <p className='section-description'>I love building interfaces and complex full fledged web apps. Take a look at some of my favourite projects. If you're curious you can also check out all of my projects at Projects page.</p>
      <div className='projects-section-container section-container'>{projectList}</div>
    </div>
  );
};

export default ProjectsSection;
