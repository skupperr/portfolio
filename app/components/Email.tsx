import React from "react";
import { motion } from "framer-motion";

function Email() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.8,
      }}
      className="
        fixed bottom-0 right-16 z-50 flex flex-col gap-6
        after:block after:w-px after:h-24 after:mx-auto 
        after:bg-gradient-to-t after:from-amber-500 after:to-transparent
        max-[1080px]:right-8
        max-[768px]:hidden
      "
    >
      <a
        href="mailto:mylifeasasif@gmail.com"
        className="
          [writing-mode:vertical-rl] no-underline text-slate-400
          font-light text-sm tracking-[0.15em] mb-6
          px-3 py-2 rounded-lg
          transition-all duration-300 ease-out
          hover:text-amber-300 hover:tracking-[0.2em]
          hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]
          focus:outline-none focus:text-amber-300
          relative group
        "
        style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
      >
        {/* Background glow effect */}
        <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-400/0 to-amber-500/0 group-hover:from-amber-400/5 group-hover:to-amber-500/5 transition-all duration-300"></span>
        
        <span className="relative">mylifeasasif@gmail.com</span>
      </a>
    </motion.div>
  );
}

export default Email;