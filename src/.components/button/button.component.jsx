import React from "react";
import "./button.styles.scss";

const Button = ({ text, url, transparent, blank, white, fullwidth }) => {
  return (
    <a
      href={url}
      target={blank ? "_blank" : ""}
      className={`custom-button
    ${transparent ? "transparent-button" : ""}
    ${white ? "white-button" : ""} 
    ${fullwidth ? "fullwidth" : ""} `}
    >
      {text}
    </a>
  );
};

export default Button;
