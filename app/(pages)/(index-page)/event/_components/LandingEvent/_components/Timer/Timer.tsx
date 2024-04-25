import styles from './Timer.module.scss';
import { IoLocationSharp } from 'react-icons/io5';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import Countdown from '../Countdown/Countdown';
import Image from 'next/image';

type FormLink = {
  title: string;
  url: string;
};

const FormLinks: { [key: string]: FormLink } = {
  Register: {
    title: 'Submit Project',
    url: 'https://form.typeform.com/to/RvoDiujh?utm_source=WEBSITE',
  },
  Sponsor: { title: 'Get Help', url: 'https://discord.gg/pjAKeaEh' },
  Location: {
    title: 'Location',
    url: 'https://www.google.com/maps/dir//750+Orchard+Rd,+Davis,+CA+95616/@38.5417949,-121.8420395,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808529d4ce160f1d:0x813925c4c65f6bb1!2m2!1d-121.7596385!2d38.5418238?entry=ttu',
  },
};

export default function Form() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Image
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
          <Link href={''}></Link>
          <IoLocationSharp className={styles.calendar_inner_lower_icon} />
          <span className={styles.calendar_inner_lower_text}>
            University Credit Union Center @ UC Davis
          </span>
        </div>
      </div>
    </div>
  );
}
