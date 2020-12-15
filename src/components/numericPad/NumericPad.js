import React from "react";
import "./NumericPad.css";

const NumericPad = () => {
  const handleClick = (event) => {
    alert(`Nacisnąłeś ${event.target.name}`);
  };

  return (
    <div className="numericPad">
      <button className="numericPad__button" name="1" onClick={handleClick}>
        1
      </button>
      <button className="numericPad__button" name="2" onClick={handleClick}>
        2
      </button>
      <button className="numericPad__button" name="3" onClick={handleClick}>
        3
      </button>
      <button className="numericPad__button" name="+" onClick={handleClick}>
        +
      </button>
      <button className="numericPad__button" name="5" onClick={handleClick}>
        4
      </button>
      <button className="numericPad__button" name="6" onClick={handleClick}>
        5
      </button>
      <button className="numericPad__button" name="7" onClick={handleClick}>
        6
      </button>
      <button className="numericPad__button" name="-" onClick={handleClick}>
        -
      </button>
      <button className="numericPad__button" name="7" onClick={handleClick}>
        7
      </button>
      <button className="numericPad__button" name="8" onClick={handleClick}>
        8
      </button>
      <button className="numericPad__button" name="9" onClick={handleClick}>
        9
      </button>
      <button className="numericPad__button" name="*" onClick={handleClick}>
        *
      </button>
      <button className="numericPad__button" name="C" onClick={handleClick}>
        C
      </button>
      <button className="numericPad__button" name="0" onClick={handleClick}>
        0
      </button>
      <button className="numericPad__button" name="=" onClick={handleClick}>
        =
      </button>
      <button className="numericPad__button" name="/" onClick={handleClick}>
        /
      </button>
    </div>
  );
};

export default NumericPad;
