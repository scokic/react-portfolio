import React from "react";
import "./homepage.styles.scss";
import HeroSection from "../../.sections/hero/hero.component";
import DevToolsSection from "../../.sections/dev-tools/dev-tools.component";
import ProjectsSection from "../../.sections/projects/projects.component";
import Contact from "../../.sections/contact/contact.component";

function Homepage() {
  return (
    <div className='homepage-wrapper'>
      <HeroSection />
      <DevToolsSection />
      <ProjectsSection />
      <Contact />
    </div>
  );
}

export default Homepage;
