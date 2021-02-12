import React from "react";
import "./NumericPad.css";
import { buttons } from "../../data";

const NumericPad = (props) => {
  const handleClick = (event) => {
    props.onButtonPressed(event.target.name);
  };

  return (
    <div className="numericPad">
      {buttons.map((x) => (
        <button
          key={x}
          className="numericPad__button"
          name={x}
          onClick={handleClick}
        >
          {x}
        </button>
      ))}
    </div>
  );
};

export default NumericPad;
