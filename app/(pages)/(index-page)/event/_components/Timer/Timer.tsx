import Clouds from '../../../_components/Landing/_components/Clouds/Clouds';
import Grass from '../../../_components/Landing/_components/Grass/Grass';
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
