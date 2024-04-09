import { Event, TimeChunk } from './Schedule.types';

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
    }

    const latestTimeChunk = timeChunks[timeChunks.length - 1];
    const latestEvent =
      latestTimeChunk.eventBlocks[latestTimeChunk.eventBlocks.length - 1];

    if (cur_event.startTime.getTime() < latestEvent.endTime.getTime()) {
      latestTimeChunk.eventBlocks.push(cur_event);

      if (cur_event.endTime.getTime() > latestTimeChunk.endTime.getTime()) {
        latestTimeChunk.endTime = cur_event.endTime;
      }
    } else {
      timeChunks.push({
        startTime: cur_event.startTime,
        endTime: cur_event.endTime,
        eventBlocks: [cur_event],
      });
    }
  }

  return timeChunks;
}
