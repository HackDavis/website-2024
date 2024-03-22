import styles from './Form.module.scss';
import { CiCalendar } from 'react-icons/ci';
import WordCycle from './_components/WordCycle';
import Link from 'next/link';

type FormLink = {
  title: string;
  url: string;
};

const FormLinks: { [key: string]: FormLink } = {
  Register: {
    title: 'Register Now',
    url: 'https://form.typeform.com/to/RvoDiujh?utm_source=WEBSITE',
  },
  Volunteer: {
    title: 'Volunteer',
    url: 'https://form.typeform.com/to/MY8EI47D',
  },

  Mentor: { title: 'Mentor', url: 'https://form.typeform.com/to/cvy9LlyR' },
  Sponsor: { title: 'Sponsor', url: 'mailto:team@hackdavis.io' },
};

export default function Form() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.title_ready}>
            <span style={{ opacity: 0.75, fontFamily: 'Metropolis' }}>
              Ready to
            </span>
            <span className={styles.title_ready_wordCycle}>
              <WordCycle />
            </span>
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
                April 27 - 28 @ UCenter
              </span>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            href={FormLinks.Register.url}
            className={styles.buttons_register}
          >
            <p>{FormLinks.Register.title}</p>
          </Link>
          <a href={FormLinks.Sponsor.url} className={styles.buttons_sponsor}>
            <p>{FormLinks.Sponsor.title}</p>
          </a>
          <div className={styles.buttons_userType}>
            <Link href={FormLinks.Volunteer.url}>
              <span>{FormLinks.Volunteer.title}</span>
            </Link>
            <Link href={FormLinks.Mentor.url}>
              <span>{FormLinks.Mentor.title}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
