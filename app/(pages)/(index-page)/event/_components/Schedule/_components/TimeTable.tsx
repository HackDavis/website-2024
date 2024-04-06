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

function TimeSlot(scheduleBlock: ScheduleBlockProp): JSX.Element {
  const blockStartTimeHour = scheduleBlock.startTime.getHours();
  const blockEndTimeHour = scheduleBlock.endTime.getHours();

  const blockStartTimeMinute = scheduleBlock.startTime.getMinutes();
  const blockEndTimeMinute = scheduleBlock.endTime.getMinutes();

  const durationMinute = calcDuration(scheduleBlock);
  const durationIn15MinIntervals = Math.ceil(durationMinute / 15);

  return (
    <main className="tw-grid tw-w-full tw-auto-cols-auto tw-grid-rows-4">
      <div
        className={`tw-${blockStartTimeMinute} tw-row-span-${durationIn15MinIntervals} tw-bg-red-200`}
      >
        {scheduleBlock.title}
        {scheduleBlock.description}
      </div>
    </main>
  );
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
        return (
          <div key={time_slot} className="tw-flex tw-h-12">
            <div className="tw-flex tw-min-w-12 tw-max-w-12 tw-items-center tw-justify-center tw-border tw-border-red-400">
              <span className="">{hourTime}:00</span>
            </div>
            <div className="tw-grid tw-w-full">
              {timeTable.scheduleBlocks[time_slot] ? (
                <TimeSlot {...timeTable.scheduleBlocks[time_slot]} />
              ) : (
                <div className="tw-row-span-full tw-border tw-border-black tw-bg-gray-400"></div>
              )}
            </div>
          </div>
        );
      }, [])}
    </main>
  );
}
