import Clouds from './_components/Hero/Clouds';
import Form from './_components/Form/Form';
import Grass from './_components/Grass/Grass';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <div className={styles.clouds}>
        <Clouds />
      </div>
      <div className={styles.grass}>
        <Grass />
      </div>
      <div className={styles.form}>
        <Form />
      </div>
    </div>
  );
}
