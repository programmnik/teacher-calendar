import { formatTime } from '../../../utils/time';
import type { Lesson } from '../../../types';

type Props = {
  lesson: Lesson;
  gridColumn: number;
  gridRow: string;
  onClick?: (position: { x: number; y: number }) => void;
};

function LessonBlock({ lesson, gridColumn, gridRow, onClick }: Props) {
  const isOther = lesson.bookedByOther === true;

  const styles = isOther
    ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
    : 'bg-red-300 text-red-900 cursor-pointer hover:bg-red-400';

  const handleClick = isOther
    ? undefined
    : (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        onClick?.({ x: rect.left, y: rect.bottom });
      };

  return (
    <div
      className={`m-0.5 flex flex-col justify-center rounded px-2 py-1 text-xs shadow-sm ${styles}`}
      style={{ gridColumn, gridRow }}
      onClick={handleClick}
    >
      <div className="truncate font-medium">{lesson.student}</div>
      <div className="text-[10px] opacity-80">
        {formatTime(new Date(lesson.startTime))}–
        {formatTime(new Date(lesson.endTime))}
      </div>
    </div>
  );
}

export default LessonBlock;