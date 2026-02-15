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

  if (!timeLeft) return <div className="h-32" />;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {units.map((unit, idx) => (
        <div 
          key={idx} 
          className="glass-card flex flex-col items-center px-8 py-6 min-w-[120px] md:min-w-[140px] border border-white/10"
        >
          <div className="text-4xl md:text-5xl font-bold text-white mb-1 tabular-nums tracking-tighter">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
