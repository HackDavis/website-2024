import Clouds from '@landingComponents/Clouds/Clouds';
import Grass from '@landingComponents/Grass/Grass';
import styles from './LandingEvent.module.scss';

import Timer from '../Timer/Timer';

export default function LandingEvent() {
  return (
    <main className={styles.landing}>
      <div className={styles.landing_container}>
        <div className={styles.form}>
          <Timer />
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
