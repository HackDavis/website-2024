import { calcEventRows, generateClock } from './Calculations';
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

export default function TimeTable({ timeChunks, startTime }: TimeTableProps) {
  const endTime = new Date(startTime);
  endTime.setDate(startTime.getDate() + 1);

  const clockTimes = generateClock(startTime, endTime);

  return (
    <main className="">
      <div className="">
        <div
          className="tw-grid tw-grid-cols-2 tw-border-4 tw-border-black"
          style={{
            gridTemplateRows: `repeat(${clockTimes.length}, 1fr)`,
          }}
        >
          {clockTimes.map((time, index) => (
            <div
              key={index}
              className="tw-col-start-1 tw-border tw-border-purple-500"
            >
              {time}
            </div>
          ))}
          {timeChunks.map((timeChunk) => {
            const timeChunkStartRow = clockTimes.indexOf(
              `${timeChunk.startTime.getHours()}:00`
            );
            const timeChunkEndRow = clockTimes.indexOf(
              `${timeChunk.endTime.getHours()}:00`
            );
            return (
              <div
                key={timeChunk.startTime.getTime()}
                className={`tw-col-start-2 tw-w-full`}
                style={{
                  gridRowStart: timeChunkStartRow + 1,
                  gridRowEnd: timeChunkEndRow + 2,
                }}
              >
                <div
                  className={`tw-grid tw-w-full tw-border tw-border-blue-300`}
                  style={{ gridTemplateRows: 'repeat(8, 1fr)' }}
                >
                  {timeChunk.eventBlocks.map((event, event_index) => (
                    <div
                      key={event.title}
                      className="tw-flex tw-flex-col tw-rounded-3xl tw-border tw-border-black tw-bg-gray-400 tw-p-3"
                      style={{
                        ...calcEventRows(event, timeChunk.startTime),
                        backgroundColor: colorActivities[event.type],
                      }}
                    >
                      <span>Event #{event_index + 1}</span>
                      <span>{event.title}</span>
                      <p>{event.location}</p>
                      <p>
                        {event.startTime.getHours()}:
                        {event.startTime.getMinutes()}
                      </p>
                      <p>
                        {event.endTime.getHours()}:{event.endTime.getMinutes()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
