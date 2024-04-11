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

export function calcCol(
  cur_event: Event,
  all_events: Event[]
): {
  gridColumnStart?: number;
  gridColumnEnd?: number;
} {
  for (const other_event of all_events) {
    if (other_event == cur_event) {
      continue;
    } else {
      return {};
    }
  }
  return {};
}

export function generateStaticTime(startTime: Date, endTime: Date): string[] {
  const hours: string[] = [];

  for (let i = startTime.getHours(); i < endTime.getHours(); i++) {
    hours.push(`${i}:00`);
    hours.push(`${i}:15`);
    hours.push(`${i}:30`);
    hours.push(`${i}:45`);
  }
  hours.push(`${endTime.getHours()}:00`);
  return hours;
}
