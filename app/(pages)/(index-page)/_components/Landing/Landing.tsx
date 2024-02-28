import Clouds from '../Clouds/Clouds';
import Form from '../Form/Form';
import Grass from '../Grass/Grass';
import styles from './Landing.module.scss';
import styles from './Landing.module.scss';

export default function Landing() {
  return (
    <main>
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
