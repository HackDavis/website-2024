import styles from './ScheduleBlock.module.scss';

export default function ScheduleBlock() {
  return (
    <div className={styles.main_container}>
      <h3>Schedule</h3>
      <div className={styles.filter}>FILTER</div>
      <div className={styles.schedule}></div>
    </div>
  );
}
