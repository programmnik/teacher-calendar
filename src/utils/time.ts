export const SLOT_MINUTES = 30;
const MINUTES_PER_DAY = 24 * 60;

export function getSlotsPerDay(slotMinutes = SLOT_MINUTES): number {
  return MINUTES_PER_DAY / slotMinutes;
}

/** Возвращает копию даты, установленную на полночь. */
export function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Прибавляет к дате N дней, не мутируя исходную. */
export function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

/** Массив дат начиная с startDate длиной count, каждая — полночь. */
export function getDays(startDate: Date, count: number): Date[] {
  const start = startOfDay(startDate);
  return Array.from({ length: count }, (_, i) => addDays(start, i));
}

/** Форматирует время в HH:MM. */
export function formatTime(date: Date): string {
  const h = String(date.getHours()).padStart(2, '0');
  const m = String(date.getMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

/** Возвращает массив слотов на сутки: { start, end }. */
export function getDaySlots(day: Date, slotMinutes = SLOT_MINUTES) {
  const base = startOfDay(day).getTime();
  const slotsCount = getSlotsPerDay();

  return Array.from({ length: slotsCount }, (_, i) => {
    const start = new Date(base + i * slotMinutes * 60 * 1000);
    const end = new Date(start.getTime() + slotMinutes * 60 * 1000 - 1000);
    return { start, end };
  });
}

/** Проверяет, попадает ли момент в интервал [start, end]. */
export function isWithin(date: Date, start: Date, end: Date): boolean {
  const t = date.getTime();
  return t >= start.getTime() && t <= end.getTime();
}

/** Проверяет, пересекаются ли два интервала. */
export function overlaps(
  aStart: Date,
  aEnd: Date,
  bStart: Date,
  bEnd: Date,
): boolean {
  return aStart.getTime() <= bEnd.getTime() && bStart.getTime() <= aEnd.getTime();
}