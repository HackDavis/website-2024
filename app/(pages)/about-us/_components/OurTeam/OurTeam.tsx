import styles from './OurTeam.module.scss';

export default function OurTeam() {
  return (
    <div className={styles.ourTeam}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Get to know our team</h2>
          <p>HackDavis is built by students, for students.</p>
        </div>
      </div>
    </div>
  );
}
