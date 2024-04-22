import styles from './Timer.module.scss';
//import { CiCalendar } from 'react-icons/ci';
import Link from 'next/link';
import Countdown from '../Countdown/Countdown';

type FormLink = {
  title: string;
  url: string;
};

const FormLinks: { [key: string]: FormLink } = {
  Register: {
    title: 'Submit Project',
    url: 'https://form.typeform.com/to/RvoDiujh?utm_source=WEBSITE',
  },
  Sponsor: { title: 'Get Help', url: 'mailto:team@hackdavis.io' },
  Calendar: {
    title: 'HackDavis 2024 Calendar',
    url: 'https://drive.google.com/file/d/1AGBLnS55qNEuGNXh9VLSdx2PaHsGVgE7/view?usp=drive_link',
  },
};

export default function Form() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>
          <img src="/navbar/logo.svg" alt="Logo" className={styles.logo} />{' '}
          <span className={styles.title_social}>HackDavis 2024</span>
        </div>
        <Countdown />
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
        </div>
      </div>
    </div>
  );
}
