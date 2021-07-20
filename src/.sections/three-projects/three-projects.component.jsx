import React from "react";
import { Link } from "react-router-dom";
import ThreeProjectsGrid from "../../.components/three-projects-grid/three-projects-grid.component";

import "./three-projects.styles.scss";

const ThreeProjectsSection = () => {
  return (
    <div className='section-wrapper projects-section-wrapper'>
      <h2 className='section-heading'>My favourite projects</h2>
      <p className='section-description'>I love building interfaces and complex full fledged web apps. Take a look at some of my favourite projects. If you're curious you can also check out all of my projects at Projects page.</p>
      <ThreeProjectsGrid />
      <Link to='/portfolio' className='custom-button'>
        All Projects (10)
      </Link>
    </div>
  );
};

export default ThreeProjectsSection;
