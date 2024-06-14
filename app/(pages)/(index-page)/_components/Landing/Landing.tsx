import Clouds from './_components/Clouds/Clouds';
import Form from './_components/Form/Form';
import Grass from './_components/Grass/Grass';
import styles from './Landing.module.scss';

export default function Landing() {
  return (
    <main className="">
      <div className={styles.landing_container}>
        <div className="tw-absolute tw-left-20 tw-top-1/4 tw-z-10">
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
