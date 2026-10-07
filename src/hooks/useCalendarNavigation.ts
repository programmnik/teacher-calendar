import { useCallback, useState } from 'react';
import { addDays, startOfDay } from '../utils/time';
import { DAYS_BY_VIEW } from '../utils/view';
import type { View } from '../types';

export function useCalendarNavigation(view: View, initialDate: Date = new Date()) {
  const [startDate, setStartDate] = useState<Date>(() =>
    startOfDay(initialDate),
  );

  const shift = useCallback(
    (direction: -1 | 1) => {
      const step = DAYS_BY_VIEW[view] * direction;
      setStartDate((current) => addDays(current, step));
    },
    [view],
  );

  const goToToday = useCallback(() => {
    setStartDate(startOfDay(new Date()));
  }, []);

  return { startDate, setStartDate, shift, goToToday };
}