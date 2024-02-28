'use client';
import styles from './Archive.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type arrowColors = {
  circleStroke: string;
  circleFill: string;
  pathStroke: string;
};

const allArrowColors = {
  gray: {
    circleStroke: '#B3B3B3',
    circleFill: '#DBDBDB',
    pathStroke: '#929292',
  },
  blue: {
    circleStroke: '#88D8DD',
    circleFill: '#9EE7E5',
    pathStroke: '#005271',
  },
};

export default function Archive() {
  // this represents how much we have moved our folders and scroll bar across the page
  // starts at 0 because at the beggining, we haven't clicked on any arrows to move the elements around
  const [scrollPosition, setScrollPosition] = useState(0);

  const [leftArrowColor, setLeftArrowColor] = useState(allArrowColors.gray);
  const [rightArrowColor, setRightArrowColor] = useState(allArrowColors.blue);

  const [scrollIndexFolders, setScrollIndexFolders] = useState(0);

  let viewportWidth = 0;

  if (typeof window !== 'undefined') {
    viewportWidth = window.innerWidth;
  }

  // This is used to calc how much to move the elements when scrolling,
  // was orginally 127.5 as a fixed pixel value
  // 75% of the vw is how long the progress bar is
  // 127.5 was 12% of the progress bar, so find 12% of it

  let pixelValue = 0;
  let scrollDistance = 0;

  if (viewportWidth > 768) {
    pixelValue = Math.min(1080, (75 * viewportWidth) / 100);
    pixelValue = (12 * pixelValue) / 100;

    // each element will move by this amount each time an arrow is hit
    scrollDistance = pixelValue; // was 127.57
  } else {
    pixelValue = (53 * viewportWidth) / 100;
    pixelValue = (12.5 * pixelValue) / 100;

    // each element will move by this amount each time an arrow is hit
    scrollDistance = pixelValue; // was 127.57
  }

  const mostLeftScrollPosition = -scrollDistance * 7;
  // this is the furthest right we can move the folders (starts like this)
  const mostRightScrollPosition = 0; // confirmed to always work

  const folderScrollDistance = 247;

  // this useEffect checks to see if we need to change the colors of the buttons
  useEffect(() => {
    // if we're at the start, the left arrow should be grayed out
    if (scrollPosition == 0) {
      setLeftArrowColor(allArrowColors.gray);
    } else {
      setLeftArrowColor(allArrowColors.blue);
    }

    // if we're at the end, the right arrow should be grayed out
    if (Math.round(scrollPosition) == Math.round(mostLeftScrollPosition)) {
      setRightArrowColor(allArrowColors.gray);
    } else {
      setRightArrowColor(allArrowColors.blue);
    }
  }, [scrollPosition, mostLeftScrollPosition]);

  // used to make the folders move left when the user hits RIGHT arrow
  const moveItemsLeft = () => {
    setScrollPosition(
      Math.max(mostLeftScrollPosition, scrollPosition - scrollDistance)
    );
    console.log('scroll position', scrollPosition);
    console.log('most left', mostLeftScrollPosition);
    console.log('scroll distance', scrollDistance);

    setScrollIndexFolders(Math.max(-7, scrollIndexFolders - 1));
  };

  // used to make the folders move right when the user hits LEFT arrow
  const moveItemsRight = () => {
    setScrollPosition(
      Math.min(mostRightScrollPosition, scrollPosition + scrollDistance)
    );

    console.log('hit left', scrollPosition);
    console.log('most right', mostRightScrollPosition);


    setScrollIndexFolders(Math.min(0, scrollIndexFolders + 1));
  };

  /*
  ****IMPORTANT****
    These functions that deal with translation are directly tied to the folders.
    The same math is used for the movement of the progress bar, but it's inversed(*-1) because
    the progress bar moves in the opposite direction of the folders
  ****IMPORTANT****
  */

  return (
    <div className={styles.container}>
      <div className={styles.topLine}>
        <p className={styles.text}>From the archive</p>
        <div className={styles.arrowContainer}>
          <div className={styles.leftArrow} onClick={moveItemsRight}>
            <LeftArrow arrowColors={leftArrowColor} />
          </div>

          <div className={styles.rightArrow} onClick={moveItemsLeft}>
            <RightArrow arrowColors={rightArrowColor} />
          </div>
        </div>
      </div>

      <div className={styles.carousel}>
        <Link href="https://2023.hackdavis.io/">
          <Image
            className={styles.folder}
            src="/archive/2023.png"
            alt="thing"
            priority={true}
            width={247}
            height={206}
            style={{
              transform: `translateX(${
                scrollIndexFolders * folderScrollDistance
              }px)`,
            }}
          />
        </Link>

        <Link href="https://2022.hackdavis.io/">
          <Image
            className={styles.folder}
            src="/archive/2022.png"
            alt="thing"
            loading="lazy"
            width={247}
            height={206}
            style={{
              transform: `translateX(${
                scrollIndexFolders * folderScrollDistance
              }px)`,
            }}
          />
        </Link>

        <Link href="https://2021.hackdavis.io/">
          <Image
            className={styles.folder}
            src="/archive/2021.png"
            alt="thing"
            loading="lazy"
            width={247}
            height={206}
            style={{
              transform: `translateX(${
                scrollIndexFolders * folderScrollDistance
              }px)`,
            }}
          />
        </Link>

        <Link href="https://2020.hackdavis.io/">
          <Image
            className={styles.folder}
            src="/archive/2020.png"
            alt="thing"
            loading="lazy"
            width={247}
            height={206}
            style={{
              transform: `translateX(${
                scrollIndexFolders * folderScrollDistance
              }px)`,
            }}
          />
        </Link>

        <Link href="https://2019.hackdavis.io/">
          <Image
            className={styles.folder}
            src="/archive/2019.png"
            alt="thing"
            loading="lazy"
            width={247}
            height={206}
            style={{
              transform: `translateX(${
                scrollIndexFolders * folderScrollDistance
              }px)`,
            }}
          />
        </Link>

        <Link href="https://2018.hackdavis.io/">
          <Image
            className={styles.folder}
            src="/archive/2018.png"
            alt="thing"
            loading="lazy"
            width={247}
            height={206}
            style={{
              transform: `translateX(${
                scrollIndexFolders * folderScrollDistance
              }px)`,
            }}
          />
        </Link>

        <Link href="https://2017.hackdavis.io/">
          <Image
            className={styles.folder}
            src="/archive/2017.png"
            alt="thing"
            loading="lazy"
            width={247}
            height={206}
            style={{
              transform: `translateX(${
                scrollIndexFolders * folderScrollDistance
              }px)`,
            }}
          />
        </Link>
      </div>

      <div className={styles.bar}>
        <div
          className={styles.progress}
          style={{ transform: `translateX(${scrollPosition * -1}px)` }}
        ></div>
      </div>

      {/*used for mobile progress bar */}
      <div className={styles.mobileProgressBar}>
        <div className={styles.leftArrow} onClick={moveItemsRight}>
          <LeftArrowMobile arrowColors={leftArrowColor} />
        </div>

        <div className={styles.bar}>
          <div
            className={styles.progress}
            style={{ transform: `translateX(${scrollPosition * -1}px)` }}
          ></div>
        </div>

        <div className={styles.rightArrow} onClick={moveItemsLeft}>
          <RightArrowMobile arrowColors={rightArrowColor} />
        </div>
      </div>
    </div>
  );
}

function LeftArrow(props: { arrowColors: arrowColors }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 34 34"
        fill="none"
      >
        <circle
          cx="17"
          cy="17"
          r="16.5"
          fill={props.arrowColors.circleFill}
          stroke={props.arrowColors.circleStroke}
        />
        <path
          d="M19 12L14 16.2857L19 21"
          stroke={props.arrowColors.pathStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function RightArrow(props: { arrowColors: arrowColors }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 34 35"
        fill="none"
      >
        <circle
          cx="17"
          cy="17"
          r="16.5"
          transform="matrix(-1 0 0 1 34 0.0136719)"
          fill={props.arrowColors.circleFill}
          stroke={props.arrowColors.circleStroke}
        />
        <path
          d="M15 12.0137L20 16.2994L15 21.0137"
          stroke={props.arrowColors.pathStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function LeftArrowMobile(props: { arrowColors: arrowColors }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
      >
        <circle
          cx="17"
          cy="17"
          r="16.5"
          fill={props.arrowColors.circleFill}
          stroke={props.arrowColors.circleStroke}
        />
        <path
          d="M19 12L14 16.2857L19 21"
          stroke={props.arrowColors.pathStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function RightArrowMobile(props: { arrowColors: arrowColors }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 34 35"
        fill="none"
      >
        <circle
          cx="17"
          cy="17"
          r="16.5"
          transform="matrix(-1 0 0 1 34 0.0136719)"
          fill={props.arrowColors.circleFill}
          stroke={props.arrowColors.circleStroke}
        />
        <path
          d="M15 12.0137L20 16.2994L15 21.0137"
          stroke={props.arrowColors.pathStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
