"use client";

import { useEffect, useRef } from "react";

export function Reveal({
  children,
  className = "motion-rise",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("revealed");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.add("revealed");
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`motion-reveal ${className}`}>
      {children}
    </div>
  );
}
