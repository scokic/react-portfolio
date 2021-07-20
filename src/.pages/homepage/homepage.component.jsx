import React from "react";
import "./homepage.styles.scss";
import DevToolsSection from "../../.sections/dev-tools/dev-tools.component";
import ThreeProjectsSection from "../../.sections/three-projects/three-projects.component";
import HomepageHeroSection from "../../.sections/homepage-hero/homepage-hero.component";
import ContactSection from "../../.sections/contact-section/contact-section.component";

function Homepage() {
  return (
    <div className='homepage-wrapper'>
      <HomepageHeroSection />
      <DevToolsSection />
      <ThreeProjectsSection />
      <ContactSection />
    </div>
  );
}

export default Homepage;
