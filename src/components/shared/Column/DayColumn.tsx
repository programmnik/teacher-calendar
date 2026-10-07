import type { DayColumnProps, Lesson } from '../../../types';
import LessonBlock from '../Block/LessonBlock';
import SlotCell from '../Block/SlotCell';

function DayColumn( props : DayColumnProps) {
  const gridColumn = props.dayIndex + 2; // +1 за колонку времени, +1 т.к. grid 1-based
  const elements: React.ReactNode[] = [];

  props.day.slots.forEach((slot, slotIndex) => {
    const gridRow = slotIndex + 2; // +1 за строку заголовков, +1 т.к. grid 1-based

    if (slot.kind === 'lesson' && slot.lesson) {
      // Урок рендерим один раз — в слоте, где он начинается.
      if (slotIndex > 0 && props.day.slots[slotIndex - 1].lesson?.id === slot.lesson.id) {
        return;
      }

      const span = Math.ceil(slot.lesson.duration / props.slotMinutes);
      const startIndex = slotIndex;

      elements.push(
        <LessonBlock
          key={`lesson-${slot.lesson.id}`}
          lesson={slot.lesson}
          gridColumn={gridColumn}
          gridRow={`${startIndex + 2} / span ${span}`}
          onClick={(position) => props.onLessonClick?.(slot.lesson as Lesson, position)}
        />,
      );
      return;
    }

    elements.push(
      <SlotCell
        key={slot.start.toISOString()}
        gridColumn={gridColumn}
        gridRow={gridRow}
        isFree={slot.kind === 'free'}
        onClick={() =>
          props.onSlotSelect?.({ startTime: slot.start, endTime: slot.end })
        }
      />,
    );
  });

  return <>{elements}</>;
}

export default DayColumn;