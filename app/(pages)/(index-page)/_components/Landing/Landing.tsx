import Clouds from './_components/Clouds/Clouds';
import Grass from './_components/Grass/Grass';
import styles from './Landing.module.scss';
import NewForm from './NewForm';

export default function Landing() {
  return (
    <main className="">
      <div className={styles.landing_container}>
        <div className="tw-absolute tw-left-1/2 tw-top-[20%] tw-z-[13] tw--translate-x-1/2 max-sm:tw-top-1/4 max-sm:tw-flex max-sm:tw--translate-y-1/2 max-sm:tw-items-center max-sm:tw-justify-center">
          <NewForm />
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
