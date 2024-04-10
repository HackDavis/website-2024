import { calcRow } from './Calculations';
import type { TimeChunk } from './Schedule.types';

interface TimeTableProps {
  timeChunks: TimeChunk[];
}

const colorActivities: Record<string, string> = {
  Activity: '#60A5FA', // Blue
  Menu: '#34D399', // Green
  Workshop: '#FBBF24', // Yellow
};

export default function TimeTable({ timeChunks }: TimeTableProps) {
  return (
    <main className="">
      <div className="">
        {timeChunks.map((timeChunk, index) => (
          <div
            key={timeChunk.startTime.getTime()}
            className={`tw-flex tw-w-full tw-flex-col tw-border tw-border-red-300 tw-p-3`}
          >
            <span>TimeChunk: {index}</span>
            <span>Contains: {timeChunk.eventBlocks.length} Events</span>
            <div
              className={`tw-grid tw-gap-3 tw-border tw-border-purple-300`}
              style={{
                gridTemplateColumns: 'auto',
              }}
            >
              {timeChunk.eventBlocks.map((event, event_index) => (
                <div
                  key={event.title}
                  className="tw-flex tw-flex-col tw-rounded-3xl tw-border tw-border-black tw-bg-gray-400 tw-p-3"
                  style={{
                    ...calcRow(event, timeChunk.startTime),
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
          </div>
        ))}
      </div>
    </main>
  );
}
