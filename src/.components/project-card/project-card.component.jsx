import React, { useState, useEffect } from "react";
import Button from "../button/button.component";
import "./project-card.styles.scss";

const ProjectCard = (props) => {
  const [projectFramework, setProjectFramework] = useState("");

  let frameworkImageLinks = [
    { name: "React", url: "/images/tools/react-logo.svg" },
    { name: "JavaScript", url: "/images/tools/javascript-logo.svg" },
    { name: "Svelte", url: "/images/tools/svelte-logo.svg" },
    { name: "Vue", url: "/images/tools/vue-logo.svg" },
    { name: "WordPress", url: "/images/tools/wordpress-logo.png" },
  ];

  let findFramework = () => {
    frameworkImageLinks.forEach((framework) =>
      props.framework[0] === framework.name
        ? setProjectFramework(framework.url)
        : ""
    );
  };

  useEffect(() => {
    findFramework();
  }, []);

  return (
    <div className="project-card-wrapper">
      <a className="project-screenshot" href={props.demoLink} target="_blank">
        <img src={props.image} alt={props.name} />
      </a>
      <div className="card-description">
        <div className="project-name-section">
          <div className="framework-grid">
            <img className="framework-icon" src={projectFramework} />
            <span>{props.framework[0]}</span>
          </div>
          <span className="project-name">{props.name}</span>
        </div>
        <div className="project-description">
          <p>{props.description}</p>
        </div>

        {// render buttons on card
        // render "website" button if it is wordpress website
        // render "demo" and "github" if it is not wordpress website

        props.framework[0] === "WordPress" ? (
          <div className="project-links">
            <Button blank text="Visit Website" url={props.demoLink} />
          </div>
        ) : props.githubLink === "" ? (
          <div className="project-links">
            <Button blank text="Open App" url={props.demoLink} />
          </div>
        ) : (
          <div className="project-links">
            <Button blank text="Demo" url={props.demoLink} />{" "}
            <Button transparent blank text="GitHub" url={props.githubLink} />{" "}
          </div>
        )}
      </div>

      {// render in progress ribbon if project is in progress
      props.progress === "in-progress" ? (
        <div className="in-progress-ribbon">
          <span>IN PROGRESS</span>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectCard;
