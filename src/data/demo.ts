import type { Lesson, ScheduleInterval } from '../types';

/** Демонстрационные рабочие интервалы учителя. */
export const demoSchedule: ScheduleInterval[] = [
  { startTime: '2026-10-05T01:30:00+00:00', endTime: '2026-10-05T04:59:59+00:00' },
  { startTime: '2026-10-05T11:00:00+00:00', endTime: '2026-10-05T19:29:59+00:00' },
  { startTime: '2026-10-06T09:00:00+00:00', endTime: '2026-10-06T17:00:00+00:00' },
  { startTime: '2026-10-07T08:00:00+00:00', endTime: '2026-10-07T14:00:00+00:00' },
  { startTime: '2026-10-08T10:00:00+00:00', endTime: '2026-10-08T18:00:00+00:00' },
  { startTime: '2026-10-09T09:00:00+00:00', endTime: '2026-10-09T15:00:00+00:00' },
];

/** Демонстрационные уроки. */
export const demoLessons: Lesson[] = [
  {
    id: 52,
    duration: 60,
    startTime: '2026-10-05T13:30:00+00:00',
    endTime: '2026-10-05T14:29:59+00:00',
    student: 'Alex',
  },
  {
    id: 53,
    duration: 90,
    startTime: '2026-10-06T10:00:00+00:00',
    endTime: '2026-10-06T11:29:59+00:00',
    student: 'Maria',
    bookedByOther: true,
  },
  {
    id: 54,
    duration: 30,
    startTime: '2026-10-07T09:00:00+00:00',
    endTime: '2026-10-07T09:29:59+00:00',
    student: 'Ivan',
  },
  {
    id: 55,
    duration: 90,
    startTime: '2026-10-08T12:00:00+00:00',
    endTime: '2026-10-08T13:29:59+00:00',
    student: 'Olga',
  },
];

/** Стартовая дата для демонстрации — понедельник текущей недели. */
export const demoStartDate = new Date('2026-10-05T00:00:00');