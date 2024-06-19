import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const countDownDate = new Date("Jun 13, 2024 05:36:00 GMT+0100").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-white p-4 rounded-lg shadow-lg ">
        {/* <h1 className="text-4xl font-bold mb-4">Countdown Timer</h1> */}
        <p className="text-xl">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
