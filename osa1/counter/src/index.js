import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="Plus" />
      <Button handleClick={reset} text="Reset" />
      <Button handleClick={decreaseByOne} text="Minus" />
    </div>
  );
};

let counter = 1;

ReactDOM.render(<App />, document.getElementById("root"));
