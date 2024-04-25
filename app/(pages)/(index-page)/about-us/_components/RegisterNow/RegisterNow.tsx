import styles from './RegisterNow.module.scss';
import Image from 'next/image';
import Link from 'next/link';
export default function RegisterNow() {
  return (
    <div className={styles.container}>
      <div className={styles.duckWithBunny}>
        <Image
          src="/registerNow/duck.svg"
          alt="hackdavis Logo"
          width={59.1}
          height={59.1}
          className={styles.duck}
        />
        <Image
          src="/registerNow/bunny.svg"
          alt="hackdavis Logo"
          width={152.7}
          height={175.4}
          className={styles.bunny}
        />
      </div>

      <div className={styles.textContent}>
        <h1 className={styles.text}>
          Ready to create for{' '}
          <span className={styles.socialGood}>social good?</span>
        </h1>
        <Link
          target="_blank"
          href={'https://form.typeform.com/to/RvoDiujh?utm_source=WEBSITE'}
        >
          {' '}
          <button className={styles.registerNow}>Register Now</button>
        </Link>
      </div>

      <Image
        src="/registerNow/Froggy.png"
        alt="hackdavis Logo"
        width={232.115}
        height={378.818}
        className={styles.frog}
      />
    </div>
  );
}
