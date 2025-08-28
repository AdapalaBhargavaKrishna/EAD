import React, { useState, useEffect } from "react";
import stopwatch from "./assets/stopwatch.svg";
import "./index.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const formatTime = (s) => {
    const minutes = Math.floor(s / 6000);
    const seconds = Math.floor((s % 6000) / 100);
    const milliseconds = s % 100;

    return `${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(
      2,
      "0"
    )} : ${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="app-container">
      <div className="timer-card">
        <img src={stopwatch} width={100} height={100} alt="" />
        <h1>Timer</h1>
        <h1 className="time-text">{formatTime(seconds)}</h1>
        <div className="btn-group">
          <button
            onClick={handleStartPause}
            className={`btn ${isActive ? "pause" : "start"}`}
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button onClick={handleReset} className="btn reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
