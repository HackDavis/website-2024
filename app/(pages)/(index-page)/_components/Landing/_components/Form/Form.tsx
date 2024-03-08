import styles from './Form.module.scss';
import { CiCalendar } from 'react-icons/ci';
import WordCycle from './_components/WordCycle';

export default function Form() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.title_ready}>
            <WordCycle /> for{' '}
          </span>
          <span className={styles.title_social}>social good?</span>
        </div>
        <div className={styles.calendar}>
          <div className={styles.calendar_inner}>
            <span className={styles.calendar_inner_upper}>
              Join us for{' '}
              <span className={styles.calendar_inner_upper_hackdavis}>
                HackDavis 2024
              </span>
            </span>
            <div className={styles.calendar_inner_lower}>
              <CiCalendar className={styles.calendar_inner_lower_icon} />
              <span className={styles.calendar_inner_lower_text}>
                January 1, 2024 @ UCenter
              </span>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttons_register}>
            <p>Register Now</p>
          </div>
          <div className={styles.buttons_sponsor}>
            <p>Sponsor</p>
          </div>
          <div className={styles.buttons_userType}>
            <span>VOLUNTEER</span>
            <span>MENTOR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
