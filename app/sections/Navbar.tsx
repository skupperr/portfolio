"use client";
import { createContext, useState } from "react";
import { Github, Zap } from "lucide-react";
import { Frame } from "@/components/nurui/frame";
import { motion } from "framer-motion";
import Link from "next/link";

export const MobileMenuContext = createContext<{
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  showMenu: true,
  setShowMenu: () => { },
});

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  // 🎨 Direct color constants
  const primaryStroke = "#4f46e5"; // Indigo
  const primaryFill = "rgba(79, 70, 229, 0.2)";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: 0.5,
      }}
    >
      <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
        <div className="relative flex items-center justify-center rounded-2xl backdrop-blur-md bg-secondary/5 border border-white/20 shadow-[0_0_30px_rgba(79,70,229,0.4)] px-10 py-4 w-xl h-12">
          {/* Your futuristic Frame component */}
          <Frame
            enableBackdropBlur
            className="absolute inset-0 -z-10 rounded-2xl"
            paths={JSON.parse(
              `[{
          "show":true,
          "style":{"strokeWidth":"1.5","stroke":"${primaryStroke}","fill":"rgba(79,70,229,0.05)"},
          "path":[["M","6","0"],["L","100% - 6.5","0"],["L","100% + 0","0% + 9"],["L","100% - 28","100% - 15"],["L","162","100% - 15"],["L","164","100% - 30"],["L","153","100% - 15"],["L","27","100% - 15"],["L","0","0% + 8"],["L","6","0"]]
        }]`
            )}
          />

          {/* Navbar Links */}
          <nav className="flex items-center gap-10 font-medium text-foreground/90">
            <Link
              href="/"
              className="font-bold text-lg tracking-wide hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition"
            >
              Home
            </Link>

            <Link href="/about" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition">About</Link>
            <Link href="/projects" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition">Projects</Link>
            <Link href="/experience" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition">Experience</Link>
            <Link href="/contact" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition">Contact</Link>
          </nav>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
