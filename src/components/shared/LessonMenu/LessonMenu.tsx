import Button from '../../ui/Button';
import { formatTime } from '../../../utils/time';
import type { LessonMenuProps } from '../../../types';

function LessonMenu( props : LessonMenuProps) {
  const { lesson, position } = props.state;

  return (
    <div
      className="fixed z-50 min-w-[200px] rounded-md border bg-white p-3 text-sm shadow-lg"
      style={{ top: position.y + 4, left: position.x }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="mb-1 font-medium">{lesson.student}</div>
      <div className="text-xs text-gray-600">
        {formatTime(new Date(lesson.startTime))}–
        {formatTime(new Date(lesson.endTime))}
      </div>
      <div className="text-xs text-gray-600">
        Duration: {lesson.duration} min
      </div>

      <Button className="mt-2 w-full text-xs" onClick={props.onClose}>
        Close
      </Button>
    </div>
  );
}

export default LessonMenu;