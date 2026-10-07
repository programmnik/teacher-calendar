import { formatTime, getDaySlots } from '../../../utils/time';

type Props = {
  date: Date;
  slotMinutes: number;
};

function TimeColumn({ date, slotMinutes }: Props) {
  const slots = getDaySlots(date, slotMinutes);

  return (
    <>
      <div className="sticky left-0 z-10 flex items-center justify-center border-b border-r border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-500">
        Time
      </div>
      {slots.map((slot) => (
        <div
          key={slot.start.toISOString()}
          className="sticky left-0 z-10 flex items-center justify-center border-b border-r border-gray-100 bg-white px-2 text-[10px] text-gray-500"
        >
          {formatTime(slot.start)}
        </div>
      ))}
    </>
  );
}

export default TimeColumn;