import type { View } from '../types';
import { startOfDay, startOfWeek } from './time';

export const DAYS_BY_VIEW: Record<View, number> = {
  day: 1,
  '3days': 3,
  week: 7,
};

export function getStartOfView(view: View, date: Date): Date {
  if (view === 'week') return startOfWeek(date);
  return startOfDay(date);
}

export function formatRange(view: View, startDate: Date): string {
  const end = new Date(startDate);
  end.setDate(end.getDate() + DAYS_BY_VIEW[view] - 1);

  const fmt = (d: Date) =>
    d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return view === 'day' ? fmt(startDate) : `${fmt(startDate)} – ${fmt(end)}`;
}