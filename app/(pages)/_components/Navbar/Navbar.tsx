'use client';
import Link from 'next/link';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
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
      console.log(currentScrollY, lastScrollY.current, direction, atTop);
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

  return (
    <div
      className={`${styles.container} ${
        atTop
          ? styles.container_at_top
          : direction === 'up'
          ? styles.container_sticky
          : ''
      } ${!atTop && direction === 'down' ? styles.container_return_up : ''}
    `}
    >
      <nav className={`${styles.nav}`}>
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
