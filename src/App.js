import React from "react";
import "./App.css";
import Display from "./components/display/Display";
import NumericPad from "./components/numericPad/NumericPad";

const App = () => {
  return (
    <div className="app">
      <div className="calc">
        <Display />
        <NumericPad />
      </div>
    </div>
  );
};

export default App;
