'use client';
import styles from './Archive.module.scss';
import EmblaCarousel from './_carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import Link from 'next/link';

const OPTIONS: EmblaOptionsType = {
  dragFree: false,
  skipSnaps: true,
  watchDrag: true,
};

export default function Archive() {
  const elements = [
    <Link key="unique-key-1" target="_blank" href="https://2023.hackdavis.io/">
      <Image
        className={styles.folder}
        src="/archive/2023.png"
        alt="thing"
        priority={true}
        width={247}
        height={206}
      />
    </Link>,
    <Link key="unique-key-1" target="_blank" href="https://2022.hackdavis.io/">
      <Image
        className={styles.folder}
        src="/archive/2022.png"
        alt="thing"
        priority={true}
        width={247}
        height={206}
      />
    </Link>,
    <Link key="unique-key-1" target="_blank" href="https://2021.hackdavis.io/">
      <Image
        className={styles.folder}
        src="/archive/2021.png"
        alt="thing"
        priority={true}
        width={247}
        height={206}
      />
    </Link>,
    <Link key="unique-key-1" target="_blank" href="https://2020.hackdavis.io/">
      <Image
        className={styles.folder}
        src="/archive/2020.png"
        alt="thing"
        priority={true}
        width={247}
        height={206}
      />
    </Link>,
    <Link key="unique-key-1" target="_blank" href="https://2019.hackdavis.io/">
      <Image
        className={styles.folder}
        src="/archive/2019.png"
        alt="thing"
        priority={true}
        width={247}
        height={206}
      />
    </Link>,
    <Link key="unique-key-1" target="_blank" href="https://2018.hackdavis.io/">
      <Image
        className={styles.folder}
        src="/archive/2018.png"
        alt="thing"
        priority={true}
        width={247}
        height={206}
      />
    </Link>,
    <Link key="unique-key-1" target="_blank" href="https://2017.hackdavis.io/">
      <Image
        className={styles.folder}
        src="/archive/2017.png"
        alt="thing"
        priority={true}
        width={247}
        height={206}
      />
    </Link>,
  ];
  return (
    <div className={styles.container}>
      <EmblaCarousel slides={elements} options={OPTIONS} />
    </div>
  );
}
