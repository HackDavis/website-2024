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
        <div
          className={`${styles.menuIcon} ${active ? styles.active : ''}`}
          onClick={toggleActive}
        >
          {active ? <RxCross2 /> : <RxHamburgerMenu size={40} />}
        </div>
        <ul className={`${styles.words} ${active ? styles.active : ''}`}>
          <li>
            <Image
              src="/navbar/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className={`${styles.logo} ${active ? styles.active : ''}`}
            ></Image>
          </li>
          {navLinks.map((link) => (
            <li key={link.name} className={styles.wordsItem}>
              <Link href={link.slug} onClick={setInactive}>
                <span className={styles.navLink}>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Image
          src="/navbar/MLH_Badge.svg"
          alt="MLH badge"
          width={100}
          height={100}
          className={styles.mlhBadge}
        />
      </nav>
    </div>
  );
}
