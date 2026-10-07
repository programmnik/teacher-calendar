import { useCallback, useState, useEffect } from 'react';
import { addDays } from '../utils/time';
import { DAYS_BY_VIEW, getStartOfView } from '../utils/view';
import type { View } from '../types';

export function useCalendarNavigation(view: View, initialDate: Date = new Date()) {
  const [startDate, setStartDate] = useState<Date>(() =>
    getStartOfView(view, initialDate),
  );

  // При смене вида подтягиваем начало к правилу вида.
  useEffect(() => {
    setStartDate((current) => getStartOfView(view, current));
  }, [view]);

  const shift = useCallback(
    (direction: -1 | 1) => {
      const step = DAYS_BY_VIEW[view] * direction;
      setStartDate((current) => addDays(current, step));
    },
    [view],
  );

  const goToToday = useCallback(() => {
    setStartDate(getStartOfView(view, new Date()));
  }, [view]);

  return { startDate, setStartDate, shift, goToToday };
}