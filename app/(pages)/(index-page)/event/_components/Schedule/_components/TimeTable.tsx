import type { TimeTableType } from '../Schedule';

export default function TimeTable(timeTable: TimeTableType) {
  const startTime = 9; // 9:00 AM
  return (
    <main className="tw-w-full tw-border tw-border-red-400">
      {Array.from({ length: timeTable.maxTimeSlots }).map((_, index) => {
        const time = (startTime + index) % 24;
        const blocksAtThisTime = timeTable.scheduleBlocks.filter(
          (block) => block.dateTime.getHours() === time
        );
        return (
          <div
            key={index}
            className="tw-flex tw-w-full tw-border tw-border-pink-300"
          >
            <span>{time}:00</span>
            {blocksAtThisTime.map((block) => (
              <div
                key={block.title}
                className="tw-border-purple tw-mb-3 tw-flex tw-h-20 tw-w-full tw-flex-col tw-items-center tw-justify-between tw-gap-3 tw-border tw-bg-gray-100 tw-p-3"
              >
                <div>
                  <span>{block.title}</span>
                  <span>{block.description}</span>
                </div>
                <div>
                  <span>{block.location}</span>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </main>
  );
}
