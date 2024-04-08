type ScheduleBlockProps = {
  startTime: Date;
  endTime: Date;
  title: string;
  description?: string;
  type: string;
  location: string;
};

export default function ScheduleBlock({
  block,
}: {
  block: ScheduleBlockProps;
}) {
  return (
    <main className="tw-flex tw-w-full tw-flex-col tw-border tw-border-red-300">
      <div className={`tw-flex tw-flex-col`}>
        <span>{block.title}</span>
        <span>{block.description}</span>
        <span>{block.location}</span>
        <span>{block.type}</span>
      </div>
    </main>
  );
}
