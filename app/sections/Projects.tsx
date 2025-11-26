"use client";

import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useRef, useState } from "react";
import { SlShareAlt } from "react-icons/sl";
import { FaReact, FaNode, FaPython, FaDocker } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs, SiFirebase, SiFastapi, SiLangchain, SiMysql } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from '@react-three/drei';
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/MagicButton";
import CanvasLoader from '@/components/loading';
import DemoComputer from "@/components/demoComputer";

const projectImages = [
  {
    id: 1,
    title: "Prove-My-Point",
    description: "Prove My Point is a full-stack AI-powered research assistant designed to help users back their arguments with reliable, science-backed information from real research papers.",
    imageSrc: "/project1.jpg",
    techStack: [
      { icon: FaReact, name: "React" },
      { icon: SiFastapi, name: "FastAPI" },
      { icon: RiJavascriptFill, name: "JavaScript" },
      { icon: FaPython, name: "Python" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiLangchain, name: "LangChain" }
    ],
    video: "/prove.mp4",
    tag: "prove-my-point",
  },
  {
    id: 2,
    title: "LifeLens",
    description: "A complete AI-powered personal decision assistant that integrates meal planning, productivity management, career learning guidance, and financial support — all in one intelligent web platform.",
    imageSrc: "/project2.jpg",
    techStack: [
      { icon: SiFastapi, name: "FastAPI" },
      { icon: FaReact, name: "React" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiLangchain, name: "LangChain" },
      { icon: DiRedis, name: "Redis" },
    ],
    video: "/lifelens.mp4",
    tag: "lifelens",
  }
]

function Projects() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const titleLineRef = useRef(null)
  const triggerRef = useRef(null)
  const horizontalRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Title animations
    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    )

    gsap.fromTo(
      titleLineRef.current,
      {
        width: "0%",
        opacity: "0"
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Make trigger visible immediately
    gsap.to(triggerRef.current, {
      y: 0,
      rotationX: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      delay: 0.4,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    })

    gsap.fromTo(
      sectionRef.current,
      {
        backgroundPosition: "50% 0%"
      },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    )

    // Horizontal scroll animation with reduced distance
    const panels = gsap.utils.toArray(".panel");

    const horizontalScroll = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => "+=" + (window.innerHeight * 2),
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      }
    })

    // Panel animations - skip first panel so it starts visible
    panels.forEach((panel, i) => {
      const card = panel.querySelector(".project-card")
      const image = panel.querySelector(".project-image")
      const content = panel.querySelector(".project-content")
      const techIcons = panel.querySelectorAll(".tech-icon")

      if (i === 0) {
        // First project is visible from start
        gsap.set(card, { scale: 1, opacity: 1 })
        gsap.set(image, { x: 0, opacity: 1 })
        gsap.set(content, { x: 0, opacity: 1 })
        gsap.set(techIcons, { scale: 1, opacity: 1 })
        return;
      }

      // Animate other projects as they come into view
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left center",
          end: "center center",
          scrub: true,
        }
      })

      tl.fromTo(
        card,
        {
          scale: 0.85,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
        }
      )
        .fromTo(
          image,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3 },
          0.1
        )
        .fromTo(
          content,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3 },
          0.1
        )
        .fromTo(
          techIcons,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.2, stagger: 0.05 },
          0.3
        )
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])


  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Elegant Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-[200px]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.03),transparent_50%)]"></div>

      {/* Premium Noise Texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-slate-200 text-center mb-6 opacity-0"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            textShadow: '0 2px 30px rgba(251, 191, 36, 0.2)',
            letterSpacing: '0.08em'
          }}
        >
          Featured Projects
        </h2>

        {/* Decorative Element */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/50"></div>
          <div ref={titleLineRef} className="w-0 h-px bg-gradient-to-r from-amber-400/80 via-amber-300/60 to-amber-400/80 opacity-0"></div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/50"></div>
        </div>
      </div>

      <div ref={triggerRef} className="overflow-hidden" style={{ opacity: 0 }}>
        <div ref={horizontalRef} className="flex">
          {projectImages.map((project) => {
            return (
              <div key={project.id} className="panel flex-shrink-0 w-screen h-screen relative flex items-center justify-center px-8">
                <div className="project-card max-w-5xl w-full bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-amber-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(251,191,36,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-amber-400/40 hover:shadow-[0_12px_48px_rgba(251,191,36,0.15)] transition-all duration-500">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Left side - Image */}
                    <div className="project-image md:w-1/2 relative overflow-hidden pointer-events-none bg-slate-950/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent z-10"></div>

                      <div
                        className={`pointer-events-auto relative w-full h-full ${isDragging ? "cursor-grabbing" : "cursor-grab"
                          }`}
                      >
                        <Canvas>
                          <ambientLight intensity={Math.PI} />
                          <directionalLight position={[10, 10, 5]} />
                          <Center>
                            <Suspense fallback={<CanvasLoader />}>
                              <group scale={2} position={[0, -3, 0]}>
                                <DemoComputer texture={project.video} />
                              </group>
                            </Suspense>
                          </Center>

                          <OrbitControls
                            maxPolarAngle={Math.PI / 2}
                            enableZoom={false}
                            enablePan={true}
                            enableRotate={true}
                            onStart={() => setIsDragging(true)}
                            onEnd={() => setIsDragging(false)}
                          />
                        </Canvas>
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="project-content md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <h3
                          className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-100 hover:from-amber-100 hover:to-slate-200 transition-all duration-300 cursor-pointer"
                          style={{
                            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                            letterSpacing: '0.03em'
                          }}
                        >
                          {project.title}
                        </h3>
                        <SlShareAlt className="text-amber-400 hover:text-amber-300 transition-colors duration-300 cursor-pointer text-xl hover:scale-110" />
                      </div>

                      <p
                        className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 font-light"
                        style={{
                          fontFamily: "'Inter', 'SF Pro Display', sans-serif",
                          textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="space-y-4">
                        <h4
                          className="text-sm font-light text-slate-400 uppercase tracking-wider"
                          style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                        >
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.techStack.map((tech, index) => (
                            <div
                              key={index}
                              className="tech-icon group relative flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-slate-800/60 to-slate-900/40 rounded-lg border border-amber-400/20 hover:border-amber-400/40 hover:bg-slate-800/80 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_16px_rgba(251,191,36,0.15)] transition-all duration-300 cursor-pointer"
                            >
                              <tech.icon className="text-2xl text-amber-400 group-hover:text-amber-300 transition-colors duration-300 group-hover:scale-110" />
                              <span
                                className="text-sm text-slate-300 font-light"
                                style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                              >
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* View Project Button */}
                      <Link
                        href={`/projects/${project.tag}`}
                        className="
                          mt-8 inline-block px-6 py-3 
                          bg-gradient-to-br from-amber-400/10 to-amber-500/5
                          border border-amber-400/30 
                          text-amber-100 font-light tracking-wide rounded-lg
                          hover:bg-amber-400/20 hover:border-amber-400/50
                          hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]
                          transition-all duration-300 hover:-translate-y-1
                          font-inter text-center
                        "
                      >
                        View Project
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20 flex justify-center items-center mt-16">
        <Link
          href="/projects"
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-amber-400/10 to-amber-500/5 border border-amber-400/30 text-amber-100 font-light tracking-wide rounded-full hover:bg-amber-400/20 hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300 group cursor-pointer"
          style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
        >
          <span>View All Projects</span>
          <FaLocationArrow className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}

export default Projects;