import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./card";
import { Calendar } from "lucide-react";

export interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
  logo?: string;
}

export interface ScrollTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  animationOrder?: "sequential" | "staggered" | "simultaneous";
  cardAlignment?: "alternating" | "left" | "right";
  lineColor?: string;
  activeColor?: string;
  progressIndicator?: boolean;
  cardVariant?: "default" | "elevated" | "outlined" | "filled";
  cardEffect?: "none" | "glow" | "shadow" | "bounce";
  parallaxIntensity?: number;
  progressLineWidth?: number;
  progressLineCap?: "round" | "square";
  dateFormat?: "text" | "badge";
  className?: string;
  revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
  connectorStyle?: "dots" | "line" | "dashed";
  perspective?: boolean;
  darkMode?: boolean;
  smoothScroll?: boolean;
}

const DEFAULT_EVENTS: TimelineEvent[] = [
  {
    year: "2023",
    title: "Major Achievement",
    subtitle: "Organization Name",
    description:
      "Description of the achievement or milestone reached during this time period.",
  },
];

export const ScrollTimeline = ({
  events = DEFAULT_EVENTS,
  title = "Timeline",
  subtitle = "Scroll to explore the journey",
  animationOrder = "sequential",
  cardAlignment = "alternating",
  activeColor = "bg-primary",
  progressIndicator = true,
  cardVariant = "default",
  cardEffect = "none",
  parallaxIntensity = 0.2,
  progressLineWidth = 3,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "fade",
  className = "",
  connectorStyle = "line",
  perspective = false,
  darkMode = false,
}: ScrollTimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const baseYOffset = useTransform(smoothProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const newIndex = Math.floor(v * events.length);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < events.length
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length, activeIndex]);

  const getCardVariants = (index: number) => {
    const baseDelay =
      animationOrder === "simultaneous"
        ? 0
        : animationOrder === "staggered"
          ? index * 0.2
          : index * 0.3;

    const initialStates = {
      fade: { opacity: 0, y: 20 },
      slide: {
        x:
          cardAlignment === "left"
            ? -100
            : cardAlignment === "right"
              ? 100
              : index % 2 === 0
                ? -100
                : 100,
        opacity: 0,
      },
      scale: { scale: 0.8, opacity: 0 },
      flip: { rotateY: 90, opacity: 0 },
      none: { opacity: 1 },
    };

    return {
      initial: initialStates[revealAnimation],
      whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.8,
          delay: baseDelay,
          ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
        },
      },
      viewport: { once: false, margin: "-100px" },
    };
  };

  const getConnectorClasses = () => {
    const baseClasses = cn(
      "absolute left-1/2 transform -translate-x-1/2 bg-amber-900/30 w-[2px]",
    );
    return cn(baseClasses);
  };

  const getCardClasses = (index: number) => {
    const baseClasses = "relative z-30 rounded-2xl transition-all duration-500";
    const alignmentClassesDesktop =
      cardAlignment === "alternating"
        ? index % 2 === 0
          ? "lg:mr-[calc(50%+40px)]"
          : "lg:ml-[calc(50%+40px)]"
        : cardAlignment === "left"
          ? "lg:mr-auto lg:ml-0"
          : "lg:ml-auto lg:mr-0";

    return cn(
      baseClasses,
      alignmentClassesDesktop,
      "w-full lg:w-[calc(50%-50px)]",
      "hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(251,191,36,0.15)]"
    );
  };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "relative min-h-screen w-full overflow-hidden",
        className
      )}
    >
      <div className="relative max-w-6xl mx-auto px-4 pb-24 pt-12">
        <div className="relative mx-auto">
          {/* Background connector line */}
          <div className={cn(getConnectorClasses(), "h-full absolute top-0 z-10")}></div>

          {/* Enhanced Progress Indicator with Luxury Glow */}
          {progressIndicator && (
            <>
              {/* Main progress line with gradient */}
              <motion.div
                className="absolute top-0 z-10"
                style={{
                  height: progressHeight,
                  width: progressLineWidth,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                  background: `linear-gradient(to bottom, #fbbf24, #f59e0b, #d97706)`,
                  boxShadow: `0 0 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2)`,
                }}
              />
              
              {/* Traveling glow comet */}
              <motion.div
                className="absolute z-20"
                style={{
                  top: progressHeight,
                  left: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(251,191,36,0.9) 0%, rgba(245,158,11,0.6) 40%, rgba(217,119,6,0) 70%)",
                    boxShadow: `
                      0 0 15px 4px rgba(251, 191, 36, 0.6),
                      0 0 25px 8px rgba(245, 158, 11, 0.4),
                      0 0 40px 15px rgba(251, 191, 36, 0.2)
                    `,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </>
          )}

          <div className="relative z-20">
            {events.map((event, index) => {
              return (
                <div
                  key={event.id || index}
                  ref={(el) => {
                    timelineRefs.current[index] = el;
                  }}
                  className={cn(
                    "relative flex items-center mb-24 py-4",
                    "flex-col lg:flex-row",
                    cardAlignment === "alternating"
                      ? index % 2 === 0
                        ? "lg:justify-start"
                        : "lg:flex-row-reverse lg:justify-start"
                      : cardAlignment === "left"
                        ? "lg:justify-start"
                        : "lg:flex-row-reverse lg:justify-start"
                  )}
                >
                  {/* Timeline dot/logo */}
                  <div
                    className={cn(
                      "absolute top-1/2 transform -translate-y-1/2 z-30",
                      "left-1/2 -translate-x-1/2"
                    )}
                  >
                    {event.logo ? (
                      <motion.div
                        className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.3)] bg-slate-900"
                        animate={
                          index === activeIndex
                            ? { scale: [1, 1.15, 1], rotate: [0, 5, 0] }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                      >
                        <img
                          src={event.logo}
                          alt={`${event.subtitle || event.title} logo`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        className={cn(
                          "w-7 h-7 rounded-full border-4 bg-slate-900 flex items-center justify-center",
                          index <= activeIndex ? "border-amber-400" : "border-amber-900/30"
                        )}
                        animate={
                          index <= activeIndex
                            ? {
                              scale: [1, 1.3, 1],
                              boxShadow: [
                                "0 0 0px rgba(251,191,36,0)",
                                "0 0 20px rgba(251,191,36,0.6)",
                                "0 0 0px rgba(251,191,36,0)",
                              ],
                            }
                            : {}
                        }
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatDelay: 4,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </div>

                  {/* Timeline card */}
                  <motion.div
                    className={cn(getCardClasses(index))}
                    variants={getCardVariants(index)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false, margin: "-100px" }}
                    style={
                      parallaxIntensity > 0
                        ? { y: baseYOffset.get() * (1 + index * parallaxIntensity * 0.05) }
                        : undefined
                    }
                  >
                    <Card className="border-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 rounded-2xl backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] border border-amber-400/20 overflow-hidden">
                      <CardContent className="p-6 md:p-8">
                        {dateFormat === "badge" ? (
                          <div className="flex items-center gap-2 mb-3">
                            {event.icon || (
                              <Calendar className="h-4 w-4 text-amber-400" />
                            )}
                            <span
                              className="text-sm font-light tracking-wider text-amber-400"
                              style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                            >
                              {event.year}
                            </span>
                          </div>
                        ) : (
                          <p className="text-lg font-light text-amber-400 mb-3">
                            {event.year}
                          </p>
                        )}
                        
                        <h3 
                          className="text-xl md:text-2xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-100 mb-2"
                          style={{ 
                            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                            letterSpacing: '0.02em'
                          }}
                        >
                          {event.title}
                        </h3>
                        
                        {event.subtitle && (
                          <p 
                            className="font-light mb-4 text-slate-300 tracking-wide"
                            style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                          >
                            {event.subtitle}
                          </p>
                        )}
                        
                        <ul 
                          className="list-disc list-outside pl-5 text-slate-400 text-sm leading-relaxed space-y-2 font-light"
                          style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                        >
                          {event.description
                            .split(/[\n;]/)
                            .filter((d) => d.trim() !== "")
                            .map((point, i) => (
                              <li key={i} className="hover:text-slate-300 transition-colors duration-200">
                                {point.trim()}
                              </li>
                            ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};