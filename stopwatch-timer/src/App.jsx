import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);

  console.log(time);

  function startTime() {
    window.myTime = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  function stopTime() {
    clearInterval(window.myTime);
  }

  function resetTime() {
    clearInterval(window.myTime);
    setTime(0);
  }

  return (
    <main>
      <h1>Timer</h1>
      <div>
        <p>
          {Math.trunc(time / 60)} mins {time} secs
        </p>
      </div>
      <div className="div--btn">
        <button className="btn--start" onClick={startTime}>
          Start
        </button>
        <button className="btn--stop" onClick={stopTime}>
          Stop
        </button>
        <button className="btn--reset" onClick={resetTime}>
          Reset
        </button>
      </div>
    </main>
  );
}
