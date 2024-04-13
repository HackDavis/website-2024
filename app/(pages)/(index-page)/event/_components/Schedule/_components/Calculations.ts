import type {
  Event,
  TimeChunk,
} from '../../../../../../../public/types/Schedule.types';

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

export function generate24HRClock(startTime: Date): Date[] {
  const times: Date[] = [];
  const endTime = new Date(startTime);
  endTime.setDate(startTime.getDate() + 1);
  let current = new Date(startTime);
  while (current <= endTime) {
    times.push(current);
    current = new Date(current.getTime() + 15 * 60000);
  }

  return times;
}

export function createTimeChunks(events: Event[]): TimeChunk[] {
  const timeChunks: TimeChunk[] = [];

  const sortedEvents = events.sort(
    (a, b) => a.startTime.getTime() - b.startTime.getTime()
  );

  for (const cur_event of sortedEvents) {
    if (timeChunks.length === 0) {
      timeChunks.push({
        startTime: cur_event.startTime,
        endTime: cur_event.endTime,
        eventBlocks: [cur_event],
      });
    } else {
      const latestTimeChunk = timeChunks[timeChunks.length - 1];

      if (cur_event.startTime.getTime() >= latestTimeChunk.endTime.getTime()) {
        timeChunks.push({
          startTime: cur_event.startTime,
          endTime: cur_event.endTime,
          eventBlocks: [cur_event],
        });
      } else {
        latestTimeChunk.eventBlocks.push(cur_event);

        if (cur_event.endTime.getTime() > latestTimeChunk.endTime.getTime()) {
          latestTimeChunk.endTime = cur_event.endTime;
        }
      }
    }
  }

  return timeChunks;
}
