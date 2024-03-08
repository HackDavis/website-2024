import Clouds from './_components/Clouds/Clouds';
import Form from './_components/Form/Form';
import Grass from './_components/Grass/Grass';
import styles from './Landing.module.scss';

export default function Landing() {
  return (
    <main className={styles.landing}>
      <div className={styles.landing_container}>
        <div className={styles.form}>
          <Form />
        </div>
        <div className={styles.clouds}>
          <Clouds />
        </div>
        <div className={styles.grass}>
          <Grass />
        </div>
      </div>
    </main>
  );
}
