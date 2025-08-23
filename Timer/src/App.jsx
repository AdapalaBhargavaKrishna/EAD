import React, { useState, useEffect } from "react";
import "./index.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
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
    const minutes = Math.floor(s / 60);
    const secs = s % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="app-container">
      <div className="timer-card">
        <h1 className="timer-circle">{formatTime(seconds)}</h1>
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
