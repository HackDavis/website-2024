import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from './RightTree.module.scss';

import rightTree from 'public/index/RiverCow/right-tree.png';
import rightTreeShadow from 'public/index/RiverCow/right-tree-shadow.png';
import rightTreeReflection from 'public/index/RiverCow/right-tree-reflection.png';

export default function RightTree() {
  const viewRef = useRef<HTMLDivElement>(null);

  const [scrollDistance, setScrollDistance] = useState(0);

  const handleScroll = () => {
    const screenHeight = window.screen.height;
    if (viewRef.current) {
      const boundingRect = viewRef.current.getBoundingClientRect();
      const distance = screenHeight / 2 - boundingRect.y;
      setScrollDistance(
        Math.max(0, Math.min(distance, boundingRect.height * 3))
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container} ref={viewRef}>
      <Image
        src={rightTree}
        alt="Tree hanging over river."
        placeholder="blur"
        className={styles.right_tree}
        style={{ transform: `translateY(${scrollDistance * 0.2}px)` }}
        sizes="(min-width: 600px) 40vw, 215px"
      />
      <Image
        src={rightTreeShadow}
        alt="Tree hanging over river."
        placeholder="blur"
        className={styles.right_tree_shadow}
        style={{ transform: `translateY(${scrollDistance * 0.15}px)` }}
        sizes="(min-width: 600px) 40vw, 215px"
      />
      <Image
        src={rightTreeReflection}
        alt="Tree hanging over river."
        placeholder="blur"
        className={styles.right_tree_reflection}
        style={{ transform: `translateY(${scrollDistance * 0.12}px)` }}
        sizes="(min-width: 600px) 40vw, 215px"
      />
    </div>
  );
}
