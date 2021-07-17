import React, { useState, useEffect } from "react";
import Button from "../button/button.component";
import "./project-card.styles.scss";

const ProjectCard = (props) => {
  const [projectFramework, setProjectFramework] = useState("");

  let frameworkImageLinks = [
    { name: "react", url: "/images/tools/react-logo.svg" },
    { name: "javascript", url: "/images/tools/javascript-logo.svg" },
    { name: "svelte", url: "/images/tools/svelte-logo.svg" },
    { name: "vue", url: "/images/tools/vue-logo.svg" },
  ];

  let findFramework = () => {
    frameworkImageLinks.forEach((framework) => (props.framework === framework.name ? setProjectFramework(framework.url) : ""));
  };

  useEffect(() => {
    findFramework();
  }, []);

  return (
    <div className='project-card-wrapper'>
      <a className='project-screenshot' href={props.demoLink} target='_blank'>
        <img src={props.image} />
      </a>
      <div className='card-description'>
        <div className='project-name-section'>
          <img className='language-icon' src={projectFramework} />
          <span className='project-name'>{props.name}</span>
        </div>
        <div className='project-description'>
          <p>{props.description}</p>
        </div>
        <div className='project-links'>
          <Button blank text='Demo' url={props.demoLink} />
          <Button transparent blank text='GitHub' url={props.githubLink} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
