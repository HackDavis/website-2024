type ScheduleBlockProp = {
  startTime: Date;
  endTime: Date;
  title: string;
  description?: string;
  type: string;
  location: string;
};

type TimeTableProps = {
  maxTimeSlots: number;
  scheduleBlocks: ScheduleBlockProp[];
  colors: Record<string, string>;
};

type TimeTableComponentsProps = {
  timeTable: TimeTableProps;
  startDate: Date;
};

function calcDuration(scheduleBlock: ScheduleBlockProp): number {
  const hoursDiff =
    scheduleBlock.endTime.getHours() - scheduleBlock.startTime.getHours();
  const minutesDiff =
    scheduleBlock.endTime.getMinutes() - scheduleBlock.startTime.getMinutes();
  return hoursDiff * 60 + minutesDiff;
}

function calcGridRow(
  scheduleBlock: ScheduleBlockProp,
  startTime: number
): string {
  const blockStartTimeMinute = scheduleBlock.startTime.getMinutes();
  const blockEndTimeMinute = scheduleBlock.endTime.getMinutes();

  const durationMinute = blockEndTimeMinute - blockStartTimeMinute;
  const roundedDuration = Math.floor(durationMinute / 15);

  return `tw-${blockStartTimeMinute} tw-row-span-${roundedDuration}`;
}

export default function TimeTable({
  timeTable,
  startDate,
}: TimeTableComponentsProps) {
  const startTime = startDate.getHours();
  return (
    <main className="tw-w-full tw-border tw-border-red-400">
      {Array.from({ length: timeTable.maxTimeSlots }).map((_, time_slot) => {
        const hourTime = (startTime + time_slot) % 24;
        const currentTimeSlot = timeTable.scheduleBlocks.filter((block) => {
          const blockStartTime = block.startTime.getHours();
          const blockEndTime = block.endTime.getHours();
          return hourTime >= blockStartTime && hourTime < blockEndTime;
        });

        return (
          <div key={time_slot} className="tw-flex">
            <div className="tw-flex tw-min-w-12 tw-max-w-12 tw-items-center tw-justify-center tw-border tw-border-red-400">
              <span className="">{hourTime}:00</span>
            </div>
            <div className="tw-flex tw-w-full tw-border tw-border-pink-300">
              {currentTimeSlot.map((block, blockIndex) => {
                const scheduleBlockDuration = calcDuration(block);
                return (
                  <div
                    key={blockIndex}
                    className="tw-flex tw-w-full tw-border tw-border-pink-300"
                  >
                    <div className="tw-flex tw-flex-col">
                      <span className="">{block.title}</span>
                      <span className="">{scheduleBlockDuration} Minutes</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      {/* {Array.from({ length: timeTable.maxTimeSlots }).map((_, time_slot) => {
        const hourTime = (startTime + time_slot) % 24;
        return (
          <div key={time_slot} className="tw-flex tw-h-12">
            <div className="tw-flex tw-min-w-12 tw-max-w-12 tw-items-center tw-justify-center tw-border tw-border-red-400">
              <span className="">{hourTime}:00</span>
            </div>
            <div className="tw-grid tw-w-full tw-auto-cols-auto tw-grid-rows-4">
              <div className="tw-row-span-2 tw-border tw-border-b-black tw-bg-gray-300"></div>
              <div className="tw-row-span-1 tw-bg-pink-200"></div>
              <div className="tw-row-span-1 tw-border tw-border-gray-700 tw-bg-pink-200"></div>
            </div>
          </div>
        );
      })} */}
    </main>
  );
}
