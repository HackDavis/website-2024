'use client';
import styles from './Loader.module.scss';
import { useLoadCount } from '@hooks/useLoadCount';

export default function Loader() {
  const { numLoaded, loading } = useLoadCount();
  return (
    <div className={`${styles.container} ${!loading ? styles.hidden : null}`}>
      LOADING! ARGHHHH {numLoaded}
    </div>
  );
}
