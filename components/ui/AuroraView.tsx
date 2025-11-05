// AuroraView.tsx:

"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

const AuroraTextComponent = ({
  children,
  className = "",
  colors = [],
  speed = 1,
}: AuroraTextProps) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: `${10 / speed}s`,
  };

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="sr-only">{children}</span>
      <span
        className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
        style={gradientStyle}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
};

export const AuroraText = memo(AuroraTextComponent);
AuroraText.displayName = "AuroraText";

export default function AuroraView({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @keyframes aurora {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-aurora {
          animation-name: aurora;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-aurora { animation: none; }
        }
      `}</style>

      <main className="flex items-center justify-center  text-black dark:text-white">
        <h1 className="text-3xl md:text-[3.5rem] font-bold">
          <AuroraText speed={2} colors={["#FF007A", "#00BFFF", "#f400a1"]}>
            {children}
          </AuroraText>
        </h1>
      </main>
    </>
  );
}