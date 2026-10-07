import type { View } from '../types';

export const DAYS_BY_VIEW: Record<View, number> = {
  day: 1,
  '3days': 3,
  week: 7,
};

export function formatRange(view: View, startDate: Date): string {
  const end = new Date(startDate);
  end.setDate(end.getDate() + DAYS_BY_VIEW[view] - 1);

  const fmt = (d: Date) =>
    d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return view === 'day' ? fmt(startDate) : `${fmt(startDate)} – ${fmt(end)}`;
}