import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 300 seconds = 5 minutes
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const resetTimer = () => {
    setTimeLeft(300);
    setIsActive(true);
  };

  // Format time as MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const displayTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <button 
      className="px-6 py-3 mt-2" 
      style={{ outline: "1px solid #fa0000" }}
      onClick={!isActive ? resetTimer : undefined}
    >
      {isActive ? displayTime : "Reset"}
    </button>
  );
};

export default CountdownTimer;