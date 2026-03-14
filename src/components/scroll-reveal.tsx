
"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const revealCallbacks = new WeakMap<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver() {
  if (sharedObserver || typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return sharedObserver;
  }

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }

        const callback = revealCallbacks.get(entry.target);
        callback?.();
        revealCallbacks.delete(entry.target);
        sharedObserver?.unobserve(entry.target);
      }
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  return sharedObserver;
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = getSharedObserver();
    if (!observer) {
      setIsVisible(true);
      return;
    }

    revealCallbacks.set(node, () => setIsVisible(true));
    observer.observe(node);

    return () => {
      revealCallbacks.delete(node);
      observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-reveal",
        isVisible && "active",
        className
      )}
      style={isVisible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
