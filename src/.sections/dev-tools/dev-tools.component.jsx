import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import DevToolCard from "../../.components/dev-tool-card/dev-tool-card.component";
import {Languages} from "../../atoms/languages"
import "./dev-tools.styles.scss";

const DevToolsSection = () => {

  const devTools = useRecoilValue(Languages);
  const [activeTool, setActiveTool] = useState(3);

  // TODO: create automated loop through the list which pauses on section hover

  const devToolsList = devTools.map((tool) => <DevToolCard key={tool.id} idx={tool.id} name={tool.name} image={tool.image} link={tool.link} setActiveTool={setActiveTool} activeCard={activeTool} />);

  return (
    <div className='dev-tools-wrapper section-wrapper'>
      <div className='dev-tools-container section-container'>
        <h2 className='section-heading'>My tech stack</h2>
        <p className='section-description'>These are the tools I love using. Hover over tools check out what I admire and love using from each and every one of them!</p>
        <div className='dev-tools-grid '>{devToolsList}</div>

        <div className='single-tool-description-wrapper'>
          <div className='single-tool-logo'>
            <img src={devTools[activeTool].image} />
          </div>
          <div className='divider'></div>
          <div className='single-tool-description'>
            <h3>{devTools[activeTool].name}</h3>
            <p>{devTools[activeTool].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevToolsSection;
