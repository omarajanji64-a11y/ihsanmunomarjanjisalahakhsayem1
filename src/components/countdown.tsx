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

      {/* Symbolic Animated Hourglass */}
      <div className="relative group cursor-wait">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          {/* Outer Ethereal Ring */}
          <circle 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="4 4" 
            className="opacity-30 animate-[spin_10s_linear_infinite]" 
          />
          
          {/* Symbolic Hourglass - Two Triangles */}
          <g className="animate-[spin_8s_ease-in-out_infinite]">
            {/* Top Triangle - Knowledge */}
            <path 
              d="M7 6L17 6L12 12L7 6Z" 
              fill="currentColor" 
              className="opacity-40"
            >
              <animate attributeName="opacity" values="0.4;0.1;0.4" dur="4s" repeatCount="indefinite" />
            </path>
            
            {/* Bottom Triangle - Resolution */}
            <path 
              d="M12 12L17 18L7 18L12 12Z" 
              fill="currentColor" 
              className="opacity-10"
            >
              <animate attributeName="opacity" values="0.1;0.6;0.1" dur="4s" repeatCount="indefinite" />
            </path>
            
            {/* The Central Point - Diplomacy */}
            <circle cx="12" cy="12" r="0.8" fill="currentColor" className="animate-pulse" />
          </g>

          {/* Flowing Line */}
          <line 
            x1="12" 
            y1="8" 
            x2="12" 
            y2="16" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="1 3"
            className="opacity-50"
          >
            <animate attributeName="stroke-dashoffset" values="4;0" dur="2s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
    </div>
  );
}
