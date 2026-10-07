import type { CalendarToolbarProps } from '../../../types';
import { formatRange } from '../../../utils/view';
import Button from '../../ui/Button';
import { ChevronLeftIcon, ChevronRightIcon } from '../../ui/Icons';

function CalendarToolbar( props : CalendarToolbarProps) {
  return (
    <div className="flex items-center gap-2 border-b bg-white px-3 py-2">
      <Button className="px-2" onClick={props.onPrev} aria-label="Previous">
        <ChevronLeftIcon />
      </Button>
      <Button className="px-2" onClick={props.onNext} aria-label="Next">
        <ChevronRightIcon />
      </Button>

      {props.onToday && <Button onClick={props.onToday}>Today</Button>}
      
      <div className="ml-2 text-sm font-medium text-gray-700">
        {formatRange(props.view, props.startDate)}
      </div>
    </div>
  );
}

export default CalendarToolbar;