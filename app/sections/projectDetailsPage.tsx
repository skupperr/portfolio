'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams } from 'next/navigation';
import { projectDetailsData } from './projectDetailsData';


const ProjectDetailsPage = () => {
  const params = useParams();
  const projectTag = params?.tag as string;

  // Get project data based on tag
  const project = projectDetailsData[projectTag];

  const [selectedImage, setSelectedImage] = useState(0);
  const [featureImageIndexes, setFeatureImageIndexes] = useState<Record<number, number>>({});

  // If project not found, show error
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-amber-100 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-amber-400 hover:text-amber-300">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const handleFeatureImageChange = (featureIndex: number, direction: 'prev' | 'next', totalImages: number) => {
    setFeatureImageIndexes(prev => {
      const currentIndex = prev[featureIndex] || 0;
      let newIndex;

      if (direction === 'next') {
        newIndex = (currentIndex + 1) % totalImages;
      } else {
        newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
      }

      return { ...prev, [featureIndex]: newIndex };
    });
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.03),transparent_50%)] pointer-events-none"></div>

      {/* Noise Texture */}
      <div
        className="fixed inset-0 z-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 pt-25">
        {/* Back Button */}

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-6xl mx-auto"
          >
            {/* Title & Meta */}
            <div className="mb-12">
              <h1
                className="text-4xl md:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-slate-200 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  letterSpacing: '0.02em'
                }}
              >
                {project.title}
              </h1>
              <p
                className="text-xl md:text-2xl text-slate-300 font-light mb-8"
                style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
              >
                {project.tagline}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-light mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>{project.year} • {project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>{project.team}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-amber-400" />
                  <span>{project.role}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-amber-400/20 rounded-lg hover:border-amber-400/40 hover:bg-slate-800/80 transition-all duration-300 group"
                  style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                >
                  <Github className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-light">View on GitHub</span>
                </a>
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-amber-400/10 to-amber-500/5 border border-amber-400/30 text-amber-100 rounded-lg hover:bg-amber-400/20 hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300 group"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-light">Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Main Image */}
            {project.image.length != 0 &&
              <div className="relative w-full rounded-2xl overflow-hidden border border-amber-400/20 shadow-[0_12px_48px_rgba(0,0,0,0.5)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            }

          </motion.div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Description */}
              <div className="md:col-span-2">
                <h2
                  className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-100 mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                    letterSpacing: '0.03em'
                  }}
                >
                  Project Overview
                </h2>
                <p
                  className="text-slate-300 font-light leading-relaxed mb-6"
                  style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                >
                  {project.longDescription}
                </p>

                {/* Key Highlights */}
                {project.keyHighlights.length != 0 &&
                  <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl border border-amber-400/20 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-amber-400" />
                      <h3
                        className="text-xl font-light text-amber-100"
                        style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                      >
                        Key Highlights
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {project.keyHighlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="text-slate-300 text-sm font-light flex items-start gap-2"
                          style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                        >
                          <span className="text-amber-400 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                }

              </div>

              {/* Tech Stack */}
              <div>
                <h3
                  className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-100 mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                    letterSpacing: '0.03em'
                  }}
                >
                  Tech Stack
                </h3>
                <div className="space-y-6">
                  {Object.entries(project.techStack).map(([category, techs]) => (
                    <div key={category}>
                      {techs.length != 0 &&
                        <h4
                          className="text-sm font-light text-amber-400 uppercase tracking-wider mb-3"
                          style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                        >
                          {category}
                        </h4>
                      }

                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-950/50 border border-amber-400/20 rounded-full text-slate-300 text-xs font-light"
                            style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        {
          project.features.length != 0 &&
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2
                className="text-3xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-100 mb-12 text-center"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  letterSpacing: '0.03em'
                }}
              >
                Key Features
              </h2>
              <div className="space-y-20">
                {project.features.map((feature, index) => {
                  const currentImageIndex = featureImageIndexes[index] || 0;
                  const hasMultipleImages = feature.images && feature.images.length > 1;
                  const hasImages = feature.images && feature.images.length > 0;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                      className="flex flex-col items-center gap-8"
                    >
                      {/* Text Section - Always on top */}
                      <div className="max-w-3xl text-center">
                        <h3
                          className="text-2xl md:text-3xl font-light text-amber-100 mb-4"
                          style={{
                            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                            letterSpacing: '0.02em'
                          }}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className="text-slate-300 font-light leading-relaxed text-base md:text-lg"
                          style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                        >
                          {feature.description}
                        </p>
                      </div>

                      {/* Image Section - Below text, full width */}
                      {hasImages && (
                        <div className="w-full max-w-5xl">
                          <div className="relative group">
                            <div className="relative w-full rounded-2xl overflow-hidden border border-amber-400/20 shadow-[0_12px_48px_rgba(0,0,0,0.5)]">
                              <img
                                src={feature.images[currentImageIndex]}
                                alt={`${feature.title} - Image ${currentImageIndex + 1}`}
                                className="w-full h-auto object-contain"
                              />
                            </div>

                            {/* Navigation Arrows - Only show if multiple images */}
                            {hasMultipleImages && (
                              <>
                                <button
                                  onClick={() => handleFeatureImageChange(index, 'prev', feature.images!.length)}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/90 border border-amber-400/40 rounded-full text-amber-400 hover:bg-slate-800 hover:border-amber-400/60 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                                  aria-label="Previous image"
                                >
                                  <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                  onClick={() => handleFeatureImageChange(index, 'next', feature.images!.length)}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/90 border border-amber-400/40 rounded-full text-amber-400 hover:bg-slate-800 hover:border-amber-400/60 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                                  aria-label="Next image"
                                >
                                  <ChevronRight className="w-6 h-6" />
                                </button>

                                {/* Image Counter */}
                                <div className="absolute top-4 right-4 px-4 py-2 bg-slate-900/90 border border-amber-400/30 rounded-full text-amber-100 text-sm font-light backdrop-blur-sm">
                                  {currentImageIndex + 1} / {feature.images!.length}
                                </div>

                                {/* Dots Indicator */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-900/80 px-4 py-2 rounded-full backdrop-blur-sm">
                                  {feature.images!.map((_, imgIndex) => (
                                    <button
                                      key={imgIndex}
                                      onClick={() => setFeatureImageIndexes(prev => ({ ...prev, [index]: imgIndex }))}
                                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${imgIndex === currentImageIndex
                                          ? 'bg-amber-400 w-8'
                                          : 'bg-amber-400/40 hover:bg-amber-400/60'
                                        }`}
                                      aria-label={`Go to image ${imgIndex + 1}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        }


        {/* Challenges & Solutions */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl border border-amber-400/20 rounded-2xl p-8 transition-transform duration-500 hover:scale-105">
                <h3
                  className="text-2xl font-light text-amber-100 mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                    letterSpacing: '0.02em'
                  }}
                >
                  Challenges
                </h3>
                <p
                  className="text-slate-300 font-light leading-relaxed"
                  style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                >
                  {project.challenges}
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl border border-amber-400/20 rounded-2xl p-8 transition-transform duration-500 hover:scale-105">
                <h3
                  className="text-2xl font-light text-amber-100 mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                    letterSpacing: '0.02em'
                  }}
                >
                  Solutions
                </h3>
                <p
                  className="text-slate-300 font-light leading-relaxed"
                  style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                >
                  {project.solutions}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        {project.outcome.length != 0 &&
          <section className="container mx-auto px-4 py-16 pb-32">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-3xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-100 mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  letterSpacing: '0.03em'
                }}
              >
                Outcome & Impact
              </h2>
              <p
                className="text-slate-300 text-lg font-light leading-relaxed"
                style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
              >
                {project.outcome}
              </p>
            </div>
          </section>
        }

      </div>
    </div>
  );
};

export default ProjectDetailsPage;