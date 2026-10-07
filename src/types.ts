export type View = 'day' | '3days' | 'week';
export type SlotKind = 'off' | 'free' | 'lesson';

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
  bookedByOther?: boolean;
};

export type LessonMenuPosition = {
  x: number;
  y: number;
};

export type DayColumnProps = {
  day: Day;
  slotMinutes: number;
  dayIndex: number;
  onSlotSelect?: (slot: { startTime: Date; endTime: Date }) => void;
  onLessonClick?: (lesson: Lesson, position: LessonMenuPosition) => void;
};

export type LessonMenuState = {
  lesson: Lesson;
  position: LessonMenuPosition;
} | null;

export type LessonMenuProps = {
  state: NonNullable<LessonMenuState>;
  onClose: () => void;
};

export type CalendarGridProps = {
  view: View;
  startDate: Date;
  schedule: ScheduleInterval[];
  lessons: Lesson[];
  onSlotSelect?: (slot: { startTime: Date; endTime: Date }) => void;
};

export type CalendarProps = CalendarGridProps & {
  onPrev?: () => void;
  onNext?: () => void;
  onToday?: () => void;
};

export type CalendarToolbarProps = {
  view: View;
  startDate: Date;
  onPrev: () => void;
  onNext: () => void;
  onToday?: () => void;
};

export type Slot = {
  start: Date;
  end: Date;
  kind: SlotKind;
  lesson?: Lesson;
};

export type Day = {
  date: Date;
  slots: Slot[];
};