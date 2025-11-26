import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "from developer import asif_ahmed";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80); // Typing speed

    const timer = setTimeout(() => {
      setIsLoading();
    }, fullText.length * 80 + 800); // Wait for typing + brief pause

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="
            fixed inset-0 z-[100]
            flex flex-col justify-center items-center
            bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
            overflow-hidden
          "
        >
          {/* Elegant Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.04),transparent_50%)]"></div>
          
          {/* Premium Noise Texture */}
          <div 
            className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Animated Glow */}
          <motion.div
            className="absolute w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[150px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Code Terminal Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 max-w-2xl w-full mx-4"
          >
            {/* Terminal Window */}
            <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-amber-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(251,191,36,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden">
              
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-950/50 border-b border-amber-400/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-slate-500 font-light" style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}>
                    terminal
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-8 font-mono text-lg md:text-xl">
                <div className="flex items-center gap-3">
                  {/* Command Prompt */}
                  <span className="text-amber-400/80">→</span>
                  
                  {/* Typing Text */}
                  <div className="flex-1">
                    <span className="text-slate-300" style={{ fontFamily: "'Fira Code', 'Monaco', 'Courier New', monospace" }}>
                      <span className="text-amber-200">{displayedText}</span>
                    </span>
                    
                    {/* Blinking Cursor */}
                    <motion.span
                      className="inline-block w-2 h-5 ml-1 bg-amber-400"
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Loading Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex items-center justify-center gap-2"
            >
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-amber-400/60"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              <span className="text-slate-500 text-sm font-light ml-3" style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}>
                Initializing
              </span>
            </motion.div>
          </motion.div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;