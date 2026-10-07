type Props = {
  date: Date;
  column: number;
  isToday: boolean;
  isWeekend: boolean;
};

function DayHeader({ date, column, isToday, isWeekend }: Props) {
  const styles = isToday
    ? 'bg-schedule-today-bg text-schedule-today-text'
    : isWeekend
    ? 'bg-schedule-head-day text-white/80'
    : 'bg-schedule-head-day text-white';

  return (
    <div
      className={`flex items-center justify-center border-b border-r border-schedule-time-border px-2 py-1 text-(length:--font-size-day) font-bold ${styles}`}
      style={{ gridColumn: column, gridRow: 1 }}
    >
      {date.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
      })}
    </div>
  );
}

export default DayHeader;