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

  if (!timeLeft) return <div className="h-24" />; // Prevent layout shift during hydration

  return (
    <div className="flex justify-center gap-6 md:gap-12 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
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
  );
}
