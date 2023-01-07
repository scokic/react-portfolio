import React from "react";
import { useRecoilValue } from "recoil";
import Button from "../button/button.component";
import { Languages } from "../../atoms/languages";
import "./projects-filter.styles.scss";

const ProjectsFilter = ({ setFilter }) => {
  const languages = useRecoilValue(Languages);
  const buttons = languages.map((lang) => (
    <div className="pointer" onClick={() => setFilter(lang.name)} key={lang.name}>
      <Button text={lang.name} nonClickable />
    </div>
  ));

  return (
    <div className="projects-filter-wrapper">
      <div className="pointer" onClick={() => setFilter("All")}>
        <Button text={"All"} nonClickable />
      </div>
      {buttons}
    </div>
  );
};

export default ProjectsFilter;
