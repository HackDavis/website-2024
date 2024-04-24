import styles from './Timer.module.scss';
import { IoLocationSharp } from 'react-icons/io5';
import { FaDiscord } from 'react-icons/fa';
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
          <img
            src="/navbar/logo.svg"
            alt="Logo"
            className={styles.title_logo}
          />{' '}
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
            <FaDiscord className={styles.buttons_sponsor_icon} />
            <p>{FormLinks.Sponsor.title}</p>
          </a>
        </div>
        <div className={styles.Calendar_inner_lower}>
          <IoLocationSharp className={styles.calendar_inner_lower_icon} />
          <span className={styles.calendar_inner_lower_text}>
            University Credit Union Center @ UC Davis
          </span>
        </div>
      </div>
    </div>
  );
}
