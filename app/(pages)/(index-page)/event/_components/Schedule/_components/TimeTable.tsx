import { calcEventRows, generate24HRClock } from './Calculations';
import { getAllEvents } from '@/app/(api)/_actions/events/getEvents';
import type { TimeChunk } from './Schedule.types';

interface TimeTableProps {
  timeChunks: TimeChunk[];
  startTime: Date;
}

const colorActivities: Record<string, string> = {
  Activity: '#60A5FA', // Blue
  Menu: '#34D399', // Green
  Workshop: '#FBBF24', // Yellow
};

const rowSize = '50px';
export default function TimeTable({ timeChunks, startTime }: TimeTableProps) {
  const clockTimes = generate24HRClock(startTime);

  return (
    <main className="">
      <div
        className="tw-grid tw-grid-cols-2 tw-border-4 tw-border-black"
        style={{
          gridTemplateColumns: '1fr 5fr',
          gridAutoRows: rowSize,
        }}
      >
        {clockTimes.map((time, index) => (
          <div
            key={index}
            className="tw-col-start-1 tw-border tw-border-purple-500"
          >
            {time.getHours()}:{time.getMinutes()}
          </div>
        ))}

        {timeChunks.map((timeChunk) => {
          const timeChunkStartRow = clockTimes.findIndex(
            (time) => time.getTime() === timeChunk.startTime.getTime()
          );
          const timeChunkEndRow = clockTimes.findIndex(
            (time) => time.getTime() === timeChunk.endTime.getTime()
          );

          return (
            <div
              key={timeChunk.startTime.getTime()}
              className={`tw-col-start-2 tw-grid tw-h-full tw-border-4 tw-border-blue-400`}
              style={{
                gridRowStart: timeChunkStartRow + 1,
                gridRowEnd: timeChunkEndRow + 1,
                gridAutoRows: rowSize,
              }}
            >
              {timeChunk.eventBlocks.map((event, event_index) => (
                <div
                  key={event.title}
                  className="tw-flex tw-flex-col tw-rounded-3xl tw-border tw-border-black tw-p-3"
                  style={{
                    ...calcEventRows(event, timeChunk.startTime),
                    backgroundColor: colorActivities[event.type],
                  }}
                >
                  <div className="tw-flex">
                    <span>{event.title}</span>
                  </div>
                  <div className="tw-flex tw-gap-4">
                    <span>
                      {event.startTime.getHours()}:
                      {event.startTime.getMinutes()}
                    </span>
                    <span>
                      {event.endTime.getHours()}:{event.endTime.getMinutes()}
                    </span>
                    <span>Event #{event_index + 1}</span>
                    <p>{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </main>
  );
}
