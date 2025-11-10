import { useEffect, useState } from 'react';
import './App.css'
import ScoreBoard from './components/Scoreboard'

function App() {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const [isSoundOpen, setIsSoundOpen] = useState<boolean>(false);

  const [label, setLabel] = useState<string>('');       // e.g., "Ends in"
  const [display, setDisplay] = useState<string>('--:--:--'); // formatted countdown

  const formatHMS = (ms: number) => {
    if (ms <= 0) return '00:00:00';
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  };

  useEffect(() => {
    const tick = () => {
      if (!startTime || !endTime) {
        setLabel('');
        setDisplay('--:--:--');
        return;
      }

      const now = Date.now();
      const tStart = startTime.getTime();
      const tEnd = endTime.getTime();

      if (now < tStart) {
        setLabel('Starts in');
        setDisplay(formatHMS(tStart - now));
      } else if (now >= tStart && now <= tEnd) {
        setLabel('Ends in');
        setDisplay(formatHMS(tEnd - now));
      } else {
        setLabel('');
        setDisplay('Contest Ended');
      }
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startTime, endTime]);

  return (
    <main className="h-screen w-full bg-[url('/cc-bg-2.png')] bg-cover bg-center bg-no-repeat p-10 flex items-center justify-center flex-col">
      <div className='fixed bottom-5 right-0'>
        <img src="/cc-logo-cropped.png" alt="Coders' Cup '25" className='h-20 shadow-2xl' />
      </div>

      <button
        type="button"
        onClick={() => setIsSoundOpen((v) => !v)}
        aria-pressed={isSoundOpen}
        aria-label={isSoundOpen ? 'Turn sound off' : 'Turn sound on'}
        title={isSoundOpen ? 'Sound: ON' : 'Sound: OFF'}
        className="cursor-pointer fixed bottom-5 left-5 z-50 h-8 w-8 rounded-full bg-[#3c0d0d]/80 hover:bg-[#3c0d0d]/90 text-primaryYellow grid place-items-center select-none"
      >
        <span className="text-xl leading-none">
          {isSoundOpen ? '🔊' : '🔇'}
        </span>
      </button>

      <div className="">
        <img src="/scoreboard-title.png" alt="Scoreboard" className='h-16 sm:h-28 mx-auto' />

        <div className='max-h-[60vh] mx-auto mt-6 relative'>
          <div className="absolute z-50 -top-16 -right-12 rotate-8 hidden sm:block">
            <img
              src="/wooden-plank.png"
              alt="Batch"
              className="h-24 pointer-events-none select-none"
            />
            <p className="absolute inset-0 flex items-center justify-center font-bold text-xl font-hoshiko text-[#3c0d0d]/85">
              Batch '24
            </p>
          </div>

          <ScoreBoard room="22k" setEndTime={setEndTime} setStartTime={setStartTime} isSoundOpen={isSoundOpen} />
        </div>
      </div>

      {/* Countdown board */}
      <div className="fixed -top-30 md:-top-12 left-0">
        <div className="relative w-60">
          <img
            src="/timeboard.png"
            alt="Coders' Cup '25"
            className="w-full rotate-180 select-none pointer-events-none"
          />
          <div className="absolute inset-0 translate-y-11 flex flex-col items-center justify-center">
            <span className="text-[#3c0d0d]/80 font-hoshiko font-bold text-base tracking-wide">
              {label}
            </span>
            <span className="text-[#3c0d0d]/80 font-hoshiko font-bold text-2xl tracking-wide tabular-nums">
              {display}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
