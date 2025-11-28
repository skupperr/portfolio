// "use client";
// import { createContext, useState } from "react";
// import { Github, Zap } from "lucide-react";
// import { Frame } from "@/components/nurui/frame";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export const MobileMenuContext = createContext<{
//   showMenu: boolean;
//   setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
// }>({
//   showMenu: true,
//   setShowMenu: () => { },
// });

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);

//   // 🎨 Direct color constants
//   const primaryStroke = "#4f46e5"; // Indigo
//   const primaryFill = "rgba(79, 70, 229, 0.2)";

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{
//         duration: 0.4,
//         ease: "easeInOut",
//         delay: 0.5,
//       }}
//     >
//       <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
//         <div className="relative flex items-center justify-center rounded-2xl backdrop-blur-md bg-secondary/5 border border-white/20 shadow-[0_0_30px_rgba(79,70,229,0.4)] px-10 py-4 w-xl h-12">
//           {/* Your futuristic Frame component */}
//           <Frame
//             enableBackdropBlur
//             className="absolute inset-0 -z-10 rounded-2xl"
//             paths={JSON.parse(
//               `[{
//           "show":true,
//           "style":{"strokeWidth":"1.5","stroke":"${primaryStroke}","fill":"rgba(79,70,229,0.05)"},
//           "path":[["M","6","0"],["L","100% - 6.5","0"],["L","100% + 0","0% + 9"],["L","100% - 28","100% - 15"],["L","162","100% - 15"],["L","164","100% - 30"],["L","153","100% - 15"],["L","27","100% - 15"],["L","0","0% + 8"],["L","6","0"]]
//         }]`
//             )}
//           />

//           {/* Navbar Links */}
//           <nav className="flex items-center gap-10 font-medium text-foreground/90">
//             <Link
//               href="/"
//               className="font-bold text-lg tracking-wide hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition"
//             >
//               Home
//             </Link>

//             <Link href="/about" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition">About</Link>
//             <Link href="/projects" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition">Projects</Link>
//             <Link href="/experience" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition">Experience</Link>
//             <Link href="/contact" className="hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition">Contact</Link>
//           </nav>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Navbar;


import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import localFont from 'next/font/local'
 
const myFont = localFont({
  src: './agale.woff2',
})

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    setShowMenu(false); // Close mobile menu on click
    
    if (pathname === "/") {
      // Already on homepage → smooth-scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate home → wait for render → scroll
      router.push(`/#${id}`);
    }
  };

  useEffect(() => {
    controls.start({
      y: isVisible ? 0 : -120,
      opacity: isVisible ? 1 : 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    });
  }, [isVisible, controls]);

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1] as const,
          delay: 0.3,
        }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto max-w-7xl"
      >
        <div className="relative flex items-center justify-between md:justify-center gap-4 md:gap-8 rounded-full backdrop-blur-xl bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 border border-amber-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_80px_rgba(251,191,36,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] px-4 md:px-8 py-3 md:py-3.5">

          {/* Premium Noise Texture Overlay */}
          <div
            className="absolute inset-0 rounded-full opacity-[0.02] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Logo/Brand (Mobile) */}
          <button
            onClick={() => scrollToSection("hero")}
            className={`md:hidden text-amber-200 font-light text-xl tracking-wide ${myFont.className}`}
            // style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
          >
            ASIF AHMED
          </button>
          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-light text-slate-200" style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-base tracking-wide hover:text-amber-200 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.4)] relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="text-base tracking-wide hover:text-amber-200 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.4)] relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection("project")}
              className="text-base tracking-wide hover:text-amber-200 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.4)] relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection("experience")}
              className="text-base tracking-wide hover:text-amber-200 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.4)] relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-base tracking-wide hover:text-amber-200 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.4)] relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"></div>

            {/* Resume Download Button */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-amber-400/10 to-amber-500/5 border border-amber-400/30 text-amber-100 text-sm font-light tracking-wide hover:bg-amber-400/20 hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-300 group"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Icons */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-amber-400/10 to-amber-500/5 border border-amber-400/30 text-amber-100 text-sm font-light tracking-wide hover:bg-amber-400/20 hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-300 group"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              <span>Resume</span>
            </a>
            
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 text-slate-200 hover:text-amber-200 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {showMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: showMenu ? 1 : 0,
          y: showMenu ? 0 : -20,
          pointerEvents: showMenu ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-sm"
      >
        <nav
          className="flex flex-col gap-1 p-4 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 border border-amber-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_80px_rgba(251,191,36,0.08)]"
          style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
        >
          {/* Premium Noise Texture */}
          <div
            className="absolute inset-0 rounded-3xl opacity-[0.02] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>

          <button
            onClick={() => scrollToSection("hero")}
            className="text-left px-4 py-3 text-slate-200 hover:text-amber-200 hover:bg-amber-400/5 rounded-xl transition-all duration-300 font-light tracking-wide"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-left px-4 py-3 text-slate-200 hover:text-amber-200 hover:bg-amber-400/5 rounded-xl transition-all duration-300 font-light tracking-wide"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("project")}
            className="text-left px-4 py-3 text-slate-200 hover:text-amber-200 hover:bg-amber-400/5 rounded-xl transition-all duration-300 font-light tracking-wide"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-left px-4 py-3 text-slate-200 hover:text-amber-200 hover:bg-amber-400/5 rounded-xl transition-all duration-300 font-light tracking-wide"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-left px-4 py-3 text-slate-200 hover:text-amber-200 hover:bg-amber-400/5 rounded-xl transition-all duration-300 font-light tracking-wide"
          >
            Contact
          </button>
        </nav>
      </motion.div>

      {/* Backdrop for mobile menu */}
      {showMenu && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setShowMenu(false)}
        />
      )}
    </>
  );
}

export default Navbar;