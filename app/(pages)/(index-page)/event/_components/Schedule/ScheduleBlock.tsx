import styles from './ScheduleBlock.module.scss';
import Schedule from './Schedule';
import { useState } from 'react';

const schedules = [
  {
    date: 'Saturday, April 27',
    events: [],
  },
  {
    date: 'Sunday, April 28',
    events: [{ time: '8:00' }],
  },
];

export default function ScheduleBlock() {
  const [scheduleIndex, setScheduleIndex] = useState(0);
  const incIndex = () => {
    setScheduleIndex((prev) => (prev + 1) % schedules.length);
  };

  const decIndex = () => {
    setScheduleIndex(
      (prev) => (schedules.length + prev - 1) % schedules.length
    );
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.header_container}>
        <h3>Schedule</h3>
        <div className={styles.schedule_selector}>
          <p>{schedules[scheduleIndex].date}</p>
          <button onClick={decIndex}>{'<'}</button>
          <button onClick={incIndex}>{'>'}</button>
        </div>
      </div>
      <div className={styles.filter}>FILTER</div>
      <div className={styles.schedules}>
        {schedules.map((schedule, index) => (
          <div key={index} className={styles.schedule_container}>
            <Schedule />
          </div>
        ))}
      </div>
    </div>
  );
}
