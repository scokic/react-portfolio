import React from "react";
import "./portfolio.styles.scss";
import ProjectsSection from "../../.sections/projects/projects.component";
import ContactSection from "../../.sections/contact-section/contact-section.component";

function Portfolio() {
  return (
    <div className='portfolio-wrapper'>
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default Portfolio;
