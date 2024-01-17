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

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Image
        src="hdLogoWhite.svg"
        alt="hackdavis Logo"
        width={103}
        height={62}
        className={styles.hdLogoWhite}
      />
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
    </footer>
  );
}
