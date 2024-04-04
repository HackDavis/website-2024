import type { ScheduleBlock } from '../Schedule';
type TimeTable = {
  maxTimeSlots: number;
  scheduleBlocks: ScheduleBlock[];
  colors: Record<string, string>;
};

const timeTable: TimeTable = {
  maxTimeSlots: 24,
  scheduleBlocks: [],
  colors: {
    Activity: 'tw-bg-cyan-600',
    Workshop: 'tw-bg-yellow-400',
    Menu: 'tw-bg-green-400',
  },
};

export default function TimeTable({ maxTimeSlots, scheduleBlocks, colors }) {
  return (
    <main>
      <div className=""></div>
    </main>
  );
}
