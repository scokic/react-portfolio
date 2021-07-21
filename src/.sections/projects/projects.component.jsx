import React from "react";
import ProjectsGrid from "../../.components/projects-grid/projects-grid.component";

import "./projects.styles.scss";

const ProjectsSection = () => {
  return (
    <div className='section-wrapper projects-section-wrapper'>
      <h2 className='section-heading'>My work</h2>
      <p className='section-description'>I love building interfaces and complex full fledged web apps. Take a look at some of my favourite projects. If you're curious you can also check out all of my projects at Projects page.</p>
      <ProjectsGrid />
    </div>
  );
};

export default ProjectsSection;
