import type { CalendarProps } from '../../types';

function CalendarGrid({ view, startDate }: CalendarProps) {
  return (
    <div className="p-3 text-sm text-gray-600">
      Grid — view: {view}, start: {startDate.toDateString()}
    </div>
  );
}

export default CalendarGrid;