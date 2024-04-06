import type { ScheduleBlockProp } from '../Schedule.types';

export default function ScheduleBlock({
  block,
  colors,
}: {
  block: ScheduleBlockProp;
  colors: Record<string, string>;
}) {
  return (
    <main>
      <div
        className={`tw-full tw-flex tw-flex-col tw-border tw-border-red-300`}
      >
        <span>{block.title}</span>
        <span>{block.description}</span>
        <span>{block.location}</span>
      </div>
    </main>
  );
}
