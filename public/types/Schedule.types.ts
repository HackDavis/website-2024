export type Event = {
  startTime: Date;
  endTime: Date;
  title: string;
  location?: string;
  type: string;
  url?: string;
};

export type TimeChunk = {
  startTime: Date;
  endTime: Date;
  eventBlocks: Event[];
};
