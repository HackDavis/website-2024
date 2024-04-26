import styles from './Timer.module.scss';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import Countdown from '../Countdown/Countdown';
import Image from 'next/image';
import HackDavisLogo from 'public/navbar/logo.svg';

type ButtonLink = {
  title: string;
  url: string;
  icon?: JSX.Element;
  bgColor: string;
  textColor: string;
};

const buttonLinks: ButtonLink[] = [
  {
    title: 'Submit Project',
    url: 'https://form.typeform.com/to/RvoDiujh?utm_source=WEBSITE',
    bgColor: '#173A52',
    textColor: '#FFFFFF',
  },
  {
    title: 'Get Help',
    url: 'https://discord.gg/pjAKeaEh',
    icon: <FaDiscord />,
    bgColor: '#FFFFFF',
    textColor: '#173A52',
  },
];

export default function Form() {
  return (
    <div className={styles.background}>
      <div className="tw-flex tw-flex-col tw-gap-6">
        <div className={styles.title}>
          <Image src={HackDavisLogo} alt="Logo" className={styles.title_logo} />{' '}
          <span className={styles.title_social}>HackDavis 2024</span>
        </div>
        <Countdown />
        <div className="tw-flex tw-items-center tw-justify-center tw-gap-4">
          {buttonLinks.map((button, index) => (
            <Link key={index} href={button.url}>
              <button
                className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-3xl tw-p-4 tw-font-semibold"
                style={{
                  backgroundColor: button.bgColor,
                  color: button.textColor,
                }}
              >
                {button.icon}
                {button.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
