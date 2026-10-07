import type { MouseEvent } from 'react';
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
    ? 'bg-lesson-other-bg text-lesson-other-text cursor-not-allowed'
    : 'bg-lesson-mine-bg text-lesson-mine-text cursor-pointer hover:bg-lesson-mine-bg-hover';

  const handleClick = isOther
    ? undefined
    : (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        onClick?.({ x: rect.left, y: rect.bottom });
      };

  return (
    <div
      className={`m-0.5 flex flex-col justify-center rounded px-2 py-1 text-(length:--font-size-lesson) shadow-sm ${styles}`}
      style={{ gridColumn, gridRow }}
      onClick={handleClick}
    >
      <div className="truncate font-medium">{lesson.student}</div>
      <div className="text-(length:--font-size-time) opacity-80">
        {formatTime(new Date(lesson.startTime))}–
        {formatTime(new Date(lesson.endTime))}
      </div>
    </div>
  );
}

export default LessonBlock;