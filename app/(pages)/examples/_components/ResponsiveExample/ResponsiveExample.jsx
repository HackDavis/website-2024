import styles from './ResponsiveExample.module.scss';

export default function ResponsiveExample() {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className={styles.group}>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </div>
  );
}
