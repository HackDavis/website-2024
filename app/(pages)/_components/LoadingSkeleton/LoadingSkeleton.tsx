import styles from './LoadingSkeleton.module.scss';
export default function LoadingSkeleton() {
  return (
    <div className={styles.container}>
      <h1>Loading...</h1>
    </div>
  );
}
