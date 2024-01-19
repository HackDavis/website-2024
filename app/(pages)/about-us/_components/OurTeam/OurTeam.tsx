import ProfileCard from './_components/ProfileCard';
import styles from './OurTeam.module.scss';

export default function OurTeam() {
  return (
    <div className={styles.ourTeam}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Get to know our team</h1>
          <p>HackDavis is built by students, for students.</p>
        </div>
        <ProfileCard name="Amanda" title="Co-Director" />
      </div>
    </div>
  );
}
