import { useState } from "react";

function App() {
  const [state, setState] = useState({
    seconds: (new Date().getSeconds() / 60) * 360,
    minutes: (new Date().getMinutes() / 60) * 360,
    hours: (new Date().getHours() / 12) * 360,
  });

  function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = (seconds / 60) * 360;
    const minutes = now.getMinutes();
    const minuteDegrees = (minutes / 60) * 360;
    const hours = now.getHours();
    const hourDegrees = (hours / 12) * 360;
    setState({
      seconds: secondDegrees,
      minutes: minuteDegrees,
      hours: hourDegrees,
    });
  }
  setInterval(setTime, 1000);
  return (
    <div className="clock">
      <div className="clock-face">
        <div
          className="hand"
          id="hour-hand"
          style={{ transform: `rotate(${state.hours}deg)` }}
        ></div>
        <div
          className="hand"
          id="min-hand"
          style={{ transfrom: `rotate(${state.minutes}deg)` }}
        ></div>
        <div
          className="hand"
          id="second-hand"
          style={{ transform: `rotate(${state.seconds}deg)` }}
        ></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default App;
