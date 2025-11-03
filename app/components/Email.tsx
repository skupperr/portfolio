import React from "react";
import { motion } from "framer-motion";

function Email() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: 0.5,
      }}
      className="
        fixed bottom-0 right-16 z-50 flex flex-col gap-15
        after:block after:w-[2px] after:h-[90px] after:mx-auto after:bg-foreground/90
        max-[1080px]:right-8
        max-[768px]:hidden
      "
    >
      <a
        href="mailto:mylifeasasif@gmail.com"
        className="
          [writing-mode:vertical-rl] no-underline text-foreground/90
          font-mono text-md tracking-[0.1rem] mb-5 outline-dashed outline-2 outline-transparent
          p-2 transition-colors duration-500 ease-in-out
          hover:text-secondary focus:outline-secondary 
        "
      >
        mylifeasasif@gmail.com
      </a>
    </motion.div>
  );
}

export default Email;
