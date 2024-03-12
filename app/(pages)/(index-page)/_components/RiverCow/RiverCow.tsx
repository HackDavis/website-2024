import styles from './RiverCow.module.scss';
import Image from 'next/image';

import baseTree from 'public/index/RiverCow/base-tree.png';
import riverCow from 'public/index/RiverCow/river-cow.png';
import RightTree from './RightTree';

export default function RiverCow() {
  return (
    <div className={styles.container}>
      <div className={styles.top_leaf_layer}>
        <div className={styles.top_text}>
          <h3>
            HackDavis is <br />
            for everyone.
          </h3>
          <p>
            Whether you are a seasoned hacker or exploring whether tech is a
            good fit for you, we invite you to join us!
          </p>
        </div>
        <RightTree />
      </div>
      <div className={styles.river_cow_container}>
        <Image
          src={riverCow}
          alt="Cow sitting on rock reminiscing on past adventures by looking at polaroids."
          placeholder="blur"
          className={styles.river_cow}
          sizes="(min-width: 780px) 600px, 300px"
        />
      </div>
      <div className={styles.bottom_text}>
        <h3>
          HackDavis is <br />
          for everyone.
        </h3>
        <p>
          Whether you are a seasoned hacker or exploring whether tech is a good
          fit for you, we invite you to join us!
        </p>
        <p>
          Creators from all backgrounds are
          <br /> welcome at HackDavis— no coding
          <br />
          or previous experience required.
        </p>
      </div>
      <div className={styles.base_tree_container}>
        <Image
          src={baseTree}
          alt="Forest of trees sitting at base of river, forming a wall."
          placeholder="blur"
          sizes="100vw"
          className={styles.base_tree}
        />
      </div>
    </div>
  );
}
