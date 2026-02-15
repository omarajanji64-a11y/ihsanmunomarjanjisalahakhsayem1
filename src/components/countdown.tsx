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
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary/60 animate-[spin_4s_linear_infinite]"
        >
          <path d="M5 2h14" />
          <path d="M5 22h14" />
          <path d="M6 2v1c0 3.3 2.7 6 6 6s6-2.7 6-6V2" />
          <path d="M6 22v-1c0-3.3 2.7-6 6-6s6 2.7 6 6v1" />
          
          {/* Sand animation effect */}
          <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse">
            <animate
              attributeName="cy"
              values="9;15"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}
