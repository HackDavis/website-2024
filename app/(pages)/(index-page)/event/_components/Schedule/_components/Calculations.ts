import type { Event } from './Schedule.types';

function getQuarterHourIntervals(startTime: Date, endTime: Date): number {
  const diffInMinutes = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
  return Math.ceil(diffInMinutes / 15);
}

export function calcEventRows(
  event: Event,
  startOfTimeChunk: Date
): { gridRowStart: number; gridRowEnd: number } {
  const gridRowStart =
    getQuarterHourIntervals(startOfTimeChunk, event.startTime) + 1;
  const gridRowEnd =
    getQuarterHourIntervals(startOfTimeChunk, event.endTime) + 1;
  return { gridRowStart, gridRowEnd };
}

export function generateClock(startTime: Date, endTime: Date): string[] {
  const clock: string[] = [];
  const totalHours = Math.ceil(
    (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60)
  );

  for (
    let i = startTime.getHours();
    i < startTime.getHours() + totalHours;
    i++
  ) {
    clock.push(`${i % 24}:00`);
  }

  return clock;
}
