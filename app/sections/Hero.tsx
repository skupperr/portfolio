"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import AuroraText from "@/components/ui/AuroraView";
import TextFlip from "@/components/ui/text-flip";


/** Skill Data */
const skills = [
  { name: "Web Developer", top: "20%", left: "30%", delay: 0.2 },
  { name: "Full-Stack", top: "24%", left: "60%", delay: 0.5 },
  { name: "Backend & Database", top: "60%", left: "13%", delay: 0.8 },
  { name: "Software Developer", top: "57%", left: "68%", delay: 1.1 },
  { name: "Agentic System", top: "85%", left: "30%", delay: 1.4 },
  { name: "System Design", top: "83%", left: "65%", delay: 1.7 },
];



// const FloatingTag: React.FC<{
//   name: string;
//   top: string;
//   left: string;
//   index: number;
//   delay: number;
// }> = ({ name, top, left, index, delay }) => {
//   const [isDragging, setIsDragging] = useState(false);
//   const controls = useAnimationControls();

//   useEffect(() => {
//     const startAnimation = async () => {
//       await new Promise((res) => setTimeout(res, delay * 1000));

//       // === Spiral-in with neon trail ===
//       await controls.start({
//         opacity: [0, 1],
//         scale: [0.3, 1.2, 1],
//         rotate: [-25, 10, 0],
//         x: [0, 5, 0],
//         y: [0, -5, 0],
//         filter: [
//           // "drop-shadow(0 0 5px rgba(255, 0, 255, 0.6))",
//           // "drop-shadow(0 0 20px rgba(255, 0, 255, 0.8))",
//           // "drop-shadow(0 0 8px rgba(255, 0, 255, 0.6))",
//         ],
//         transition: {
//           duration: 1.5,
//           ease: "easeOut",
//         },
//       });

//       // === Begin floating ===
//       startFloating();
//     };

//     const startFloating = () => {
//       const amplitude = 4 + Math.random() * 4;
//       const duration = 5 + Math.random() * 3;
//       const phase = Math.random() * 2 * Math.PI;

//       controls.start({
//         x: [0, Math.sin(phase) * amplitude, -Math.sin(phase) * amplitude, 0],
//         y: [0, -Math.cos(phase) * amplitude, Math.cos(phase) * amplitude, 0],
//         scale: 1, // lock in consistent scale
//         transition: {
//           duration,
//           repeat: Infinity,
//           repeatType: "mirror",
//           ease: "easeInOut",
//         },
//       });
//     };

//     startAnimation();
//   }, [controls, delay]);


//   const handleDragStart = () => {
//     setIsDragging(true);
//     controls.stop();
//   };

//   const handleDragEnd = async () => {
//     setIsDragging(false);

//     // Smooth return — explicitly reset scale to avoid shrink bug
//     await controls.start({
//       x: 0,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 1.4,
//         ease: [0.25, 0.1, 0.25, 1],
//       },
//     });

//     // Restart floating
//     const amplitude = 4 + Math.random() * 4;
//     const duration = 5 + Math.random() * 3;
//     const phase = Math.random() * 2 * Math.PI;

//     controls.start({
//       x: [0, Math.sin(phase) * amplitude, -Math.sin(phase) * amplitude, 0],
//       y: [0, -Math.cos(phase) * amplitude, Math.cos(phase) * amplitude, 0],
//       scale: 1,
//       transition: {
//         duration,
//         repeat: Infinity,
//         repeatType: "mirror",
//         ease: "easeInOut",
//       },
//     });
//   };

//   return (
//     <motion.div
//       className="
//             absolute px-6 py-2.5 rounded-full
//             border border-amber-400/20 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90
//             text-amber-50 backdrop-blur-xl
//             shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]
//             text-sm md:text-base font-light tracking-wide
//             select-none cursor-grab whitespace-nowrap
//             hover:border-amber-400/40 hover:shadow-[0_8px_40px_rgba(251,191,36,0.15)]
//           "
//       style={{
//         top,
//         left,
//         transform: "translate(-50%, -50%)",
//         fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
//         letterSpacing: "0.02em",
//       }}
//       drag
//       dragMomentum={false}
//       dragElastic={0.3}
//       dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
//       whileDrag={{
//         scale: 1.03,
//         cursor: "grabbing",
//         boxShadow: "0 12px 48px rgba(251, 191, 36, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
//         borderColor: "rgba(251, 191, 36, 0.5)",
//       }}
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEnd}
//       animate={controls}
//       initial={{ opacity: 0, scale: 0.9, y: 10 }}
//     >
//       {name}
//     </motion.div>
//   );
// };

const FloatingTag: React.FC<{
  name: string;
  top: string;
  left: string;
  index: number;
  delay: number;
}> = ({ name, top, left, index, delay }) => {
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimationControls();
  const [mobilePos, setMobilePos] = useState<{ top: string; left: string; scale: number }>({
    top,
    left,
    scale: 1,
  });

  // Update mobile positions on mount
  useEffect(() => {
    const updateMobile = () => {
      if (window.innerWidth < 768) {
        // Demo values for mobile; you can tweak later
        const demoMobilePositions = [
          { top: "20%", left: "3%", scale: 0.8 },
          { top: "15%", left: "69%", scale: 0.8 },
          { top: "58%", left: "-5%", scale: 0.8 },
          { top: "30%", left: "63%", scale: 0.8 },
          { top: "73%", left: "30%", scale: 0.8 },
          { top: "56%", left: "62%", scale: 0.8 },
        ];
        setMobilePos(demoMobilePositions[index] || { top, left, scale: 0.7 });
      } else {
        setMobilePos({ top, left, scale: 1 });
      }
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, [index, top, left]);

  useEffect(() => {
    const startAnimation = async () => {
      await new Promise((res) => setTimeout(res, delay * 1000));

      await controls.start({
        opacity: [0, 1],
        scale: [0.3, 1.2, mobilePos.scale],
        rotate: [-25, 10, 0],
        x: [0, 5, 0],
        y: [0, -5, 0],
        transition: { duration: 1.5, ease: "easeOut" },
      });

      startFloating();
    };

    const startFloating = () => {
      const amplitude = 4 + Math.random() * 4;
      const duration = 5 + Math.random() * 3;
      const phase = Math.random() * 2 * Math.PI;

      controls.start({
        x: [0, Math.sin(phase) * amplitude, -Math.sin(phase) * amplitude, 0],
        y: [0, -Math.cos(phase) * amplitude, Math.cos(phase) * amplitude, 0],
        scale: mobilePos.scale,
        transition: { duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
      });
    };

    startAnimation();
  }, [controls, delay, mobilePos.scale]);

  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop();
  };

  const handleDragEnd = async () => {
    setIsDragging(false);

    await controls.start({
      x: 0,
      y: 0,
      scale: mobilePos.scale,
      transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
    });

    const amplitude = 4 + Math.random() * 4;
    const duration = 5 + Math.random() * 3;
    const phase = Math.random() * 2 * Math.PI;

    controls.start({
      x: [0, Math.sin(phase) * amplitude, -Math.sin(phase) * amplitude, 0],
      y: [0, -Math.cos(phase) * amplitude, Math.cos(phase) * amplitude, 0],
      scale: mobilePos.scale,
      transition: { duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
    });
  };

  return (
    <motion.div
      className={`
        absolute px-6 py-2.5 rounded-full
        border border-amber-400/20 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90
        text-amber-50
        shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]
        text-xs md:text-base font-light tracking-wide
        select-none cursor-grab whitespace-nowrap
        hover:border-amber-400/40 hover:shadow-[0_8px_40px_rgba(251,191,36,0.15)]
      `}
      style={{
        top: mobilePos.top,
        left: mobilePos.left,
        transform: "translate(-50%, -50%)",
        fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
        letterSpacing: "0.02em",
      }}
      drag
      dragMomentum={false}
      dragElastic={0.3}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      whileDrag={{
        scale: mobilePos.scale * 1.03,
        cursor: "grabbing",
        boxShadow: "0 12px 48px rgba(251, 191, 36, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
        borderColor: "rgba(251, 191, 36, 0.5)",
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
    >
      {name}
    </motion.div>
  );
};




/** Main Hero Component */
const Hero: React.FC = () => {


  useEffect(() => {
    // Dynamic import to ensure anime.js loads properly
    const initAnimation = async () => {
      const anime = await import('animejs');

      // Wait a bit for Framer Motion to finish
      setTimeout(() => {
        const targets = document.querySelector('.name');
        if (!targets) return;

        const { chars } = anime.splitText('.name', {
          chars: { wrap: 'clip' },
        });

        anime.animate(chars, {
          y: [
            { to: ['100%', '0%'] },
            { to: '-100%', delay: 5000, ease: 'in(3)' }
          ],
          duration: 750,
          ease: 'out(3)',
          delay: anime.stagger(50),
          loop: true,
        });
      }, 1000); // Wait for Framer Motion animation to complete
    };

    initAnimation();
  }, []);


  return (
    <section id="hero" className="relative flex flex-col items-center min-h-screen overflow-hidden text-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Elegant Grid Background with Luxury Gradient */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.03),transparent_50%)]"></div>

      {/* Premium Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-12 px-4" style={{
        marginBottom: 70, marginTop: 130
      }}>
        {/* Left Text */}
        <motion.h1
          className="font-bold  text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-amber-100/60 text-xl md:text-3xl font-light tracking-wider">Hi, I’m</span> <br />
          <span
            className="
            relative z-20
            text-4xl md:text-[4rem]
            bg-clip-text text-transparent
            bg-gradient-to-br from-amber-200 via-amber-100 to-slate-200
            font-extralight leading-tight
  "
          // style={{ letterSpacing: "0.02em" }}
          >
            ASIF<br />AHMED
          </span>


        </motion.h1>


        {/* Center Image */}
        <motion.div
          className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden 
                             border-2 border-amber-400/30 
                             shadow-[0_0_80px_rgba(251,191,36,0.2),0_0_40px_rgba(251,191,36,0.15),inset_0_2px_4px_rgba(255,255,255,0.1)]"
          style={{
            animation: "luxury-glow 5s ease-in-out infinite"
          }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent"></div> */}
          <img
            src="./profile.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Right Text */}
        <motion.h1
          className="font-light tracking-tight text-center z-0"
          style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-3xl md:text-5xl text-amber-100/80 font-light tracking-wide">Creative</span><br />
          <AuroraText>Technologist</AuroraText>
        </motion.h1>
      </div>

      <motion.p
        className="max-w-2xl text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-20 tracking-wide"
        style={{
          fontFamily: "'Inter', 'SF Pro Display', sans-serif",
          textShadow: "0 2px 20px rgba(0, 0, 0, 0.4)"
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Passionate about building intelligent systems that <TextFlip /> <br />
        merging creativity with computation.
      </motion.p>

      {/* Floating Skills Layer */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        {skills.map((s, i) => (
          <FloatingTag key={s.name} name={s.name} top={s.top} left={s.left} index={i} delay={s.delay} />
        ))}
      </div>


    </section>
  );
};

export default Hero;

