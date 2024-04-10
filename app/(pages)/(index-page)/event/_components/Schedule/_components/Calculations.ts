import type { Event } from './Schedule.types';
const startOfDay = new Date();
startOfDay.setHours(9, 0, 0, 0);

function getQuarterHourIntervals(startTime: Date, endTime: Date): number {
  const diffInMinutes = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
  return Math.ceil(diffInMinutes / 15);
}

export function calcRow(
  event: Event,
  startOfDay: Date
): { gridRowStart: number; gridRowEnd: number } {
  const gridRowStart = getQuarterHourIntervals(startOfDay, event.startTime) + 1;
  const gridRowEnd = getQuarterHourIntervals(startOfDay, event.endTime) + 1;
  return { gridRowStart, gridRowEnd };
}
