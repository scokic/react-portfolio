import React from "react";
import "./button.styles.scss";

const Button = ({ text, url, transparent, blank, white }) => {
  return (
    <a className={`custom-button ${transparent ? "transparent-button" : ""} ${white ? "white-button" : ""} `} href={url} target={blank ? "_blank" : ""}>
      {text}
    </a>
  );
};

export default Button;
