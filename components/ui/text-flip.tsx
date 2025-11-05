"use client";

import { useEffect, useMemo, useRef } from "react";
import "./text-flip.css";

export default function TextFlip() {
  const words = useMemo(() => ["think", "learn", "adapt"], []);
  const tallestRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0;
      words.forEach((word) => {
        const span = document.createElement("span");
        span.className = "absolute opacity-0";
        span.textContent = word;
        tallestRef.current?.appendChild(span);
        const height = span.offsetHeight;
        tallestRef.current?.removeChild(span);
        if (height > maxHeight) maxHeight = height;
      });
      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [words]);

  return (
    <span ref={tallestRef} className="relative inline-flex overflow-hidden align-middle items-center w-[5ch]">
      {words.map((word, i) => (
        <span key={i} className="absolute left-0 animate-flip-words opacity-0">
          {word}
        </span>
      ))}
    </span>
  );
}
