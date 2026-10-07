import type { View } from '../../types';

type Props = {
  view: View;
  startDate: Date;
};

function CalendarHeader({ view, startDate }: Props) {
  return (
    <div className="border-b p-3 text-sm text-gray-600">
      Header — view: {view}, start: {startDate.toDateString()}
    </div>
  );
}

export default CalendarHeader;