import styles from './RightTree.module.scss';
import Image from 'next/image';

import rightTree from 'public/index/RiverCow/right-tree.png';
import rightTreeShadow from 'public/index/RiverCow/right-tree-shadow.png';
import rightTreeReflection from 'public/index/RiverCow/right-tree-reflection.png';

export default function RightTree() {
  return (
    <div className={styles.container}>
      <Image
        src={rightTree}
        alt="Tree hanging over river."
        placeholder="blur"
        className={styles.right_tree}
      />
      <Image
        src={rightTreeShadow}
        alt="Tree hanging over river."
        placeholder="blur"
        className={styles.right_tree_shadow}
      />
      <Image
        src={rightTreeReflection}
        alt="Tree hanging over river."
        placeholder="blur"
        className={styles.right_tree_reflection}
      />
    </div>
  );
}
