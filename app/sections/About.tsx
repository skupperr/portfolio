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

//     // Photo slight depth and horizontal drift
//     const photoX = -17 * easedProgress;
//     const photoZ = 300 - easedProgress * 300;
//     const rotationPhoto = easedProgress * -6;

//     // Text: comes forward and moves left from the very beginning
//     const textX = 18 * easedProgress;
    
//     // Text depth and scale (starts far behind, rushes forward)
//     const maxDepthText = 1000;
//     const textZ = -maxDepthText + easedProgress * maxDepthText;
//     const textScale = 0.6 + 0.4 * easedProgress;
//     const rotationText = easedProgress * 6;

//     // Opacity smooth fade-in
//     const textOpacity = Math.min(easedProgress * 1.8, 1);

//     // Blur effect - starts very blurry, clears up as it comes forward

//     const textBlur = 10 * (1 - easedProgress); // 20px blur at start, 0 at end

//     // Apply transforms
//     if (photoWrapperRef.current && textWrapperRef.current) {
//       photoWrapperRef.current.style.transform = `
//       translate3d(calc(-50% + ${photoX}vw), -50%, ${photoZ}px)
//       rotateY(${rotationPhoto}deg)
//     `;

//       textWrapperRef.current.style.transform = `
//       translate3d(calc(-50% + ${textX}vw), -50%, ${textZ}px)
//       scale(${textScale})
//       rotateY(${rotationText}deg)
//     `;

//       textWrapperRef.current.style.opacity = `${textOpacity}`;
//       textWrapperRef.current.style.filter = `blur(${textBlur}px)`;
//       photoWrapperRef.current.style.opacity = `${1 - easedProgress * 0.2}`;
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
//     <section ref={sectionRef} className="relative h-[200vh] w-full">
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



//         {/* Background elements */}
//         <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
//         <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(217,70,239,0.15),transparent_40%)]"></div>

//         {/* Animation Container - takes up full viewport */}
//         <div className="relative gap- z-10 w-full max-w-5xl h-full">

//           {/* Photo Wrapper */}
//           <div
//             ref={photoWrapperRef}
//             className="absolute top-1/2 left-1/2 z-10"
//             // Initial style is set here, then controlled by JS
//             style={{ transform: 'translate(-50%, -50%)' }}
//           >
//             <div className="relative w-64 h-80 md:w-96 md:h-96 p-2 rounded-lg animate-pulse-glow-fuchsia">
//               <img
//                 src="About1.png"
//                 alt="Asif U. Ahmed"
//                 className="w-full h-full object-cover rounded-md"
//               />
//               <div className="absolute inset-0 rounded-lg border-2 border-fuchsia-400 z-0"></div>
//             </div>
//           </div>

//           {/* Description Wrapper */}
//           <div
//             ref={textWrapperRef}
//             className="absolute top-1/2 left-1/2 w-[90%] md:w-1/2 z-0"
//             // Initial style is set here, then controlled by JS
//             style={{
//               transform: 'translate(-50%, -50%) scale(0.95)',
//               opacity: 0
//             }}
//           >
//             <div className="flex flex-col gap-6 text-center md:text-left">
//               <h2
//                 className="text-4xl md:text-5xl font-bold text-cyan-300"
//                 style={{ textShadow: '0 0 12px rgba(0, 255, 255, 0.5)' }}
//               >
//                 ABOUT ME
//               </h2>
//               <p
//                 className="text-base md:text-lg font-light text-slate-200"
//                 style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}
//               >
//                 I am a software architect and creative technologist passionate about the intersection of artificial intelligence and human-computer interaction. My journey in tech is driven by a desire to build not just software, but intelligent experiences that are intuitive, adaptive, and impactful.
//               </p>
//               <p
//                 className="text-base md:text-lg font-light text-slate-200"
//                 style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}
//               >
//                 With a background in full-stack development and a deep dive into agentic systems and system design, I specialize in crafting complex applications from the ground up. I thrive on challenges that require both analytical rigor and a creative spark.
//               </p>
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

    // Photo movement - horizontal on desktop, vertical on mobile
    const photoX = isMobile ? 0 : -18 * easedProgress;
    const photoY = isMobile ? -27 * easedProgress : 0;
    const photoZ = 300 - easedProgress * 300;
    const rotationPhoto = easedProgress * -6;

    // Text movement - horizontal on desktop, vertical on mobile
    const textX = isMobile ? 0 : 19 * easedProgress;
    const textY = isMobile ? 20 * easedProgress : 0;
    
    // Text depth and scale (starts far behind, rushes forward)
    const maxDepthText = 1000;
    const textZ = -maxDepthText + easedProgress * maxDepthText;
    const textScale = 0.6 + 0.4 * easedProgress;
    const rotationText = easedProgress * 6;

    // Opacity smooth fade-in
    const textOpacity = Math.min(easedProgress * 1.8, 1);

    // Blur effect - starts very blurry, clears up as it comes forward
    const textBlur = 20 * (1 - easedProgress); // 20px blur at start, 0 at end

    // Apply transforms
    if (photoWrapperRef.current && textWrapperRef.current) {
      photoWrapperRef.current.style.transform = `
      translate3d(calc(-50% + ${photoX}vw), calc(-50% + ${photoY}vh), ${photoZ}px)
      rotateY(${rotationPhoto}deg)
    `;

      textWrapperRef.current.style.transform = `
      translate3d(calc(-50% + ${textX}vw), calc(-50% + ${textY}vh), ${textZ}px)
      scale(${textScale})
      rotateY(${rotationText}deg)
    `;

      textWrapperRef.current.style.opacity = `${textOpacity}`;
      textWrapperRef.current.style.filter = `blur(${textBlur}px)`;
      photoWrapperRef.current.style.opacity = `${1 - easedProgress * 0.2}`;
    }

    animationFrameId.current = requestAnimationFrame(animate);
  };


  const handleScroll = () => {
    if (!sectionRef.current) return;

    const { top, height } = sectionRef.current.getBoundingClientRect();

    // Start moving when section enters from bottom
    const startTrigger = window.innerHeight * 0.9; // trigger ~10% before fully in view
    const endTrigger = -height * 0.2; // continue till section nearly out of view

    const progress = Math.max(0, Math.min(1, (startTrigger - top) / (startTrigger - endTrigger)));
    targetProgress.current = progress;
  };


  useEffect(() => {
    // Set initial scroll position in case of page reload
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Section is 200vh tall to create scroll space for the animation
    <section ref={sectionRef} className="relative h-[200vh] w-full">
      {/* Sticky container pins the animation to the viewport for 100vh of scrolling */}
      <div
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden p-8 md:p-4"
        style={{
          perspective: "1600px",
          transformStyle: "preserve-3d",
          perspectiveOrigin: "center center",
          backfaceVisibility: "hidden",
        }}
      >



        {/* Background elements */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(217,70,239,0.15),transparent_40%)]"></div>

        {/* Animation Container - takes up full viewport */}
        <div className="relative gap- z-10 w-full max-w-5xl h-full">

          {/* Photo Wrapper */}
          <div
            ref={photoWrapperRef}
            className="absolute top-1/2 left-1/2 z-10"
            // Initial style is set here, then controlled by JS
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative w-64 h-80 md:w-96 md:h-96 p-2 rounded-lg animate-pulse-glow-fuchsia">
              <img
                src="About1.png"
                alt="Asif U. Ahmed"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 rounded-lg border-2 border-fuchsia-400 z-0"></div>
            </div>
          </div>

          {/* Description Wrapper */}
          <div
            ref={textWrapperRef}
            className="absolute top-1/2 left-1/2 w-[90%] md:w-1/2 z-0"
            // Initial style is set here, then controlled by JS
            style={{
              transform: 'translate(-50%, -50%) scale(0.95)',
              opacity: 0
            }}
          >
            <div className="flex flex-col gap-6 text-center md:text-left">
              <h2
                className="text-4xl md:text-5xl font-bold text-cyan-300"
                style={{ textShadow: '0 0 12px rgba(0, 255, 255, 0.5)' }}
              >
                ABOUT ME
              </h2>
              <p
                className="text-base md:text-lg font-light text-slate-200"
                style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}
              >
               I’m a computer science student working at the intersection of AI, backend development, and modern web engineering. With a background in full-stack development, AI applications and a deep dive into agentic systems and system design, I specialize in crafting complex applications from the ground up. I thrive on challenges that require both analytical rigor and a creative spark. 
              </p>
              <p
                className="text-base md:text-lg font-light text-slate-200"
                style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}
              >
                Across every project, I focus on problem-solving from first principles and shipping clean, reliable systems. My interests keep expanding into AI applications, retrieval systems, and intelligent tools that make learning and decision-making easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;