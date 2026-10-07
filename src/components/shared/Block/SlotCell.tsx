type Props = {
  gridColumn: number;
  gridRow: number;
  isFree: boolean;
  onClick?: () => void;
};

function SlotCell({ gridColumn, gridRow, isFree, onClick }: Props) {
  const styles = isFree
    ? 'bg-green-200 hover:bg-green-300 cursor-pointer'
    : 'bg-gray-100';

  return (
    <div
      className={`border-b border-r border-gray-100 ${styles}`}
      style={{ gridColumn, gridRow }}
      onClick={isFree ? onClick : undefined}
    />
  );
}

export default SlotCell;