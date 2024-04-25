import styles from './Showcase.module.scss';

export default function Sponsor() {
  return (
    <div className={styles.sponsor}>
      <div className={styles.container}>
        <div className={styles.polaroids}></div>
        <div className={styles.stats}></div>
        <div className={styles.cowduck}></div>
      </div>
    </div>
  );
}
