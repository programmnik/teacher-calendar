import { formatTime, getDaySlots } from '../../../utils/time';

type Props = {
  date: Date;
  slotMinutes: number;
};

function TimeColumn({ date, slotMinutes }: Props) {
  const slots = getDaySlots(date, slotMinutes);

  return (
    <>
      <div className="sticky left-0 z-10 flex items-center justify-center border-b border-r border-schedule-time-border bg-schedule-head-time px-2 text-(length:--font-size-day) font-bold text-white">
        Time
      </div>

      {slots.map((slot) => (
        <div
          key={slot.start.toISOString()}
          className="sticky left-0 z-10 flex items-center justify-center border-b border-r border-schedule-time-border bg-schedule-time-bg px-2 text-(length:--font-size-time) text-schedule-time-text"
        >
          {formatTime(slot.start)}
        </div>
      ))}
    </>
  );
}

export default TimeColumn;