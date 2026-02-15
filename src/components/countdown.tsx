
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
      {/* Time Units */}
      <div className="flex justify-center gap-6 md:gap-16">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <div className="text-5xl md:text-8xl font-bold text-[#F4F1F9] mb-3 font-serif tracking-tighter tabular-nums transition-transform group-hover:scale-110 duration-500">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-primary font-bold opacity-80 group-hover:opacity-100 transition-opacity">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Global Diplomatic Compass Animation */}
      <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Pulsing Outer Rings */}
        <div className="absolute inset-0 border border-primary/10 rounded-full animate-[ping_4s_ease-in-out_infinite]" />
        <div className="absolute inset-8 border border-primary/20 rounded-full animate-[ping_5s_ease-in-out_infinite_1s]" />
        
        {/* The Core Engine */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-none stroke-current stroke-[0.5]">
          {/* Rotating Latitude/Longitude Wireframe (The Globe) */}
          <g className="animate-[spin_40s_linear_infinite]" style={{ transformOrigin: 'center' }}>
            <circle cx="50" cy="50" r="48" className="opacity-20" />
            <ellipse cx="50" cy="50" rx="48" ry="15" className="opacity-30" />
            <ellipse cx="50" cy="50" rx="15" ry="48" className="opacity-30" />
            <ellipse cx="50" cy="50" rx="48" ry="32" className="opacity-20" />
            <ellipse cx="50" cy="50" rx="32" ry="48" className="opacity-20" />
          </g>
          
          {/* Static Horizon/Equator Lines */}
          <line x1="2" y1="50" x2="98" y2="50" className="opacity-40" strokeDasharray="1 3" />
          <line x1="50" y1="2" x2="50" y2="98" className="opacity-40" strokeDasharray="1 3" />
          
          {/* Precision Chronometer Markers */}
          <circle cx="50" cy="50" r="42" strokeWidth="0.2" className="opacity-40" />
          <circle cx="50" cy="50" r="42" strokeDasharray="0.5 10.5" strokeWidth="3" className="opacity-60" />
          
          {/* Sweeping Diplomatic "Axis" */}
          <g className="animate-[spin_10s_cubic-bezier(0.4,0,0.2,1)_infinite]" style={{ transformOrigin: 'center' }}>
            <line x1="50" y1="50" x2="50" y2="8" className="stroke-1 opacity-80" strokeLinecap="round" />
            <circle cx="50" cy="8" r="1.5" className="fill-primary" />
            <line x1="50" y1="50" x2="50" y2="92" className="stroke-0.5 opacity-30" strokeLinecap="round" />
          </g>
          
          {/* Center Point of Balance */}
          <circle cx="50" cy="50" r="4" className="fill-background" />
          <circle cx="50" cy="50" r="2" className="fill-primary animate-pulse" />
        </svg>

        {/* Floating Technical Data Points (Subtle) */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-[0.5em] text-primary/40 whitespace-nowrap">
          Strategic Alliance Engine
        </div>
      </div>
    </div>
  );
}
