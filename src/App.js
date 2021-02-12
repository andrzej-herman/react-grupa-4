import React, { useState } from "react";
import "./App.css";
import Display from "./components/display/Display";
import NumericPad from "./components/numericPad/NumericPad";
import { isNumber } from "./data";

const App = () => {
  const [result, setResult] = useState(0);
  const [waitingForOperand, setWaitingForOperand] = useState(true);
  const [pendingOperator, setPendingOperator] = useState(undefined);
  const [display, setDisplay] = useState("0");

  const calculate = (right, pendingOperator) => {
    let newResult = result;

    switch (pendingOperator) {
      case "+":
        newResult += right;
        break;
      case "-":
        newResult -= right;
        break;
      case "×":
        newResult *= right;
        break;
      case "/":
        if (right === 0) {
          return false;
        }

        newResult /= right;
    }

    setResult(newResult);
    setDisplay(newResult.toString().toString().slice(0, 12));

    return true;
  };

  // Number
  const numberSelected = (digit) => {
    let newDisplay = display;
    if ((display === "0" && digit === 0) || display.length > 12) {
      return;
    }

    if (waitingForOperand) {
      newDisplay = "";
      setWaitingForOperand(false);
    }

    if (display !== "0") {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  // Operation selected
  const operatorSelected = (operator) => {
    const operand = parseInt(display, 10);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }
    } else {
      setResult(operand);
    }

    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const onEqualButtonClick = () => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }

      setPendingOperator(undefined);
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setWaitingForOperand(true);
  };

  // Reset
  const onReset = () => {
    setResult(0);
    setPendingOperator(undefined);
    setDisplay("0");
    setWaitingForOperand(true);
  };

  // Click Button
  const handleButtonClick = (value) => {
    if (isNumber(value)) {
      numberSelected(parseInt(value, 10));
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      operatorSelected(value);
    } else if (value === "=") {
      onEqualButtonClick();
    } else {
      onReset();
    }
  };

  return (
    <div className="app">
      <div className="calc">
        <Display
          value={display}
          expression={
            typeof pendingOperator !== "undefined"
              ? `${result}${pendingOperator}${waitingForOperand ? "" : display}`
              : ""
          }
        />
        <NumericPad onButtonPressed={handleButtonClick} />
      </div>
    </div>
  );
};

export default App;
