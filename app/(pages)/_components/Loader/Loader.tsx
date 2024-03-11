'use client';
import styles from './Loader.module.scss';
import { useLoadCount } from '@hooks/useLoadCount';
import Skeleton from './Skeleton';

export default function Loader() {
  const { loading } = useLoadCount();

  return (
    <div className={`${styles.container} ${!loading ? styles.hidden : null}`}>
      <Skeleton />
    </div>
  );
}
