import Button from '../../ui/Button';
import { formatTime } from '../../../utils/time';
import type { LessonMenuProps } from '../../../types';

function LessonMenu({ state, onClose }: LessonMenuProps) {
  const { lesson, position } = state;

  return (
    <div
      className="fixed z-50 min-w-[200px] rounded border border-toolbar-border bg-toolbar-bg p-3 shadow-md"
      style={{ top: position.y + 4, left: position.x }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="mb-1 text-(length:--font-size-day) font-medium text-text-primary">
        {lesson.student}
      </div>

      <div className="text-(length:--font-size-lesson) text-text-muted">
        {formatTime(new Date(lesson.startTime))}–
        {formatTime(new Date(lesson.endTime))}
      </div>

      <div className="text-(length:--font-size-lesson) text-text-muted">
        Duration: {lesson.duration} min
      </div>

      <Button className="mt-2 w-full" size="sm" onClick={onClose}>
        Close
      </Button>
    </div>
  );
}

export default LessonMenu;