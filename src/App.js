import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + counter);
  return (
    <div className="app">
      <div className="step_box">
        <button
          className="btn btn-step_minus"
          onClick={() => setStep((s) => s - 1)}
        >
          -
        </button>
        <div>
          <span>Step:</span>
          <span>{step}</span>
        </div>
        <button
          className="btn btn-step_plus"
          onClick={() => setStep((s) => s + 1)}
        >
          +
        </button>
      </div>

      <div className="counter_box">
        <button
          className="btn btn-counter_minus"
          onClick={() => setCounter((c) => c - step)}
        >
          -
        </button>
        <div>
          <span>Counter:</span>
          <span>{counter}</span>
        </div>
        <button
          className="btn btn-counter_plus"
          onClick={() => setCounter((c) => c + step)}
        >
          +
        </button>
      </div>

      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter >= 0
            ? `${Math.abscounter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
