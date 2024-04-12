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
          const timeChunkEndRow =
            clockTimes.indexOf(timeChunk.endTime.getHours()) +
            (timeChunk.endTime.getMinutes() > 0 ? 1 : 0);

          const timeChunkStartHour = new Date(timeChunk.startTime);
          timeChunkStartHour.setMinutes(0, 0, 0);
          return (
            <div
              key={timeChunk.startTime.getTime()}
              className={`tw-col-start-2 tw-grid tw-border-4 tw-border-blue-600`}
              style={{
                gridRowStart: timeChunkStartRow + 1,
                gridRowEnd: timeChunkEndRow + 1,
                gridAutoRows: '25px',
              }}
            >
              {timeChunk.eventBlocks.map((event, event_index) => (
                <div
                  key={event.title}
                  className="tw-flex tw-flex-col tw-rounded-3xl tw-border tw-border-black tw-p-3"
                  style={{
                    ...calcEventRows(event, timeChunkStartHour),
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
