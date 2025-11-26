'use client';

import React from 'react';
import { projectsData } from './projectsData';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import Link from 'next/link';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

const LiveDemoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

interface Project {
    id: number;
    tag: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    featured?: boolean;
    githubUrl: string;
    liveDemoUrl?: string;
}

interface ProjectGridCardProps {
    project: Project;
}

const ProjectGridCard: React.FC<ProjectGridCardProps> = ({ project }) => {
    return (
        <Link href={`/projects/${project.tag}`}>
            <div className="border border-amber-400/20 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 p-6 rounded-2xl backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] flex flex-col h-full group transition-all duration-500 hover:border-amber-400/40 hover:shadow-[0_12px_48px_rgba(251,191,36,0.15)] hover:-translate-y-2 cursor-pointer">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-xl border border-amber-400/10">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-col flex-grow text-left">
                    <h3 
                        className="text-xl md:text-2xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-100 mb-2"
                        style={{ 
                            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                            letterSpacing: '0.02em'
                        }}
                    >
                        {project.title}
                    </h3>
                    <p 
                        className="text-slate-400 text-sm font-light mb-4 flex-grow leading-relaxed"
                        style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                    >
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map(tech => (
                            <span 
                                key={tech} 
                                className="px-3 py-1 rounded-full border border-amber-400/20 bg-slate-950/50 text-amber-300 text-xs font-light tracking-wide"
                                style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 mt-2 pt-4 border-t border-amber-400/10">
                        <TooltipProvider delayDuration={50}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-110"
                                    >
                                        <GithubIcon />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent className="bg-slate-900 border-amber-400/30 text-white">
                                    <p>GitHub Repository</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        {project.liveDemoUrl && (
                            <TooltipProvider delayDuration={50}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a
                                            href={project.liveDemoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-110"
                                        >
                                            <LiveDemoIcon />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-slate-900 border-amber-400/30 text-white">
                                        <p>Live Demo</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

const FeaturedProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <Link href={`/projects/${project.tag}`}>
            <div className="border border-amber-400/30 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 p-8 rounded-3xl backdrop-blur-xl shadow-[0_12px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] group transition-all duration-500 hover:border-amber-400/50 hover:shadow-[0_16px_64px_rgba(251,191,36,0.2)] hover:-translate-y-2 grid md:grid-cols-5 gap-8 items-center cursor-pointer">
                {/* Image */}
                <div className="md:col-span-2 w-full h-64 overflow-hidden rounded-2xl border border-amber-400/20">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                {/* Details */}
                <div className="md:col-span-3 flex flex-col h-full text-left">
                    <h3 
                        className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-amber-50 mb-3"
                        style={{ 
                            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                            letterSpacing: '0.02em'
                        }}
                    >
                        {project.title}
                    </h3>
                    <p 
                        className="text-slate-300 font-light mb-6 flex-grow leading-relaxed"
                        style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                    >
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-auto items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <span 
                                    key={tech} 
                                    className="px-3 py-1 rounded-full border border-amber-400/30 bg-slate-950/50 text-amber-300 text-xs font-light tracking-wide"
                                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <TooltipProvider delayDuration={50}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-110"
                                        >
                                            <GithubIcon />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-slate-900 border-amber-400/30 text-white">
                                        <p>GitHub Repository</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            {project.liveDemoUrl && (
                                <TooltipProvider delayDuration={50}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <a
                                                href={project.liveDemoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-110"
                                            >
                                                <LiveDemoIcon />
                                            </a>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-slate-900 border-amber-400/30 text-white">
                                            <p>Live Demo</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

const AllProjectsPage: React.FC = () => {
    const featuredProjects = projectsData.filter(p => p.featured);
    const regularProjects = projectsData.filter(p => !p.featured);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
            <section className="relative py-24 md:py-32 px-4">
                {/* Elegant Background */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.03),transparent_50%)]"></div>
                
                {/* Premium Noise Texture */}
                <div 
                    className="absolute inset-0 z-0 opacity-[0.015] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                ></div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    {/* Page Header */}
                    <div className="text-center mb-20">
                        <h2 
                            className="text-4xl md:text-5xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-slate-200 mb-6"
                            style={{ 
                                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                                textShadow: '0 2px 30px rgba(251, 191, 36, 0.2)',
                                letterSpacing: '0.08em'
                            }}
                        >
                            All Projects
                        </h2>
                        
                        {/* Decorative Element */}
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400/50"></div>
                            <div className="w-2 h-2 rounded-full bg-amber-400/50"></div>
                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/50"></div>
                        </div>
                    </div>

                    {/* Featured Projects Section */}
                    {featuredProjects.length > 0 && (
                        <div className="mb-24">
                            <h3 
                                className="text-3xl md:text-4xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-100 mb-12 text-center"
                                style={{ 
                                    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                                    letterSpacing: '0.05em'
                                }}
                            >
                                Featured Projects
                            </h3>
                            <div className="grid grid-cols-1 gap-12">
                                {featuredProjects.map(project => (
                                    <FeaturedProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Regular Projects Section */}
                    {regularProjects.length > 0 && (
                        <div>
                            <h3 
                                className="text-3xl md:text-4xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-100 mb-12 text-center"
                                style={{ 
                                    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                                    letterSpacing: '0.05em'
                                }}
                            >
                                More Projects
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {regularProjects.map(project => (
                                    <ProjectGridCard key={project.id} project={project} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AllProjectsPage;