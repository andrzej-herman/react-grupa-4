import React from "react";
import "./Display.css";

const Display = (props) => {
  return (
    <div className="display">
      <div className="operation">{props.expression}</div>
      <div className="result">{props.value}</div>
    </div>
  );
};

export default Display;
