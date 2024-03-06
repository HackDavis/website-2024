'use client';
import Link from 'next/link';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import styles from './Navbar.module.scss';
import useToggle from '@hooks/useToggle';
import type { NavLink } from '@data/navLinks';
import { useEffect, useState } from 'react';

export default function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  const [active, toggleActive, _, setInactive] = useToggle(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [direction, setDirection] = useState('down');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setDirection('up');
      } else {
        setDirection('down');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`${styles.container} ${
        direction === 'up' ? styles.container_sticky : ''
      }`}
    >
      <nav
        className={`${styles.nav} ${
          direction === 'up' ? styles.nav_sticky : ''
        }`}
      >
        <div
          className={`${styles.menuIcon} ${
            active ? styles.menuIcon_active : ''
          }`}
          onClick={toggleActive}
        >
          {active ? <RxCross2 size={40} /> : <RxHamburgerMenu size={40} />}
        </div>
        <ul className={`${styles.words} ${active ? styles.words_active : ''}`}>
          <li>
            <Image
              src="/navbar/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className={`${styles.logo} ${active ? styles.logo_active : ''}`}
            ></Image>
          </li>
          {navLinks.map((link) => (
            <li key={link.name} className={styles.wordsItem}>
              <Link href={link.slug} onClick={setInactive}>
                <span
                  className={`${styles.navLink} ${
                    active ? styles.navLink_active : ''
                  }`}
                >
                  {link.name}
                </span>
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
