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

  if (!timeLeft) return <div className="h-48" />; // Prevent layout shift during hydration

  return (
    <div className="flex flex-col items-center gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex justify-center gap-6 md:gap-12">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-bold text-[#F4F1F9] mb-2 font-serif tracking-tighter tabular-nums">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary font-bold">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Diplomatic Time Animation */}
      <div className="relative w-32 h-32 flex items-center justify-center opacity-40">
        <div className="absolute inset-0 border border-primary/20 rounded-full animate-[ping_3s_ease-in-out_infinite]" />
        <div className="absolute inset-4 border border-primary/30 rounded-full animate-[ping_4s_ease-in-out_infinite_1s]" />
        <div className="absolute inset-8 border border-primary/40 rounded-full animate-[ping_5s_ease-in-out_infinite_2s]" />
        
        {/* Symbolic Time Engine (Clock-like) */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-none stroke-current stroke-1">
          {/* Outer Clock Face with markers */}
          <circle cx="50" cy="50" r="48" strokeWidth="0.5" className="opacity-20" />
          <circle cx="50" cy="50" r="48" strokeDasharray="1 11.5" strokeWidth="4" className="opacity-50" />
          
          {/* Subtle inner rotating ring */}
          <circle cx="50" cy="50" r="35" className="opacity-10 animate-[spin_30s_linear_infinite]" style={{ transformOrigin: 'center' }} strokeDasharray="2 4" />
          
          {/* Sweeping Diplomatic Hand */}
          <g className="animate-[spin_6s_linear_infinite]" style={{ transformOrigin: 'center' }}>
            <line x1="50" y1="50" x2="50" y2="10" className="stroke-2 opacity-80" strokeLinecap="round" />
            <circle cx="50" cy="10" r="2" className="fill-primary" />
          </g>
          
          {/* Center Axis */}
          <circle cx="50" cy="50" r="3" className="fill-primary" />
        </svg>
      </div>
    </div>
  );
}
