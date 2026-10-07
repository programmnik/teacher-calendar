import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import type { CalendarProps } from '../../types';

function Calendar({ view, startDate, schedule, lessons, onSlotSelect }: CalendarProps) {
  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <CalendarHeader view={view} startDate={startDate} />

      <div className="overflow-x-auto">
        <CalendarGrid
          view={view}
          startDate={startDate}
          schedule={schedule}
          lessons={lessons}
          onSlotSelect={onSlotSelect}
        />
      </div>
    </div>
  );
}

export default Calendar;