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
    video: "/prove.mp4"
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
    video: "/lifelens.mp4"
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
      id="horizontal-section"
      className="relative py-20 overflow-hidden"
    >



      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 text-center mb-4 opacity-0">
          Featured Projects
        </h2>
        <div ref={titleLineRef} className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"></div>
      </div>

      <div ref={triggerRef} className="overflow-hidden" style={{ opacity: 0 }}>
        <div ref={horizontalRef} className="flex">
          {projectImages.map((project) => {
            return (
              <div key={project.id} className="panel flex-shrink-0 w-screen h-screen relative flex items-center justify-center px-8">
                <div className="project-card max-w-5xl w-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl hover:border-cyan-400/60 transition-all duration-500 hover:shadow-cyan-500/20">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Left side - Image */}
                    <div className="project-image md:w-1/2 relative overflow-hidden pointer-events-none">
                      <div className="absolute inset-0  z-10"></div>

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
                        <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                          {project.title}
                        </h3>
                        <SlShareAlt className="text-cyan-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer text-xl" />
                      </div>

                      <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-4">
                          {project.techStack.map((tech, index) => (
                            <div
                              key={index}
                              className="tech-icon group relative flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                            >
                              <tech.icon className="text-2xl text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
                              <span className="text-sm text-slate-300 font-medium">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* View Project Button */}
                      <button className="mt-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-center items-center align-middle">


        <Link href="/all-project">
          <MagicButton
            title="All Project work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </section>
  );
}

export default Projects;