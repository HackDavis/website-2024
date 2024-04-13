import { calcEventRows, generate24HRClock } from './Calculations';
import EventContent from './_components/EventContent';
import type { TimeChunk } from './Schedule.types';

interface TimeTableProps {
  timeChunks: TimeChunk[];
  startTime: Date;
}

const colorActivities: Record<string, string> = {
  Activity: '#E2F8F7', // Blue
  Menu: '#D6E8AA', // Green
  Workshop: '#FFE29E', // Yellow
};

const rowSize = '50px';
export default function TimeTable({ timeChunks, startTime }: TimeTableProps) {
  const clockTimes = generate24HRClock(startTime);

  return (
    <main className="">
      <div
        className="tw-grid tw-grid-cols-2 tw-border-4 tw-border-black"
        style={{
          gridTemplateColumns: '1fr 9fr',
          gridAutoRows: rowSize,
        }}
      >
        {clockTimes.map((time, index) => {
          const isHour = time.getMinutes() === 0;
          return (
            <div
              key={index}
              className={`tw-col-start-1 tw-border tw-border-purple-500 ${
                !isHour ? 'tw-border-b-0 tw-border-t-0' : ''
              }`}
            >
              {isHour ? `${time.getHours()}:${time.getMinutes()}` : ''}
            </div>
          );
        })}

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
              className={`tw-col-start-2 tw-grid tw-h-full`}
              style={{
                gridRowStart: timeChunkStartRow + 1,
                gridRowEnd: timeChunkEndRow + 1,
                gridAutoRows: rowSize,
              }}
            >
              {timeChunk.eventBlocks.map((event) => (
                <div
                  key={event.title}
                  className="tw-flex tw-flex-col tw-rounded-3xl tw-border tw-border-black tw-p-3"
                  style={{
                    ...calcEventRows(event, timeChunk.startTime),
                    backgroundColor: colorActivities[event.type],
                  }}
                >
                  <EventContent {...event} />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </main>
  );
}
