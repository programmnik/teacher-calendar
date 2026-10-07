import { useState } from 'react';
import Calendar from './components/Calendar/Calendar';
import type { View } from './types';

function App() {
  const [view, setView] = useState<View>('week');
  const [startDate, _] = useState<Date>(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Teacher Calendar</h1>

        <div className="flex items-center gap-2">
          <button
            className="rounded border px-3 py-1 hover:bg-gray-100"
            onClick={() => setView('day')}
          >
            Day
          </button>
          <button
            className="rounded border px-3 py-1 hover:bg-gray-100"
            onClick={() => setView('3days')}
          >
            3 days
          </button>
          <button
            className="rounded border px-3 py-1 hover:bg-gray-100"
            onClick={() => setView('week')}
          >
            Week
          </button>
        </div>
      </header>

      <Calendar
        view={view}
        startDate={startDate}
        schedule={[]}
        lessons={[]}
        onSlotSelect={(slot) => {
          console.log('slot selected:', slot);
        }}
      />
    </div>
  );
}

export default App;