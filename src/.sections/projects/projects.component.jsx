import React, { useState, useEffect } from "react";
import ProjectsFilter from "../../.components/projects-filter/projects-filter.component";
import ProjectsGrid from "../../.components/projects-grid/projects-grid.component";
import { Languages } from "../../atoms/languages";
import { useRecoilValue } from "recoil";

import "./projects.styles.scss";

const ProjectsSection = () => {
  const [filteredState, setFilteredState] = useState("All");
  const languages = useRecoilValue(Languages);

  function setFilter(lang) {
    setFilteredState(lang);
  }

  return (
    <div className="section-wrapper projects-section-wrapper">
      <h2 className="section-heading">My work</h2>
      <p className="section-description">
        I love building interfaces and complex full fledged web apps. Take a
        look at some of my favourite projects. If you're curious you can also
        check out all of my projects at Projects page.
      </p>
      <ProjectsFilter setFilter={setFilter} />
      <ProjectsGrid filteredState={filteredState} />
    </div>
  );
};

export default ProjectsSection;
