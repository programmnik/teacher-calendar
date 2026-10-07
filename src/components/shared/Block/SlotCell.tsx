type Props = {
  gridColumn: number;
  gridRow: number;
  isFree: boolean;
  onClick?: () => void;
};

function SlotCell({ gridColumn, gridRow, isFree, onClick }: Props) {
  const styles = isFree
    ? 'bg-slot-free-bg hover:bg-slot-free-bg-hover cursor-pointer'
    : 'bg-schedule-cell';

  return (
    <div
      className={`border-b border-r border-schedule-cell-hover ${styles}`}
      style={{ gridColumn, gridRow }}
      onClick={isFree ? onClick : undefined}
    />
  );
}

export default SlotCell;