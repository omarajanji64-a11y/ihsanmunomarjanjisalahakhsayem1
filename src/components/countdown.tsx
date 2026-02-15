"use client";

import { useState, useEffect } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    // Target date: May 23, 2026 at 09:00:00
    const targetDate = new Date("2026-05-23T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <div className="h-48" />;

  return (
    <div className="flex flex-col items-center gap-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Time Units with Glass Cards */}
      <div className="flex justify-center gap-4 md:gap-8">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, idx) => (
          <div key={idx} className="glass-card flex flex-col items-center px-6 py-5 md:px-10 md:py-8 min-w-[100px] md:min-w-[150px] group">
            <div className="text-4xl md:text-7xl font-bold text-white mb-2 font-serif tabular-nums tracking-tight">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-white/70 font-bold">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Global Diplomatic Compass Animation */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-none stroke-current stroke-[0.5]">
          <g className="animate-[spin_40s_linear_infinite]" style={{ transformOrigin: 'center' }}>
            <circle cx="50" cy="50" r="48" className="opacity-20" />
            <ellipse cx="50" cy="50" rx="48" ry="15" className="opacity-30" />
            <ellipse cx="50" cy="50" rx="15" ry="48" className="opacity-30" />
          </g>
          <circle cx="50" cy="50" r="42" strokeDasharray="0.5 8" strokeWidth="2" className="opacity-40" />
          <g className="animate-[spin_10s_cubic-bezier(0.4,0,0.2,1)_infinite]" style={{ transformOrigin: 'center' }}>
            <line x1="50" y1="50" x2="50" y2="10" className="stroke-1" />
          </g>
          <circle cx="50" cy="50" r="2" className="fill-white" />
        </svg>
      </div>
    </div>
  );
}
