

// import React, { useEffect, useRef } from 'react';

// // Controls the smoothness/inertia. A smaller value means more "glide".
// const LERP_FACTOR = 0.08;

// const About: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const animationFrameId = useRef<number | null>(null);

//   // Target progress (0 to 1), updated directly on scroll
//   const targetProgress = useRef(0);

//   // Refs for the elements to apply styles directly for performance
//   const photoWrapperRef = useRef<HTMLDivElement>(null);
//   const textWrapperRef = useRef<HTMLDivElement>(null);

//   // Refs to store the current, interpolated animation values
//   const currentProgress = useRef(0);


//   const animate = () => {
//     // Smooth interpolation on progress itself
//     currentProgress.current += (targetProgress.current - currentProgress.current) * LERP_FACTOR;
//     const progress = currentProgress.current;

//     // Non-linear ease — smoother approach to the viewer
//     const easedProgress = Math.pow(progress, 1.6);

//     // Check if we're on a mobile device
//     const isMobile = window.innerWidth < 768;

//     // Photo movement - horizontal on desktop, vertical on mobile
//     const photoX = isMobile ? 0 : -18 * easedProgress;
//     const photoY = isMobile ? -27 * easedProgress : 0;
//     const photoZ = 300 - easedProgress * 300;
//     const rotationPhoto = easedProgress * -6;

//     // Text movement - horizontal on desktop, vertical on mobile
//     const textX = isMobile ? 0 : 19 * easedProgress;
//     const textY = isMobile ? 20 * easedProgress : 0;

//     // Text depth and scale (starts far behind, rushes forward)
//     const maxDepthText = 1000;
//     const textZ = -maxDepthText + easedProgress * maxDepthText;
//     const textScale = 0.6 + 0.4 * easedProgress;
//     const rotationText = easedProgress * 6;

//     // Opacity smooth fade-in
//     const textOpacity = Math.min(easedProgress * 1.8, 1);

//     // Blur effect - starts very blurry, clears up as it comes forward
//     const textBlur = 20 * (1 - easedProgress); // 20px blur at start, 0 at end

//     // Apply transforms
//     if (photoWrapperRef.current && textWrapperRef.current) {
//       photoWrapperRef.current.style.transform = `
//       translate3d(calc(-50% + ${photoX}vw), calc(-50% + ${photoY}vh), ${photoZ}px)
//       rotateY(${rotationPhoto}deg)
//     `;

//       textWrapperRef.current.style.transform = `
//       translate3d(calc(-50% + ${textX}vw), calc(-50% + ${textY}vh), ${textZ}px)
//       scale(${textScale})
//       rotateY(${rotationText}deg)
//     `;

//       textWrapperRef.current.style.opacity = `${textOpacity}`;
//       textWrapperRef.current.style.filter = `blur(${textBlur}px)`;
//       photoWrapperRef.current.style.opacity = `${1 - easedProgress * 0.15}`;
//     }

//     animationFrameId.current = requestAnimationFrame(animate);
//   };


//   const handleScroll = () => {
//     if (!sectionRef.current) return;

//     const { top, height } = sectionRef.current.getBoundingClientRect();

//     // Start moving when section enters from bottom
//     const startTrigger = window.innerHeight * 0.9; // trigger ~10% before fully in view
//     const endTrigger = -height * 0.2; // continue till section nearly out of view

//     const progress = Math.max(0, Math.min(1, (startTrigger - top) / (startTrigger - endTrigger)));
//     targetProgress.current = progress;
//   };


//   useEffect(() => {
//     // Set initial scroll position in case of page reload
//     handleScroll();

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     animationFrameId.current = requestAnimationFrame(animate);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, []); // Empty dependency array ensures this runs only once on mount

//   return (
//     // Section is 200vh tall to create scroll space for the animation
//     <section ref={sectionRef} id='about' className="relative h-[200vh] w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
//       {/* Sticky container pins the animation to the viewport for 100vh of scrolling */}
//       <div
//         className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden p-8 md:p-4"
//         style={{
//           perspective: "1600px",
//           transformStyle: "preserve-3d",
//           perspectiveOrigin: "center center",
//           backfaceVisibility: "hidden",
//         }}
//       >

//         {/* Elegant Background elements */}
//         <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
//         <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.04),transparent_50%)]"></div>

//         {/* Premium Noise Texture */}
//         <div 
//           className="absolute inset-0 z-0 opacity-[0.015] mix-blend-overlay"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//           }}
//         ></div>

//         {/* Animation Container - takes up full viewport */}
//         <div className="relative z-10 w-full max-w-5xl h-full">

//           {/* Photo Wrapper with Luxury Styling */}
//           <div
//             ref={photoWrapperRef}
//             className="absolute top-1/2 left-1/2 z-10"
//             style={{ transform: 'translate(-50%, -50%)' }}
//           >
//             <div className="relative w-64 h-80 md:w-96 md:h-[28rem] p-3 rounded-2xl">
//               {/* Premium Glass Card Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-slate-800/40 backdrop-blur-xl rounded-2xl border border-amber-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(251,191,36,0.08),inset_0_1px_0_rgba(255,255,255,0.05)]"></div>

//               {/* Image Container */}
//               <div className="relative w-full h-full overflow-hidden rounded-xl">
//                 <img
//                   src="./About1.png"
//                   alt="Asif U. Ahmed"
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Subtle gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
//               </div>

//               {/* Elegant border accent */}
//               <div className="absolute -inset-0.5 rounded-2xl border border-amber-400/10 pointer-events-none"></div>
//             </div>
//           </div>

//           {/* Description Wrapper with Luxury Typography */}
//           <div
//             ref={textWrapperRef}
//             className="absolute top-1/2 left-1/2 w-[90%] md:w-1/2 z-0"
//             style={{
//               transform: 'translate(-50%, -50%) scale(0.95)',
//               opacity: 0
//             }}
//           >
//             <div className="flex flex-col gap-6 text-center md:text-left p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-slate-900/30 backdrop-blur-sm border border-amber-400/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.03)]">

//               {/* Elegant Heading */}
//               <h2
//                 className="text-3xl md:text-4xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-slate-200"
//                 style={{ 
//                   fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
//                   textShadow: '0 2px 20px rgba(251, 191, 36, 0.15)',
//                   letterSpacing: '0.05em'
//                 }}
//               >
//                 About Me
//               </h2>

//               {/* Decorative Line */}
//               <div className="w-16 h-px bg-gradient-to-r from-amber-400/50 to-transparent"></div>

//               {/* Body Text */}
//               <p
//                 className="text-base md:text-lg font-light text-slate-300 leading-relaxed"
//                 style={{ 
//                   fontFamily: "'Inter', 'SF Pro Display', sans-serif",
//                   textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
//                 }}
//               >
//                 I'm a computer science student working at the intersection of AI, backend development, and modern web engineering. With a background in full-stack development, AI applications and a deep dive into agentic systems and system design, I specialize in crafting complex applications from the ground up.
//               </p>

//               <p
//                 className="text-base md:text-lg font-light text-slate-300 leading-relaxed"
//                 style={{ 
//                   fontFamily: "'Inter', 'SF Pro Display', sans-serif",
//                   textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
//                 }}
//               >
//                 I thrive on challenges that require both analytical rigor and a creative spark, focusing on problem-solving from first principles and shipping clean, reliable systems. My interests keep expanding into AI applications, retrieval systems, and intelligent tools that make learning and decision-making easier.
//               </p>

//               {/* Download Resume Button */}
//               <div className="mt-4">
//                 <a
//                   href="/resume.pdf"
//                   download="Asif_Ahmed_Resume.pdf"
//                   className="inline-flex items-center gap-3 px-6 py-3 rounded-full
//                     bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90
//                     border border-amber-400/30 text-amber-50 backdrop-blur-xl
//                     shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]
//                     font-light tracking-wide text-sm md:text-base
//                     transition-all duration-300
//                     hover:border-amber-400/50 hover:shadow-[0_8px_40px_rgba(251,191,36,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]
//                     hover:scale-105 hover:-translate-y-0.5
//                     active:scale-100"
//                   style={{
//                     fontFamily: "'Inter', 'SF Pro Display', sans-serif",
//                     letterSpacing: "0.02em",
//                   }}
//                 >
//                   {/* Download Icon */}
//                   <svg 
//                     className="w-5 h-5" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round" 
//                       strokeWidth={1.5} 
//                       d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
//                     />
//                   </svg>
//                   Download Resume
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React, { useEffect, useRef } from 'react';

// Controls the smoothness/inertia. A smaller value means more "glide".
const LERP_FACTOR = 0.08;

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const animationFrameId = useRef<number | null>(null);

  // Target progress (0 to 1), updated directly on scroll
  const targetProgress = useRef(0);

  // Refs for the elements to apply styles directly for performance
  const photoWrapperRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  // Refs to store the current, interpolated animation values
  const currentProgress = useRef(0);


  const animate = () => {
    // Smooth interpolation on progress itself
    currentProgress.current += (targetProgress.current - currentProgress.current) * LERP_FACTOR;
    const progress = currentProgress.current;

    // Non-linear ease — smoother approach to the viewer
    const easedProgress = Math.pow(progress, 1.6);

    // Check if we're on a mobile device
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Mobile: Two-phase animation
      // Phase 1 (0 - 0.5): Photo is visible in center
      // Phase 2 (0.5 - 1): Photo moves up and fades, text appears in center

      const phase1Progress = Math.min(progress * 2, 1); // 0 to 1 in first half
      const phase2Progress = Math.max((progress - 0.5) * 2, 0); // 0 to 1 in second half

      // Photo animation
      // Stays centered during phase 1, moves up during phase 2
      const photoY = phase2Progress * -80; // Moves up 80vh during phase 2
      const photoOpacity = 1 - phase2Progress; // Fades out during phase 2
      const photoScale = 1 - phase2Progress * 0.3; // Slightly shrinks as it goes up

      // Text animation
      // Hidden during phase 1, appears during phase 2
      const textY = -20; // Stays centered
      const textOpacity = phase2Progress; // Fades in during phase 2
      const textScale = 0.85 + phase2Progress * 0.15; // Scales up to full size
      const textBlur = 10 * (1 - phase2Progress); // Clears blur during phase 2

      if (photoWrapperRef.current && textWrapperRef.current) {
        photoWrapperRef.current.style.transform = `
        translate3d(-50%, calc(-50% + ${photoY}vh), 0)
        scale(${photoScale})
      `;
        photoWrapperRef.current.style.opacity = `${photoOpacity}`;

        textWrapperRef.current.style.transform = `
        translate3d(-50%, calc(-50% + ${textY}vh), 0)
        scale(${textScale})
      `;
        textWrapperRef.current.style.opacity = `${textOpacity}`;
        textWrapperRef.current.style.filter = `blur(${textBlur}px)`;
      }
    } else {
      // Desktop version - keep your existing desktop logic here
      const photoX = -18 * easedProgress;
      const photoY = 0;
      const photoZ = 300 - easedProgress * 300;
      const rotationPhoto = easedProgress * -6;

      const textX = 19 * easedProgress;
      const textY = 0;
      const maxDepthText = 1000;
      const textZ = -maxDepthText + easedProgress * maxDepthText;
      const textScale = 0.6 + 0.4 * easedProgress;
      const rotationText = easedProgress * 6;
      const textOpacity = Math.min(easedProgress * 1.8, 1);
      const textBlur = 20 * (1 - easedProgress);

      if (photoWrapperRef.current && textWrapperRef.current) {
        photoWrapperRef.current.style.transform = `
        translate3d(calc(-50% + ${photoX}vw), calc(-50% + ${photoY}vh), ${photoZ}px)
        rotateY(${rotationPhoto}deg)
      `;
        photoWrapperRef.current.style.opacity = `${1 - easedProgress * 0.15}`;

        textWrapperRef.current.style.transform = `
        translate3d(calc(-50% + ${textX}vw), calc(-50% + ${textY}vh), ${textZ}px)
        scale(${textScale})
        rotateY(${rotationText}deg)
      `;
        textWrapperRef.current.style.opacity = `${textOpacity}`;
        textWrapperRef.current.style.filter = `blur(${textBlur}px)`;
      }
    }

    animationFrameId.current = requestAnimationFrame(animate);
  };


  const handleScroll = () => {
    if (!sectionRef.current) return;

    const { top, height } = sectionRef.current.getBoundingClientRect();

    // Start moving when section enters from bottom
    const startTrigger = window.innerHeight * 0.9;
    const endTrigger = -height * 0.2;

    const progress = Math.max(0, Math.min(1, (startTrigger - top) / (startTrigger - endTrigger)));
    targetProgress.current = progress;
  };


  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id='about' className="relative h-[200vh] w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden p-4 md:p-8"
        style={{
          perspective: "1600px",
          transformStyle: "preserve-3d",
          perspectiveOrigin: "center center",
          backfaceVisibility: "hidden",
        }}
      >

        {/* Background elements */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.04),transparent_50%)]"></div>

        {/* Premium Noise Texture */}
        <div
          className="absolute inset-0 z-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Animation Container */}
        <div className="relative z-10 w-full max-w-6xl h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">

          {/* Photo Wrapper */}
          <div
            ref={photoWrapperRef}
            className="absolute top-[30%] md:top-1/2 left-1/2 z-10"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] p-3 rounded-2xl">
              {/* Glass Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-slate-800/40 backdrop-blur-xl rounded-2xl border border-amber-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(251,191,36,0.08),inset_0_1px_0_rgba(255,255,255,0.05)]"></div>

              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <img
                  src="./About1.png"
                  alt="Asif U. Ahmed"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>

              {/* Border accent */}
              <div className="absolute -inset-0.5 rounded-2xl border border-amber-400/10 pointer-events-none"></div>
            </div>
          </div>

          {/* Text Wrapper - Mobile stacks below, Desktop side-by-side */}
          <div
            ref={textWrapperRef}
            className="absolute top-[68%] md:top-1/2 left-1/2 w-[90%] sm:w-[85%] md:w-[55%] lg:w-1/2 z-0"
            style={{
              transform: 'translate(-50%, -50%) scale(0.95)',
              opacity: 0
            }}
          >
            <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left p-5 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-md border border-amber-400/15 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.03)]">

              {/* Heading */}
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-slate-200"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  textShadow: '0 2px 20px rgba(251, 191, 36, 0.15)',
                  letterSpacing: '0.05em'
                }}
              >
                About Me
              </h2>

              {/* Decorative Line */}
              <div className="w-16 h-px bg-gradient-to-r from-amber-400/50 to-transparent mx-auto md:mx-0"></div>

              {/* Body Text */}
              <p
                className="text-sm sm:text-base md:text-lg font-light text-slate-300 leading-relaxed"
                style={{
                  fontFamily: "'Inter', 'SF Pro Display', sans-serif",
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                I'm a computer science student working at the intersection of AI, backend development, and modern web engineering. With a background in full-stack development, AI applications and a deep dive into agentic systems and system design, I specialize in crafting complex applications from the ground up.
              </p>

              <p
                className="text-sm sm:text-base md:text-lg font-light text-slate-300 leading-relaxed"
                style={{
                  fontFamily: "'Inter', 'SF Pro Display', sans-serif",
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                I thrive on challenges that require both analytical rigor and a creative spark, focusing on problem-solving from first principles and shipping clean, reliable systems. My interests keep expanding into AI applications, retrieval systems, and intelligent tools that make learning and decision-making easier.
              </p>

              {/* Download Resume Button */}
              <div className="mt-2 md:mt-4">
                <a
                  href="/resume.pdf"
                  download="Asif_Ahmed_Resume.pdf"
                  className="inline-flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full
                    bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90
                    border border-amber-400/30 text-amber-50 backdrop-blur-xl
                    shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]
                    font-light tracking-wide text-xs sm:text-sm md:text-base
                    transition-all duration-300
                    hover:border-amber-400/50 hover:shadow-[0_8px_40px_rgba(251,191,36,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]
                    hover:scale-105 hover:-translate-y-0.5
                    active:scale-100"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Display', sans-serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  {/* Download Icon */}
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;