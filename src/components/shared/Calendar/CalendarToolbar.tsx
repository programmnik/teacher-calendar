import type { CalendarToolbarProps } from '../../../types';
import { formatRange } from '../../../utils/view';
import Button from '../../ui/Button';
import { ChevronLeftIcon, ChevronRightIcon } from '../../ui/Icons';

function CalendarToolbar({
  view,
  startDate,
  onPrev,
  onNext,
  onToday,
}: CalendarToolbarProps) {
  return (
    <div className="flex items-center gap-2 border-b border-toolbar-border bg-toolbar-bg px-3 py-2">
      <Button size="md" onClick={onPrev} aria-label="Previous">
        <ChevronLeftIcon />
      </Button>

      <Button size="md" onClick={onNext} aria-label="Next">
        <ChevronRightIcon />
      </Button>

      {onToday && (
        <Button size="md" onClick={onToday}>
          Today
        </Button>
      )}

      <div className="ml-2 text-(length:--font-size-day) font-medium text-text-primary">
        {formatRange(view, startDate)}
      </div>
    </div>
  );
}

export default CalendarToolbar;