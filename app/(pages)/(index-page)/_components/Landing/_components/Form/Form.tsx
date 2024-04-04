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
  Calendar: {
    title: 'HackDavis 2024 Calendar',
    url: 'https://drive.google.com/file/d/1AGBLnS55qNEuGNXh9VLSdx2PaHsGVgE7/view?usp=drive_link',
  },
  StarterPack: {
    title: 'Starter Pack',
    url: 'https://hackdavis.notion.site/HackDavis-2024-Starter-Pack-bea21741698046e99e46f13c9b311039?pvs=4',
  },
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
          <div className={styles.buttons_calendar}>
            New to hackathons?
            <Link href={FormLinks.StarterPack.url}>
              <span>{FormLinks.StarterPack.title}</span>
            </Link>
          </div>
          <div className={styles.buttons_calendar}>
            Grab your
            <Link href={FormLinks.Calendar.url}>
              <span>{FormLinks.Calendar.title}</span>
            </Link>
            today!
          </div>
        </div>
      </div>
    </div>
  );
}
