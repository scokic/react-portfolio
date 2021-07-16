import React from "react";
import "./button.styles.scss";

const Button = ({ text, link }) => {
  return (
    <button className='custom-button' href={link}>
      {text}
    </button>
  );
};

export default Button;
