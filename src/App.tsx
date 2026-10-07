import Calendar from './components/shared/Calendar/Calendar';
import CalendarHeader from './components/shared/Calendar/CalendarHeader';
import { demoLessons, demoStartDate, demoSchedule } from './data/demo';
import { useCalendarNavigation } from './hooks/useCalendarNavigation';
import { useResponsiveView } from './hooks/useResponsiveView';

function App() {
  const view = useResponsiveView();
  const { startDate, shift, goToToday } = useCalendarNavigation(
    view,
    demoStartDate,
  );

  const calendarProps = {
    view,
    startDate,
    schedule: demoSchedule,
    lessons: demoLessons,
    onPrev: () => shift(-1),
    onNext: () => shift(1),
    onToday: goToToday,
    onSlotSelect: (slot: { startTime: Date; endTime: Date }) => {
      alert(`Slot: ${slot.startTime.toLocaleString()}`);
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <CalendarHeader />
      <Calendar {...calendarProps} />
    </div>
  );
}

export default App;