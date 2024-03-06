'use client';
import styles from './Loader.module.scss';
import { useLoadCount } from '@hooks/useLoadCount';
import Skeleton from './Skeleton';

export default function Loader({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { loading } = useLoadCount();

  return (
    <>
      <div className={`${styles.container} ${!loading ? styles.hidden : null}`}>
        <Skeleton />
      </div>
      <div
        className={`${styles.child_container} ${
          loading ? styles.no_scroll : null
        }`}
      >
        {children}
      </div>
    </>
  );
}
