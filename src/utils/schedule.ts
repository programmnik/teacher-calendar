import type { Day, Lesson, ScheduleInterval, Slot } from '../types';
import { getDaySlots, isWithin, overlaps, SLOT_MINUTES } from './time';

type Interval = { start: Date; end: Date };

/** Преобразует ISO-интервалы из данных в объекты Date. */
function parseSchedule(schedule: ScheduleInterval[]): Interval[] {
  return schedule.map((s) => ({
    start: new Date(s.startTime),
    end: new Date(s.endTime),
  }));
}

/** Проверяет, попадает ли момент в один из интервалов schedule. */
function isWithinSchedule(moment: Date, intervals: Interval[]): boolean {
  return intervals.some((i) => isWithin(moment, i.start, i.end));
}

/** Ищет урок, пересекающийся со слотом. */
function findLessonForSlot(slot: { start: Date; end: Date }, lessons: Lesson[]): Lesson | undefined {
  return lessons.find((lesson) => {
    const lStart = new Date(lesson.startTime);
    const lEnd = new Date(lesson.endTime);
    return overlaps(slot.start, slot.end, lStart, lEnd);
  });
}

/** Классифицирует один день: возвращает массив слотов с типом. */
export function buildDay(
  date: Date,
  schedule: ScheduleInterval[],
  lessons: Lesson[],
  slotMinutes = SLOT_MINUTES,
): Day {
  const intervals = parseSchedule(schedule);

  // Уроки этого дня — чтобы не искать по всем на каждый слот.
  const dayStart = new Date(date);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(date);
  dayEnd.setHours(23, 59, 59, 999);

  const dayLessons = lessons.filter((lesson) => {
    const lStart = new Date(lesson.startTime);
    return overlaps(dayStart, dayEnd, lStart, new Date(lesson.endTime));
  });

  const slots = getDaySlots(date, slotMinutes).map((slot) => {
    // Слот попадает в рабочие часы, если его начало внутри schedule.
    // Этого достаточно: schedule всегда начинается и заканчивается на границе получаса.
    if (!isWithinSchedule(slot.start, intervals)) {
      return { ...slot, kind: 'off' as const };
    }

    const lesson = findLessonForSlot(slot, dayLessons);
    if (lesson) {
      return { ...slot, kind: 'lesson' as const, lesson };
    }

    return { ...slot, kind: 'free' as const };
  });

  return { date, slots };
}

/** Строит массив дней для текущего вида. */
export function buildCalendar(
  startDate: Date,
  daysCount: number,
  schedule: ScheduleInterval[],
  lessons: Lesson[],
  slotMinutes = SLOT_MINUTES,
): Day[] {
  return Array.from({ length: daysCount }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    return buildDay(date, schedule, lessons, slotMinutes);
  });
}