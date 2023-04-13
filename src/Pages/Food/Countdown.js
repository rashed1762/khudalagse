import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(intervalId);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div>
      <div>{timeRemaining.days} Days</div>
      <div>{timeRemaining.hours} Hours</div>
      <div>{timeRemaining.minutes} Minutes</div>
      <div>{timeRemaining.seconds} Seconds</div>


      <ul className="steps steps-vertical">
  <li className="step step-primary">Register 
  
  <ul className="ml-8">
    <li>sadsadsa</li>
  </ul>
    </li>
  <li className="step step-primary">Choose plan</li>
  <li className="step">Purchase</li>
  <li className="step">Receive Product</li>
  <li className="step">Receive Product</li>
  <li className="step">Receive Product</li>
</ul>
    </div>
  );
};

export default Countdown;