import styles from './Timer.module.scss';
import { IoLocationSharp } from 'react-icons/io5';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import Countdown from '../Countdown/Countdown';
import Image from 'next/image';
import HackDavisLogo from 'public/navbar/logo.svg';

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

const locationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="17"
    viewBox="0 0 14 17"
    fill="none"
  >
    <path
      d="M13.5909 6.54545C13.5909 11.6364 7.04545 16 7.04545 16C7.04545 16 0.5 11.6364 0.5 6.54545C0.5 4.80949 1.18961 3.14463 2.41712 1.91712C3.64463 0.689608 5.30949 0 7.04545 0C8.78142 0 10.4463 0.689608 11.6738 1.91712C12.9013 3.14463 13.5909 4.80949 13.5909 6.54545Z"
      fill="#123041"
    />
    <path
      d="M7.04534 8.72692C8.25033 8.72692 9.22716 7.75008 9.22716 6.5451C9.22716 5.34011 8.25033 4.36328 7.04534 4.36328C5.84036 4.36328 4.86353 5.34011 4.86353 6.5451C4.86353 7.75008 5.84036 8.72692 7.04534 8.72692Z"
      fill="#90D3DB"
    />
  </svg>
);

export default function Form() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Image src={HackDavisLogo} alt="Logo" className={styles.title_logo} />{' '}
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
        <div className={styles.locationWithText}>
          <Link href={''}></Link>
          <div>{locationIcon}</div>
          <span className={styles.calendar_inner_lower_text}>
            University Credit Union Center @ UC Davis
          </span>
        </div>
      </div>
    </div>
  );
}
