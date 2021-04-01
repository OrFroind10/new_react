import React, { useState } from "react";

const Time = (props) => {
  const [seconds, setSeconds] = useState(3600);
  const [minutes, setMinutes] = useState(60);
  const [hours, setHours] = useState(1);

  const handleChange = (e, type) => {
    const current = parseInt(e.target.value);
    if (type === 'sec') {
      setSeconds(current);
      setMinutes(current / 60);
      setHours(current / 3600);
    } else if (type === 'min') {
      setMinutes(current);
      setSeconds(current * 60);
      setHours(current / 60);
    } else if (type === 'hour') {
      setHours(current);
      setMinutes(current * 60);
      setSeconds(current * 3600);
    }
  }

  return (
    <div>
      <label>Seconds</label>
      <input
        type="number"
        value={seconds}
        onChange={(e) => handleChange(e, "sec")}
      />
      <label>Minutes</label>
      <input
        type="number"
        value={minutes}
        onChange={(e) => handleChange(e, "min")}
      />
      <label>Hours</label>
      <input
        type="number"
        value={hours}
        onChange={(e) => handleChange(e, "hour")}
      />
    </div>
  );
};

export default Time;