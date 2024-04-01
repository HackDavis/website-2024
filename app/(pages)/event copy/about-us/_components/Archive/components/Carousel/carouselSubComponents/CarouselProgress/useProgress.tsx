'use client';
import { useState, useEffect, useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

export const useProgress = (emblaApi: any) => {
  // used to move the progress bar as the user moves through the carousel
  const [scrollProgress, setScrollProgress] = useState(0);

  /* This tracks how far we have moved in the carousel, and
   * the progress value is stored to moved the progress bar
   * because the bar is separate from the actual carousel. */

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);
  }, []);

  /* calls the onScroll function to update the scroll progress
   * whenever progress changes from the user moving it */

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
  }, [emblaApi, onScroll]);

  /* When the user clicks somewhere on the progress bar, it will
   * move the carousel to that position. 

   * This function calculates which part of the bar the user 
   * clicked and uses the emblaApi to manually
   * scroll the carousel to the corresponding location.

   * By updating the scroll position of the carousel, it also
   * updates the scroll position of the progress bar thanks to the useEffect defined above. */

  const handleProgressBarClick = (event: any) => {
    const progressBarWidth = event.target.offsetWidth;
    const clickedProgressPixels = event.nativeEvent.offsetX;
    const clickedProgressPercent = clickedProgressPixels / progressBarWidth;

    if (!emblaApi) return;
    const snapList = emblaApi.scrollSnapList();
    const indexToMoveTo = Math.floor(snapList.length * clickedProgressPercent);
    emblaApi.scrollTo(indexToMoveTo);
  };

  return { scrollProgress, handleProgressBarClick };
};
