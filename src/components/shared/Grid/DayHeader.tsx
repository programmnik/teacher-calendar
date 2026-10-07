type Props = {
  date: Date;
  column: number;
  isToday: boolean;
  isWeekend: boolean;
};

function DayHeader({ date, column, isToday, isWeekend }: Props) {
  const styles = isToday
    ? 'bg-blue-100 text-blue-900'
    : isWeekend
    ? 'bg-gray-50 text-gray-500'
    : 'bg-white';

  return (
    <div
      className={`flex items-center justify-center border-b border-r px-2 py-1 text-xs font-medium ${styles}`}
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