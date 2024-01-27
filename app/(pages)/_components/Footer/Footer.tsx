'use client';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faMedium,
  faFacebookF,
  faTwitter,
  faInstagram,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.hackdavisLogo}>
        <Image
          src="/Footer/hdLogoWhite.svg"
          alt="hackdavis Logo"
          width={92.5}
          height={92.7}
          className={styles.hdLogoWhite}
        />

        <Image
          src="/Footer/hdLogoMotto.svg"
          alt="hackdavis name and motto"
          width={226}
          height={71.55}
          className={styles.hdLogoWhite}
        />
      </div>
      <div className={styles.socialContent}>
        <div className={styles.brandIcons}>
          <a className={styles.singleIcon} href="mailto:team@hackdavis.io">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            className={styles.singleIcon}
            href="https://medium.com/@HackDavis"
            target="#"
            rel="noopener noreferrer"
            aria-label="@HackDavis on Medium"
          >
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a
            className={styles.fbIcon}
            href="https://www.facebook.com/HackDavis"
            target="#"
            rel="noopener noreferrer"
            aria-label="HackDavis on Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            className={styles.singleIcon}
            href="https://twitter.com/hack_davis"
            target="#"
            rel="noopener noreferrer"
            aria-label="@hack_davis on Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className={styles.singleIcon}
            href="https://www.instagram.com/hackdavis"
            target="#"
            rel="noopener noreferrer"
            aria-label="@hackdavis on Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className={styles.singleIcon}
            href="https://discord.gg/wc6QQEc"
            target="#"
            rel="noopener noreferrer"
            aria-label="HackDavis Discord server"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; 2024 HackDavis • Made with ☕️ & 💛 in Davis
        </p>
      </div>
      <div className={styles.arrowToTop} onClick={scrollToTop}>
        <p>BACK TO TOP</p>
        <Image
          src="/Footer/arrowUp.svg"
          alt="hackdavis name and motto"
          width={24}
          height={24}
        />
      </div>
    </footer>
  );
}
