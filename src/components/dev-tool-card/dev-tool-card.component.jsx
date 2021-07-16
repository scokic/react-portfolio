import React from "react";
import "./dev-tool-card.styles.scss";

const DevToolCard = ({ name, image, idx, setActiveTool, activeCard }) => {
  const changeActiveTool = () => {
    console.log(idx);
    setActiveTool(idx);
  };

  return (
    <div className={`dev-tool-card ${idx === activeCard ? "active-card" : null}`} onMouseEnter={changeActiveTool}>
      <div className='dev-tool-icon'>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default DevToolCard;
