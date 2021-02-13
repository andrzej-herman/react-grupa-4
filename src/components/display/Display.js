import React from "react";
import "./Display.css";

const Display = (props) => {
  const formatExpression = (exp) => {
    if (exp.includes("=") && exp.length > 1) {
      return exp.substr(0, exp.length - 1);
    } else return exp;
  };

  return (
    <div className="display">
      <div className="operation">{formatExpression(props.expression)}</div>
      <div className="result">{props.value}</div>
    </div>
  );
};

export default Display;
