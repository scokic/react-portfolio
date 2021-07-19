import React, { useState, useEffect } from "react";
import Button from "../button/button.component";
import "./carousel-card.styles.scss";

const CarouselCard = (props) => {
  const [carouselFramework, setCarouselFramework] = useState("");

  let frameworkImageLinks = [
    { name: "React", url: "/images/tools/react-logo.svg" },
    { name: "JavaScript", url: "/images/tools/javascript-logo.svg" },
    { name: "Svelte", url: "/images/tools/svelte-logo.svg" },
    { name: "Vue", url: "/images/tools/vue-logo.svg" },
  ];

  let findFramework = () => {
    frameworkImageLinks.forEach((framework) => (props.framework === framework.name ? setCarouselFramework(framework.url) : ""));
  };

  useEffect(() => {
    findFramework();
  }, []);

  return (
    <div className='carousel-card-wrapper'>
      <a className='carousel-screenshot' href={props.demoLink} target='_blank'>
        <img src={props.image} />
      </a>
      <div className='card-description'>
        <div className='carousel-name-section'>
          <div className='framework-grid'>
            <img className='framework-icon' src={carouselFramework} />
            <span>{props.framework}</span>
          </div>
          <span className='carousel-name'>{props.name}</span>
        </div>
        <div className='carousel-description'>
          <p>{props.description}</p>
        </div>
        <div className='carousel-links'>
          <Button blank text='Demo' url={props.demoLink} />
          <Button transparent blank text='GitHub' url={props.githubLink} />
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
