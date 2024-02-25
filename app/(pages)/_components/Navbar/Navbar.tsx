'use client';
import Link from 'next/link';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import styles from './Navbar.module.scss';
import useToggle from '@hooks/useToggle';
import type { NavLink } from '@data/navLinks';

export default function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  const [active, toggleActive, _, setInactive] = useToggle(false);
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.words}>
          <li>
            <svg className={styles.logo} />
            <Image
              src="/navbar/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className={styles.logo}
            />
          </li>
          <li className="words-item">
            <div>Impact</div>
          </li>
          <li className="words-item">
            <div>FAQ</div>
          </li>
          <li className="words-item">
            <div>Sponsors</div>
          </li>
          <li className="words-item">
            <div>About</div>
          </li>
        </ul>
        <Image
          src="/navbar/MLH_Badge.svg"
          alt="logo"
          width={100}
          height={100}
          className={styles.mlh_badge}
        />
      </nav>
    </div>
  );
}
