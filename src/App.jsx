import { useState, useEffect } from "react";
import "./App.css";
import { getColor } from "./color-service";

export function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    if (counter >= 3) {
      getColor().then(newColor => {
        setColor(newColor);
      });
    }
  }, [counter]);


  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decreaseCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>Ada School - React Hooks</h1>

      <div>
        <span className={color}>{`Counter:${counter}`}</span>
      </div>

      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}
