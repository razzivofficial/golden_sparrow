import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountDownTimer = () => {
  const [timeleft, settimeleft] = useState({});

  let clocktimer;

  useEffect(() => {
    clocktimer = setInterval(() => {
      settimeleft(handleCountDown());
    }, 1000);
    return () => clearInterval(clocktimer);
  }, []);

  const handleCountDown = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const difference = tomorrow.getTime() - today.getTime();
    let Left = {};

    if (difference <= 0) {
      clearInterval(clocktimer);
    } else {
      let seconds = Math.floor(difference / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      Left = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    }
    return Left;
  };

  return (
    <div>
      <i className="fas fa-clock"></i>
      {timeleft.days !== undefined ? timeleft.days : ""} ::
      {timeleft.hours !== undefined ? timeleft.hours : ""} ::
      {timeleft.minutes !== undefined ? timeleft.minutes : ""} ::
      {timeleft.seconds !== undefined ? timeleft.seconds : ""} Remaining time
    </div>
  );
};

export default CountDownTimer;
