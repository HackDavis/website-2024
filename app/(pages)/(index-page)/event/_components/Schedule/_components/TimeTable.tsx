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
      <div
        className="tw-grid tw-grid-cols-2 tw-border-4 tw-border-black"
        style={{
          gridTemplateColumns: '1fr 5fr',
          gridAutoRows: '1fr',
        }}
      >
        {clockTimes.map((time, index) => (
          <div
            key={index}
            className="tw-col-start-1 tw-border tw-border-purple-500"
          >
            {time}:00
          </div>
        ))}

        {timeChunks.map((timeChunk) => {
          const timeChunkStartRow = clockTimes.indexOf(
            timeChunk.startTime.getHours()
          );
          const timeChunkEndRow = clockTimes.indexOf(
            timeChunk.endTime.getHours()
          );
          return (
            <div
              key={timeChunk.startTime.getTime()}
              className={`tw-col-start-2 tw-grid tw-border-4 tw-border-black`}
              style={{
                gridRowStart: timeChunkStartRow + 1,
                gridRowEnd: timeChunkEndRow + 1,
                gridAutoRows: '1fr',
              }}
            >
              {timeChunk.eventBlocks.map((event, event_index) => (
                <div
                  key={event.title}
                  className="tw-flex tw-flex-col tw-rounded-3xl tw-border tw-p-3"
                  style={{
                    ...calcEventRows(event, timeChunk.startTime),
                    backgroundColor: colorActivities[event.type],
                  }}
                >
                  <span>Event #{event_index + 1}</span>
                  <span>{event.title}</span>
                  <p>{event.location}</p>
                  <p>
                    {event.startTime.getHours()}:{event.startTime.getMinutes()}
                  </p>
                  <p>
                    {event.endTime.getHours()}:{event.endTime.getMinutes()}
                  </p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </main>
  );
}
