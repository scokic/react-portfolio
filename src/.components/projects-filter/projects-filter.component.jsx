import React from "react";
import { useRecoilValue } from "recoil";
import Button from "../button/button.component";
import { Languages } from "../../atoms/languages";
import "./projects-filter.styles.scss";

const ProjectsFilter = ({ setFilter }) => {
  const languages = useRecoilValue(Languages);
  const buttons = languages.map((lang) => (
    <div onClick={() => setFilter(lang.name)}>
      <Button text={lang.name} />
    </div>
  ));

  return (
    <div className="projects-filter-wrapper">
      <div onClick={() => setFilter("All")}>
        <Button text={"All"} />
      </div>
      {buttons}
    </div>
  );
};

export default ProjectsFilter;
