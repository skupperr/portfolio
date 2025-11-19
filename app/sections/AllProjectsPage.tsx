import React from 'react';
import { projectsData } from './projectsData';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

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
        <div className="border-2 border-cyan-500/30 bg-[#000421]/50 p-6 rounded-lg backdrop-blur-sm flex flex-col h-full group transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:-translate-y-2">
            <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-col flex-grow text-left">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm font-light mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-full border border-fuchsia-500/50 bg-[#000421]/60 text-fuchsia-300 text-xs font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-5">
                    {/* GitHub Tooltip */}
                    <TooltipProvider delayDuration={50}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm transition-all duration-300 text-slate-300 hover:text-white"
                                >
                                    <GithubIcon />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>GitHub Repository</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    {/* Live Demo Tooltip */}
                    {project.liveDemoUrl && (
                        <TooltipProvider delayDuration={50}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={project.liveDemoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm transition-all duration-300 text-fuchsia-300 hover:text-fuchsia-200"
                                    >
                                        <LiveDemoIcon />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Live Demo</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>
            </div>
        </div>
    );
};

const FeaturedProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="border-2 border-fuchsia-500/50 bg-[#000421]/60 p-6 rounded-lg backdrop-blur-sm group transition-all duration-300 hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:-translate-y-2 grid md:grid-cols-5 gap-8 items-center">
            {/* Image */}
            <div className="md:col-span-2 w-full h-64 overflow-hidden rounded-md">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            {/* Details */}
            <div className="md:col-span-3 flex flex-col h-full text-left">
                <h3 className="text-3xl font-bold text-fuchsia-300 mb-3">{project.title}</h3>
                <p className="text-slate-300 font-light mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto justify-between">
                    <div>
                        {project.techStack.map(tech => (
                            <span key={tech} className="px-3 py-1 rounded-full border border-cyan-500/50 bg-[#000421]/60 text-cyan-300 text-xs font-medium mr-2">
                                {tech}
                            </span>
                        ))}
                    </div>



                    <div className="flex flex-wrap gap-4">

                        <TooltipProvider delayDuration={50}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm transition-all duration-300 text-slate-300 hover:text-white"
                                    >
                                        <GithubIcon />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
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
                                            className="text-sm transition-all duration-300 text-fuchsia-300 hover:text-fuchsia-200"
                                        >
                                            <LiveDemoIcon />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Live Demo</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}

                    </div>

                </div>

            </div>
        </div>
    );
};


const AllProjectsPage: React.FC = () => {
    const featuredProjects = projectsData.filter(p => p.featured);
    const regularProjects = projectsData.filter(p => !p.featured);

    return (
        <div className="min-h-screen bg-[#00001a] text-white">
            <section className="relative py-20 md:py-24 px-4">
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.08),transparent_40%)]"></div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 text-center" style={{ textShadow: '0 0 12px rgba(0, 255, 255, 0.5)' }}>
                            All Projects
                        </h2>
                        <div className="hidden md:block w-48"></div> {/* Spacer to center the title on larger screens */}
                    </div>

                    {/* Featured Projects Section */}
                    {featuredProjects.length > 0 && (
                        <div className="mb-20">
                            <h3 className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-8 text-center" style={{ textShadow: '0 0 12px rgba(217, 70, 239, 0.5)' }}>
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
                            <h3 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8 text-center" style={{ textShadow: '0 0 12px rgba(0, 255, 255, 0.5)' }}>
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
