import type { CalendarGridProps } from '../../../types';
import { buildCalendar } from '../../../utils/schedule';
import { DAYS_BY_VIEW } from '../../../utils/view';
import { SLOT_MINUTES, getSlotsPerDay } from '../../../utils/time';
import { useLessonMenu } from '../../../hooks/useLessonMenu';
import TimeColumn from '../Column/TimeColumn';
import DayColumn from '../Column/DayColumn';
import DayHeader from '../Grid/DayHeader';
import LessonMenu from '../LessonMenu/LessonMenu';

function CalendarGrid(props: CalendarGridProps) {
  const { view, startDate, schedule, lessons, onSlotSelect } = props;

  const daysCount = DAYS_BY_VIEW[view];
  const days = buildCalendar(startDate, daysCount, schedule, lessons, SLOT_MINUTES);

  const { menu, openMenu, closeMenu } = useLessonMenu();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <>
      <div
        className="grid border-l border-t"
        style={{
          gridTemplateColumns: `80px repeat(${daysCount}, minmax(120px, 1fr))`,
          gridTemplateRows: `40px repeat(${getSlotsPerDay()}, 30px)`,
        }}
      >
        <TimeColumn date={startDate} slotMinutes={SLOT_MINUTES} />

        {days.map((day, index) => (
          <DayHeader
            key={`head-${day.date.toISOString()}`}
            date={day.date}
            column={index + 2}
            isToday={day.date.getTime() === today.getTime()}
            isWeekend={[0, 6].includes(day.date.getDay())}
          />
        ))}

        {days.map((day, index) => (
          <DayColumn
            key={day.date.toISOString()}
            day={day}
            slotMinutes={SLOT_MINUTES}
            dayIndex={index}
            onSlotSelect={onSlotSelect}
            onLessonClick={openMenu}
          />
        ))}
      </div>

      {menu && <LessonMenu state={menu} onClose={closeMenu} />}
    </>
  );
}

export default CalendarGrid;