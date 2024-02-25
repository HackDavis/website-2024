import Clouds from '../Clouds/Clouds';
import Form from '../Form/Form';
import Grass from '../Grass/Grass';
import styles from './landing.module.scss';

export default function Landing() {
  return (
    <main>
      <div className={styles.clouds}>
        <Clouds />
      </div>
      <div className={styles.grass}>
        <Grass />
      </div>
      <div className={styles.form}>
        <Form />
      </div>
    </main>
  );
}
