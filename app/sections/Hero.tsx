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



const FloatingTag: React.FC<{
  name: string;
  top: string;
  left: string;
  index: number;
  delay: number;
}> = ({ name, top, left, index, delay }) => {
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      await new Promise((res) => setTimeout(res, delay * 1000));

      // === Spiral-in with neon trail ===
      await controls.start({
        opacity: [0, 1],
        scale: [0.3, 1.2, 1],
        rotate: [-25, 10, 0],
        x: [0, 5, 0],
        y: [0, -5, 0],
        filter: [
          "drop-shadow(0 0 5px rgba(255, 0, 255, 0.6))",
          "drop-shadow(0 0 20px rgba(255, 0, 255, 0.8))",
          "drop-shadow(0 0 8px rgba(255, 0, 255, 0.6))",
        ],
        transition: {
          duration: 1.5,
          ease: "easeOut",
        },
      });

      // === Begin floating ===
      startFloating();
    };

    const startFloating = () => {
      const amplitude = 4 + Math.random() * 4;
      const duration = 5 + Math.random() * 3;
      const phase = Math.random() * 2 * Math.PI;

      controls.start({
        x: [0, Math.sin(phase) * amplitude, -Math.sin(phase) * amplitude, 0],
        y: [0, -Math.cos(phase) * amplitude, Math.cos(phase) * amplitude, 0],
        scale: 1, // lock in consistent scale
        transition: {
          duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      });
    };

    startAnimation();
  }, [controls, delay]);


  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop();
  };

  const handleDragEnd = async () => {
    setIsDragging(false);

    // Smooth return — explicitly reset scale to avoid shrink bug
    await controls.start({
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    });

    // Restart floating
    const amplitude = 4 + Math.random() * 4;
    const duration = 5 + Math.random() * 3;
    const phase = Math.random() * 2 * Math.PI;

    controls.start({
      x: [0, Math.sin(phase) * amplitude, -Math.sin(phase) * amplitude, 0],
      y: [0, -Math.cos(phase) * amplitude, Math.cos(phase) * amplitude, 0],
      scale: 1,
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    });
  };

  return (
    <motion.div
      className="
        absolute px-5 py-2 rounded-full
        border border-fuchsia-500/70 bg-[#00001a]/80 text-fuchsia-300
        shadow-[0_0_20px_rgba(217,70,239,0.45)]
        text-sm md:text-base font-medium backdrop-blur-sm
        select-none cursor-grab whitespace-nowrap
      "
      style={{
        top,
        left,
        transform: "translate(-50%, -50%)",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20
      }}
      drag
      dragMomentum={false}
      dragElastic={0.18}
      whileDrag={{
        scale: 1.05,
        cursor: "grabbing",
        filter: "drop-shadow(0 0 25px rgba(255, 0, 255, 0.9))",
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
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
    <section className="relative flex flex-col items-center min-h-screen overflow-hidden text-center justify-center">
      {/* Backgrounds */}
      {/* <div
        className="absolute inset-0 z-0
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),
               linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
          bg-[size:3rem_3rem]
          pointer-events-none"
      />
      <div
        className="absolute inset-0 z-0
          bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.12),transparent_40%)]
          pointer-events-none"
      /> */}

      {/* Background Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.2),transparent_40%)]"></div>

      {/* Foreground content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-8 px-4" style={{
        marginBottom: 70, marginTop: 50
      }}>
        {/* Left Text */}
        <motion.h1
          className="font-bold text-cyan-400 drop-shadow-[0_0_12px_rgba(0,255,255,0.45)] text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-fuchsia-400 text-xl md:text-3xl">Hi, I’m</span> <br />
          <span className=" text-3xl md:text-[3.5rem] name">ASIF<br />AHMED</span>
        </motion.h1>


        {/* Center Image */}
        <motion.div
          className="relative w-40 h-40 md:w-52 md:h-52 rounded-full animate-pulse-glow overflow-hidden border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.4)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <img
            src="https://picsum.photos/seed/portfolio/200/200"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Right Text */}
        <motion.h1
          className="font-bold text-cyan-400 drop-shadow-[0_0_12px_rgba(0,255,255,0.45)] text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-2xl md:text-4xl">Creative</span><br />
          {/* <span className="text-3xl md:text-6xl text-fuchsia-400">Technologist</span> */}
          <AuroraText>Technologist</AuroraText>

        </motion.h1>
      </div>
      <motion.p
        className="mt-64 pt-64 md:mt-40 max-w-2xl text-slate-200 text-lg md:text-2xl font-light mb-20"
        style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.38)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
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
