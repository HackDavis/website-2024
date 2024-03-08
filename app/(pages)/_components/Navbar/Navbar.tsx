'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';
import useToggle from '@hooks/useToggle';
import type { NavLink } from '@data/navLinks';
import { useEffect, useState, useRef } from 'react';

export default function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  const [active, toggleActive, _, setInactive] = useToggle(false);
  const [atTop, setAtTop] = useState(true);
  const [direction, setDirection] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setAtTop(true);
        setDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setAtTop(false);
        setDirection('up');
      } else if (currentScrollY > 100) {
        setAtTop(false);
        setDirection('down');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [direction, atTop]);

  useEffect(() => {
    const disableScroll = (e: Event) => {
      if (active) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', disableScroll, { passive: false });
    window.addEventListener('touchmove', disableScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', disableScroll);
    };
  }, [active]);

  return (
    <div
      className={`${styles.container} ${
        atTop
          ? styles.container_at_top
          : direction === 'up'
          ? styles.container_sticky
          : ''
      } ${!atTop && direction === 'down' ? styles.container_return_up : ''}
      ${active ? styles.container_active : ''}
    `}
    >
      <nav className={`${styles.nav}`}>
        <div
          className={`${styles.menuIcon} ${
            active ? styles.menuIcon_active : ''
          }`}
          onClick={toggleActive}
        >
          {/* {active ? <RxCross2 size={40} /> : <RxHamburgerMenu size={40} />} */}
          <div
            className={`${active ? styles.hamburger_active : styles.hamburger}`}
          >
            <span className={styles.hamburger_line}></span>
            <span className={styles.hamburger_line}></span>
            <span className={styles.hamburger_line}></span>
          </div>
        </div>
        <ul className={`${styles.words} ${active ? styles.words_active : ''}`}>
          <li>
            <Link href="/#landing" onClick={setInactive}>
              <Image
                src={active ? '/Footer/hdLogoWhite.svg' : '/navbar/logo.svg'}
                alt="logo"
                width={100}
                height={100}
                className={`${styles.logo} ${active ? styles.logo_white : ''}`}
              />
            </Link>
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
