import { calcEventRows, generate24HRClock } from './Calculations';
import EventContent from './_components/EventContent';
import type { TimeChunk } from '../../../../../../public/types/Schedule.types';

interface TimeTableProps {
  timeChunks: TimeChunk[];
  startTime: Date;
}

const colorActivities: Record<string, string> = {
  Food: '#FFD6A5', // Orange
  Workshop: '#E2F8F7', // Blue
  General: '#D6E8AA', // Green
  Activity: '#CF9FFF', // Purple
  Hacking: '#F7A2A2', // Red
};

const highlightColor: Record<string, string> = {
  Food: '#E6BC8A', // Orange
  Workshop: '#9EE7E5', // Blue
  General: '#AFD157', // Green
  Activity: '#A560FF', // Darkened Purple
  Hacking: '#D17878', // Darkened Red
};

const rowSize = '50px';

export default function TimeTable({ timeChunks, startTime }: TimeTableProps) {
  const clockTimes = generate24HRClock(startTime);

  return (
    <main className="tw-w-full">
      <div
        className="tw-grid tw-w-full tw-grid-cols-2 "
        style={{
          gridTemplateColumns: '1fr 15fr',
          gridAutoRows: rowSize,
        }}
      >
        {clockTimes.map((time, index) => {
          const isHour = time.getMinutes() === 0;
          return (
            <div
              key={index}
              className={`tw-col-start-1 ${
                !isHour ? 'tw-border-b-0 tw-border-t-0' : ''
              }`}
            >
              {isHour ? (
                <div className="tw-pr-2">
                  <div className="tw-absolute tw-inset-x-0 tw-z-0 tw-border-t tw-border-gray-200" />
                  <div className="tw-flex tw-gap-2 tw-text-xs tw-font-semibold tw-text-gray-500 md:tw-text-base">
                    <span>
                      {time.getHours() % 12 === 0 ? 12 : time.getHours() % 12}
                    </span>
                    <span>{time.getHours() > 11 ? 'PM' : 'AM'}</span>
                  </div>
                </div>
              ) : (
                ''
              )}
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
              className={`tw-col-start-2 tw-grid tw-w-full tw-overflow-x-auto tw-overflow-y-hidden`}
              style={{
                gridRowStart: timeChunkStartRow + 1,
                gridRowEnd: timeChunkEndRow + 1,
                gridAutoRows: rowSize,
              }}
            >
              {timeChunk.eventBlocks.map((event, event_index) => (
                <div
                  key={event_index}
                  className="tw-flex tw-flex-col tw-rounded-xl tw-border-t-2 tw-p-3"
                  style={{
                    ...calcEventRows(event, timeChunk.startTime),
                    backgroundColor: colorActivities[event.type],
                    borderLeft: `5px solid ${highlightColor[event.type]}`,
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
