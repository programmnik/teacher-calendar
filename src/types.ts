export type View = 'day' | '3days' | 'week';

export type ScheduleInterval = {
  startTime: string;
  endTime: string;
};

export type Lesson = {
  id: number;
  duration: number;
  startTime: string;
  endTime: string;
  student: string;
};

export type CalendarProps = {
  view: View;
  startDate: Date;
  schedule: ScheduleInterval[];
  lessons: Lesson[];
  onSlotSelect?: (slot: { startTime: Date; endTime: Date }) => void;
};