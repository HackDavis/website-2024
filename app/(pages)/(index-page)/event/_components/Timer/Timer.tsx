import Clouds from './_components/Clouds/Clouds';
//import Form from './_components/Form/Form';
import Grass from './_components/Grass/Grass';
import styles from './Timer.module.scss';

export default function Timer() {
  return (
    <div className={styles.landing_container}>
      <div className={styles.clouds}>
        <Clouds />
      </div>
      <div className={styles.grass}>
        <Grass />
      </div>
    </div>
  );
}
