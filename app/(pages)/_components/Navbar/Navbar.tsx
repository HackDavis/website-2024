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
      if (currentScrollY < 60) {
        setAtTop(true);
        setDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setAtTop(false);
        setDirection('up');
      } else if (currentScrollY > 60) {
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
      e.preventDefault();
    };

    if (active) {
      window.addEventListener('wheel', disableScroll, { passive: false });
      window.addEventListener('touchmove', disableScroll, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', disableScroll);
      window.removeEventListener('touchmove', disableScroll);
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
            <Link
              href={
                navLinks.some((link) => link.slug === '/event/#resources')
                  ? '/event/#landing'
                  : '/#landing'
              } // check if the link contains /event/#resources since its currently on DOE
              onClick={setInactive}
            >
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
              <Link
                href={link.slug}
                onClick={setInactive}
                className="tw-flex tw-items-center tw-gap-1"
              >
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
        <Link
          href="mailto:team@hackdavis.io"
          target="_blank"
          className="tw-absolute tw-right-10 tw-top-4 tw-z-10"
        >
          <div className="tw-text-nowrap tw-rounded-2xl tw-bg-white tw-px-6 tw-py-3 tw-font-bold tw-text-slate-900 tw-shadow-lg">
            <p>Sponsor Us</p>
          </div>
        </Link>
      </nav>
    </div>
  );
}
