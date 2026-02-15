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

      {/* Animated Hourglass */}
      <div className="relative">
        <svg
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary/70 animate-[spin_6s_ease-in-out_infinite]"
        >
          {/* Base and Top Frame */}
          <path d="M5 2h14M5 22h14" />
          
          {/* Glass Bulb Outlines */}
          <path d="M6 2v1c0 3.3 2.7 6 6 6s6-2.7 6-6V2" />
          <path d="M6 22v-1c0-3.3 2.7-6 6-6s6 2.7 6 6v1" />
          
          {/* Flowing Sand Line */}
          <line x1="12" y1="9" x2="12" y2="15" strokeDasharray="1 2">
            <animate attributeName="stroke-dashoffset" values="3;0" dur="1s" repeatCount="indefinite" />
          </line>
          
          {/* Top Sand Level - Draining */}
          <path d="M9 4.5c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5" fill="currentColor" className="opacity-40">
             <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
          </path>
          
          {/* Bottom Sand Pile - Accumulating */}
          <path d="M9 19.5c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" fill="currentColor" className="opacity-10">
             <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </div>
  );
}