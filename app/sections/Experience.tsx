// import React, { useState, useRef, useEffect } from 'react';

// // A more generic interface for timeline items
// interface TimelineItemData {
//   id: number;
//   date: string;
//   title: string;
//   subtitle: string; // Replaces 'company'
//   description: string;
// }

// const experienceData: TimelineItemData[] = [
//   {
//     id: 1,
//     date: '2023 - PRESENT',
//     title: 'Lead Agentic Systems Architect',
//     subtitle: 'Cyberdyne Synthetics',
//     description: 'Pioneering the development of next-generation autonomous AI agents. Responsible for the core cognitive architecture and ensuring ethical alignment of emergent behaviors in complex digital ecosystems.',
//   },
//   {
//     id: 2,
//     date: '2021 - 2023',
//     title: 'Senior Neural Interface Engineer',
//     subtitle: 'OmniCorp',
//     description: 'Engineered high-bandwidth data streams between organic and synthetic minds. Optimized neural lace protocols, reducing latency by 40% and enhancing sensory data fidelity for augmented reality overlays.',
//   },
//   {
//     id: 3,
//     date: '2019 - 2021',
//     title: 'Quantum Computing Specialist',
//     subtitle: 'Weyland-Yutani Labs',
//     description: 'Developed and implemented quantum algorithms to solve previously intractable problems in logistics and materials science. Maintained a fleet of quantum processors in a high-security data haven.',
//   },
//   {
//     id: 4,
//     date: '2017 - 2019',
//     title: 'Crypnet Security Analyst',
//     subtitle: 'Tyrell Corporation',
//     description: 'Defended megacorp assets against black-hat hackers and rival AI intrusions. Deployed counter-intrusion systems and performed digital forensics on breached networks in the neon-drenched underbelly of the net.',
//   },
// ];

// const educationData: TimelineItemData[] = [
//     {
//         id: 1,
//         date: '2015 - 2017',
//         title: "Master's in AI Consciousness",
//         subtitle: 'University of Neo-Tokyo',
//         description: 'Focused on the philosophical and technical challenges of creating sentient artificial intelligence. Thesis on emergent consciousness in decentralized neural networks.',
//     },
//     {
//         id: 2,
//         date: '2011 - 2015',
//         title: 'B.S. in Robotic Engineering',
//         subtitle: 'MIT Cybernetics Institute',
//         description: 'Graduated summa cum laude. Specialized in bipedal locomotion and human-robot interaction. Captain of the award-winning BattleBots team.',
//     }
// ];

// const awardsData: TimelineItemData[] = [
//     {
//         id: 1,
//         date: '2024',
//         title: 'Turing Award for Agentic Cognition',
//         subtitle: 'Association for Computing Machinery',
//         description: 'Recognized for groundbreaking work on the cognitive architecture of autonomous agents at Cyberdyne Synthetics.',
//     },
//     {
//         id: 2,
//         date: '2022',
//         title: 'Innovator of the Year',
//         subtitle: 'OmniCorp',
//         description: 'Awarded for the development of low-latency neural lace protocols, revolutionizing the augmented reality industry.',
//     },
//     {
//         id: 3,
//         date: '2018',
//         title: 'Cybersecurity Grandmaster',
//         subtitle: 'DefCon Zero',
//         description: 'Won the global "Capture the Flag" competition by successfully defending a simulated megacorp network against all attack vectors for 72 consecutive hours.',
//     },
// ];


// const ExperienceItem: React.FC<{ data: TimelineItemData; isLeft: boolean }> = ({ data, isLeft }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const itemRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         threshold: 0.3,
//       }
//     );

//     const currentItemRef = itemRef.current;
//     if (currentItemRef) {
//       observer.observe(currentItemRef);
//     }

//     return () => {
//       if (currentItemRef) {
//         observer.unobserve(currentItemRef);
//       }
//     };
//   }, []);

//   const { date, title, subtitle, description } = data;
//   const alignmentClasses = isLeft
//     ? 'md:text-right'
//     : 'md:text-left';

//   const cardPosition = isLeft
//     ? 'md:mr-[calc(50%+2rem)]'
//     : 'md:ml-[calc(50%+2rem)]';

//   const initialTransform = isLeft ? '-translate-x-8' : 'translate-x-8';

//   return (
//     <div
//       ref={itemRef}
//       className={`relative mb-12 w-full md:w-auto transition-all duration-1000 ease-in-out ${
//         isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${initialTransform}`
//       } ${cardPosition}`}
//     >
//         {/* Timeline Dot */}
//         <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 border-2 border-[#00001a] z-20 transition-transform duration-500 ${ isVisible ? 'scale-100' : 'scale-0' } ${isLeft ? 'right-[-8px]' : 'left-[-8px]'}`}>
//              <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping"></div>
//         </div>

//         <div className={`border-2 border-cyan-500/30 bg-[#000421]/50 p-6 rounded-lg backdrop-blur-sm ${alignmentClasses}`}>
//             <p className="text-fuchsia-400 font-semibold text-sm mb-1">{date}</p>
//             <h3 className="text-xl md:text-2xl font-bold text-cyan-300">{title}</h3>
//             <p className="text-slate-300 mb-4">{subtitle}</p>
//             <p className="text-slate-400 text-sm md:text-base font-light">{description}</p>
//         </div>
//     </div>
//   );
// };


// const Experience: React.FC = () => {
//     const lineRef = useRef<HTMLDivElement>(null);
//     const [isLineVisible, setIsLineVisible] = useState(false);
//     const [activeTab, setActiveTab] = useState<'Experience' | 'Education' | 'Award'>('Experience');

//     const dataSources = {
//         Experience: experienceData,
//         Education: educationData,
//         Award: awardsData,
//     };

//     const currentData = dataSources[activeTab];

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsLineVisible(true);
//                     observer.unobserve(entry.target);
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         const currentRef = lineRef.current;
//         if (currentRef) {
//             observer.observe(currentRef);
//         }

//         return () => {
//             if (currentRef) {
//                 observer.unobserve(currentRef);
//             }
//         };
//     }, []);

//     // Re-trigger the timeline bar animation when the tab changes
//     useEffect(() => {
//       const timer = setTimeout(() => setIsLineVisible(true), 10);
//       return () => clearTimeout(timer);
//     }, [activeTab]);

//   return (
//     <section className="relative py-20 md:py-32 px-4">
//       <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
//       <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.08),transparent_40%)]"></div>

//       <div className="container mx-auto max-w-5xl text-center relative z-10">
//         <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-8" style={{ textShadow: '0 0 12px rgba(0, 255, 255, 0.5)' }}>
//           CAREER TRAJECTORY
//         </h2>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-16 space-x-2 md:space-x-4">
//           {(['Experience', 'Education', 'Award'] as const).map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 md:px-6 text-sm md:text-base font-semibold rounded-md border-2 transition-all duration-300 focus:outline-none  ${
//                 activeTab === tab
//                   ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]'
//                   : 'bg-transparent border-slate-700 text-slate-400 hover:bg-slate-800/50 hover:border-slate-500'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <div ref={lineRef} className="relative flex flex-col items-center">
//           {/* Central Timeline */}
//           <div className="absolute hidden md:block top-0 left-1/2 -translate-x-1/2 h-full w-0.5 bg-cyan-900/50 z-0">
//              {/* Animated Progress Line */}
//              <div className="absolute top-0 left-0 w-full bg-cyan-400 transition-all duration-3000 ease-out" style={{ 
//                  height: isLineVisible ? '100%' : '0%',
//                  boxShadow: '0 0 8px rgba(0, 255, 255, 0.8)',
//              }}></div>
//           </div>

//           {currentData.map((item, index) => (
//             <ExperienceItem key={`${activeTab}-${item.id}`} data={item} isLeft={index % 2 === 0} />
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


"use client";
import { useState } from "react";
import { ScrollTimeline } from "@/src/components/lightswind/scroll-timeline";

const experienceData = [
  {
    year: "2023 - PRESENT",
    title: "Lead Agentic Systems Architect",
    subtitle: "Cyberdyne Synthetics",
    description:
      "Pioneering the development of next-generation autonomous AI agents.\n Responsible for the core cognitive architecture and ensuring ethical alignment of emergent behaviors in complex digital ecosystems. ",
    logo: "uiu.jpg",
  },
];

const educationData = [
  {
    year: "2015 - 2017",
    title: "Master's in AI Consciousness",
    subtitle: "University of Neo-Tokyo",
    description:
      "Focused on the philosophical and technical challenges of creating sentient artificial intelligence. Thesis on emergent consciousness in decentralized neural networks.",
  },
  {
    year: "2011 - 2015",
    title: "B.S. in Robotic Engineering",
    subtitle: "MIT Cybernetics Institute",
    description:
      "Graduated summa cum laude. Specialized in bipedal locomotion and human-robot interaction. Captain of the award-winning BattleBots team.",
  },
];

const awardsData = [
  {
    year: "2024",
    title: "Turing Award for Agentic Cognition",
    subtitle: "Association for Computing Machinery",
    description:
      "Recognized for groundbreaking work on the cognitive architecture of autonomous agents at Cyberdyne Synthetics.",
  },
  {
    year: "2022",
    title: "Innovator of the Year",
    subtitle: "OmniCorp",
    description:
      "Awarded for the development of low-latency neural lace protocols, revolutionizing the augmented reality industry.",
  },
  {
    year: "2018",
    title: "Cybersecurity Grandmaster",
    subtitle: "DefCon Zero",
    description:
      'Won the global "Capture the Flag" competition by successfully defending a simulated megacorp network against all attack vectors for 72 consecutive hours.',
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<
    "Experience" | "Education" | "Award"
  >("Experience");

  const dataSources = {
    Experience: experienceData,
    Education: educationData,
    Award: awardsData,
  };

  const currentData = dataSources[activeTab];

  return (
    <section className="relative py-20 md:py-32 px-4">
      {/* Background grid layers */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.08),transparent_40%)]" />

      {/* Foreground content */}
      <div className="container mx-auto relative z-10">
        <h2
          className="text-4xl md:text-5xl font-bold text-cyan-300 mb-8 text-center"
          style={{ textShadow: "0 0 12px rgba(0, 255, 255, 0.5)" }}
        >
          CAREER TRAJECTORY
        </h2>

        {/* Tab Navigation */}
        <div
          className="flex justify-center  space-x-2 md:space-x-4"
          role="tablist"
        >
          {(["Experience", "Education", "Award"] as const).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              tabIndex={activeTab === tab ? 0 : -1}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 md:px-6 text-sm md:text-base font-semibold rounded-md border-2 transition-all duration-300 focus:outline-none  ${activeTab === tab
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                  : "bg-transparent border-slate-700 text-slate-400 hover:bg-slate-800/50 hover:border-slate-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Scroll Timeline */}
        <ScrollTimeline
          events={currentData}
          title={activeTab.toUpperCase()}
          subtitle="Scroll to explore the timeline"
          progressIndicator={true}
          cardAlignment="alternating"
          revealAnimation="scale"
          connectorStyle="dots"
        />
      </div>
    </section>
  );
}
