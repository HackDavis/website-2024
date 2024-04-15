import React, { useState, useEffect } from 'react';
import styles from './Timer.module.scss'; // Import the SCSS module

interface TimerProps {
  initialSeconds: number;
}

const Timer: React.FC<TimerProps> = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // Only set up the interval if there are seconds remaining
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);

      // Clear the interval on unmount or when seconds run out
      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  return (
    <div className={styles.timer}>
      <div className={styles.timeDisplay}>{seconds} seconds</div>
    </div>
  );
};

export default Timer;
