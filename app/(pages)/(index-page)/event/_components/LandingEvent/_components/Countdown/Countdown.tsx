'use client';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styles from './Countdown.module.scss'; // Import the SCSS module

const useTimer = (timerDuration: number) => {
  const [timeRemaining, setTimeRemaining] = useState(
    moment.duration(timerDuration, 'minutes')
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((timeRemaining) =>
        moment.duration(timeRemaining.asSeconds() - 1, 'seconds')
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeRemaining;
};

export default function Countdown() {
  const [time, setTime] = useState(['2', '4', '0', '0', '0', '0']);
  const startHack = '2024-04-27T14:00:00.000-07:00';
  const timerDuration = 1440 - (Date.now() - Date.parse(startHack)) / 1000 / 60;
  const curTime = useTimer(timerDuration);

  useEffect(() => {
    if (timerDuration < 0) {
      setTime(['0', '0', '0', '0', '0', '0']);
    } else if (timerDuration < 1440) {
      const hourString = curTime.hours().toString().padStart(2, '0');
      const minuteString = curTime.minutes().toString().padStart(2, '0');
      const secondString = curTime.seconds().toString().padStart(2, '0');
      setTime([
        ...hourString.split(''),
        ...minuteString.split(''),
        ...secondString.split(''),
      ]);
    }
  }, [timerDuration, curTime]);

  return (
    <main className={styles.container}>
      <div className={styles.timer}>
        <div className={styles.container_timer_hrs}>
          <div className={styles.time}>
            <div className={styles.time_card}>
              <h1>{time[0]}</h1>
              <h1>{time[1]}</h1>
              <div className={styles.container_timer_hrs_text}>
                <p>Hours</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container_timer_mins}>
          <div className={styles.time}>
            <div className={styles.time_card}>
              <h1>{time[2]}</h1>
              <h1>{time[3]}</h1>
              <div className={styles.container_timer_mins_text}>
                <p>Minutes</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container_timer_secs}>
          <div className={styles.time}>
            <div className={styles.time_card}>
              <h1>{time[4]}</h1>
              <h1>{time[5]}</h1>
              <div className={styles.container_timer_secs_text}>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </main>
  );
}
