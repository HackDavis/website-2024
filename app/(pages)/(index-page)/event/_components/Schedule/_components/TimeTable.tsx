import type { TimeChunk } from './Schedule.types';

interface TimeTableProps {
  timeChunks: TimeChunk[];
}

export default function TimeTable({ timeChunks }: TimeTableProps) {
  return (
    <main className="">
      <div className="">
        {timeChunks.map((timeChunk, index) => (
          <div key={timeChunk.startTime.getTime()} className="tw-p-3">
            <h2>TimeChunk: {index}</h2>
            <div className="tw-flex tw-gap-3">
              {timeChunk.eventBlocks.map((event) => (
                <div
                  key={event.title}
                  className="tw-rounded-lg tw-border tw-border-black tw-p-3"
                >
                  <h3>{event.title}</h3>
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
        {timeChunks.map((timeChunk, index) => (
          <div key={timeChunk.startTime.getTime()} className="tw-p-3">
            <div className="tw-flex tw-flex-col">
              {timeChunk.eventBlocks.map((event) => (
                <div key={event.title} className="tw-flex">
                  <span>{event.startTime.getHours()}</span>
                  <div className="tw-flex tw-w-full tw-flex-grow tw-border-red-300">
                    <div className=""></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
