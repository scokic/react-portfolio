import React from "react";
import ProjectCard from "../project-card/project-card.component";
import "./projects-grid.styles.scss";

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
    {
      name: "Marvel Heroes Cards",
      framework: "React",
      demoLink: "https://marvel-heroes-cards.netlify.app/",
      githubLink: "https://github.com/scokic/marvel-heroes",
      description: "Did you know that Marvel has open API? Check out some of your favourite Marvel Heroes!",
      image: "/images/project-screenshots/Marvel Heroes Cards.png",
    },
    {
      name: "Darts Score Counter",
      framework: "Svelte",
      demoLink: "https://darts-counter.netlify.app/",
      githubLink: "https://github.com/scokic/svelte-darts-score-counter",
      description: "I love playing darts for fun, so I decided to make a counter for two players playing a game of 501 with Svelte. Give it a go!",
      image: "/images/project-screenshots/Darts Score Counter.png",
    },
    {
      name: "Kanban Board",
      framework: "JavaScript",
      demoLink: "https://strahinjacokic.com/components/Kanban-Board/index.html",
      githubLink: "https://github.com/scokic/personal-portfolio-website/tree/main/components/Kanban-Board",
      description: "I designad and coded UI for kanban task management app for users to be able to create new stages and tasks.",
      image: "/images/project-screenshots/Kanban Board.png",
    },
    {
      name: "Two Player Dice Game",
      framework: "JavaScript",
      demoLink: "https://strahinjacokic.com/components/Two%20Player%20Dice%20Game/index.html",
      githubLink: "https://github.com/scokic/personal-portfolio-website/tree/main/components/Two%20Player%20Dice%20Game",
      description: "During JavaScript course I made two player game of dices. Winner is the one who reaches 100 points first. Give it a try!",
      image: "/images/project-screenshots/Two Player Dice Game.png",
    },
    {
      name: "Medana",
      framework: "Wordpress",
      demoLink: "https://www.medana.rs",
      githubLink: "",
      description: "Ecommerce website built for small honey producer. The website is used daily and generates great recurring monthly for the owner.",
      image: "/images/project-screenshots/Medana.png",
    },
    {
      name: "Pobedimo Astmu",
      framework: "Wordpress",
      demoLink: "https://www.pobedimoastmu.rs",
      githubLink: "",
      description: "Presentation website with blog built for local NGO which mission is to spread the knowledge and support for people suffering from atopic deseases.",
      image: "/images/project-screenshots/Pobedimo Astmu.png",
    },
    {
      name: "Digitalna Kancelarija",
      framework: "Wordpress",
      githubLink: "",
      demoLink: "https://www.digitalnakancelarija.rs",
      description: "Presentational website which showcases my WordPress projects in form of a small digital transformation and marketing agency.",
      image: "/images/project-screenshots/Digitalna Kancelarija.png",
    },
  ];

  const projectList = projects.map((project) => <ProjectCard key={project.name} {...project} />);

  return <div className='projects-section-container section-container'>{projectList}</div>;
};

export default ProjectsGrid;
