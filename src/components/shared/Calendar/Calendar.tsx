import type { CalendarProps } from '../../../types';
import CalendarToolbar from './CalendarToolbar';
import CalendarGrid from './CalendarGrid';

function Calendar({ onPrev, onNext, onToday, ...gridProps }: CalendarProps) {

  const toolbarProps = {
    view: gridProps.view,
    startDate: gridProps.startDate,
    onPrev: onPrev ?? (() => {}),
    onNext: onNext ?? (() => {}),
    onToday,
  };

  return (
    <>
      <CalendarToolbar {...toolbarProps} />
      
      <div className="overflow-x-auto">
        <CalendarGrid {...gridProps} />
      </div>
    </>
  );
}

export default Calendar;