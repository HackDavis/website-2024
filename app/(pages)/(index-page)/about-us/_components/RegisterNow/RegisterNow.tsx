import styles from './RegisterNow.module.scss';
import Image from 'next/image';
import Link from 'next/link';
export default function RegisterNow() {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1 className={styles.text}>Ready to create for social good?</h1>
        <Link
          target="_blank"
          href={'https://form.typeform.com/to/RvoDiujh?utm_source=WEBSITE'}
        >
          {' '}
          <button className={styles.registerNow}>Register Now</button>
        </Link>
      </div>

      <Image
        src="/index/Everyone/river_cow-on-rock.png"
        alt="hackdavis Logo"
        width={1000}
        height={1000}
        className={styles.cowSit}
      />
    </div>
  );
}
