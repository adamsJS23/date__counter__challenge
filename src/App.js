import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + counter);

  function handleReset() {
    setStep(1);
    setCounter(0);
  }
  return (
    <div className="app">
      <div className="step_box">
        <input
          type="range"
          min={0}
          max={20}
          value={step}
          onChange={(evt) => setStep(+evt.target.value)}
        />
        <span>Step:{step}</span>
      </div>

      <div className="counter_box">
        <button className="btn" onClick={() => setCounter((c) => c - step)}>
          -
        </button>
        <input
          type="text"
          value={counter}
          onChange={(evt) => setCounter(+evt.target.value)}
        />
        <button className="btn" onClick={() => setCounter((c) => c + step)}>
          +
        </button>
      </div>

      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter >= 0
            ? `${Math.abs(counter)} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {step !== 1 || counter !== 0 ? (
        <button className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
