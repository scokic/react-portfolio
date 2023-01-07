import React, { useState } from "react";
import ProjectsFilter from "../../.components/projects-filter/projects-filter.component";
import ProjectsGrid from "../../.components/projects-grid/projects-grid.component";

import "./projects.styles.scss";

const ProjectsSection = () => {
  const [filteredState, setFilteredState] = useState("All");

  function setFilter(lang) {
    setFilteredState(lang);
  }

  return (
    <div className="section-wrapper projects-section-wrapper">
      <h2 className="section-heading">My work</h2>
      <p className="section-description">
        I love building interfaces and complex full fledged web apps. Take a look at some of my favourite projects. If
        you're curious you can also check out all of my projects at Projects page.
      </p>
      <ProjectsFilter setFilter={setFilter} />
      <ProjectsGrid filteredState={filteredState} />
    </div>
  );
};

export default ProjectsSection;
