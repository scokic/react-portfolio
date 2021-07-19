import React from "react";
import "./portfolio.styles.scss";
import ProjectsSection from "../../.sections/projects/projects.component";
import Contact from "../../.sections/contact/contact.component";

function Portfolio() {
  return (
    <div className='portfolio-wrapper'>
      <ProjectsSection />
      <Contact />
    </div>
  );
}

export default Portfolio;
