export type ScheduleBlockProp = {
  startTime: Date;
  endTime: Date;
  title: string;
  description?: string;
  type: string;
  location: string;
};

export type TimeTableProps = {
  maxTimeSlots: number;
  scheduleBlocks: ScheduleBlockProp[];
  colors: Record<string, string>;
};
