import React from "react";
import "./button.styles.scss";

const Button = ({ text, url, transparent, blank, white, fullwidth, nonClickable }) => {
  return (
    <a
      href={url ? url : "#"}
      target={blank ? "_blank" : ""}
      className={`custom-button
    ${transparent && "transparent-button"}
    ${white && "white-button"} 
    ${fullwidth && "fullwidth"}
    ${nonClickable && "non-clickable"} `}>
      {text}
    </a>
  );
};

export default Button;
