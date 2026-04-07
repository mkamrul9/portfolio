"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, FolderGit2, Info, X } from "lucide-react";

type Project = {
    id: number;
    name: string;
    image: string;
    description: string;
    techStack: string[];
    liveLink: string;
    githubLink: string;
    challenges: string;
    futurePlans: string;
};

const projectData: Project[] = [
    {
        id: 1,
        name: "Funding Panda",
        image: "/fp.png",
        description:
            "A comprehensive full-stack crowdfunding platform with secure payments, real-time updates, and role-based access control.",
        techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Zod",
            "PostgreSQL",
            "Prisma",
            "BetterAuth",
            "RBAC",
            "JWT",
            "Session",
            "Socket.io",
            "Stripe",
            "Cloudinary",
            "Multer",
            "Tailwind",
            "Shadcn",
            "TanStack Query",
            "TanStack Form",
            "Axios",
        ],
        liveLink: "https://funding-panda-frontend.vercel.app/",
        githubLink: "https://github.com/mkamrul9/fundingPanda-frontend",
        challenges:
            "Handling real-time secure socket connections for immediate funding updates and properly integrating Stripe webhooks securely with the backend architecture.",
        futurePlans:
            "Implement a more robust analytics dashboard for campaign creators and integrate an AI-driven recommendation system for donors.",
    },
    {
        id: 2,
        name: "SkillBridge",
        image: "/sb.png",
        description:
            "An educational platform bridging the gap between learners and mentors, featuring secure authentication and robust data handling.",
        techStack: [
            "Next.js App Router",
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "BetterAuth",
            "RBAC",
            "Native Fetch API",
            "TanStack Form",
            "Tailwind",
            "Shadcn",
        ],
        liveLink: "https://skillbridge-frontend-phi.vercel.app/",
        githubLink: "https://github.com/mkamrul9/SkillBridge-frontend",
        challenges:
            "Designing a flexible and secure Role-Based Access Control (RBAC) system from scratch and optimizing data fetching strategies using the native Fetch API.",
        futurePlans:
            "Add in-app video conferencing for mentoring sessions and a comprehensive certification generation module.",
    },
    {
        id: 3,
        name: "KanbanSync",
        image: "/ks.png",
        description:
            "A real-time collaborative Kanban board built by a 2-person team, designed to streamline project management and task synchronization.",
        techStack: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express.js",
            "WebSockets",
            "Prisma",
            "Tailwind CSS",
            "PostgreSQL",
        ],
        liveLink: "https://kanbansync-pc3d.onrender.com/",
        githubLink: "https://github.com/mkamrul9/KanbanSync",
        challenges:
            "Ensuring optimistic UI updates without data tearing when multiple users edited the same Kanban column simultaneously.",
        futurePlans:
            "Develop a mobile-native version and integrate third-party calendar applications like Google Calendar.",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="bg-zinc-900 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-extrabold text-zinc-100 sm:text-4xl">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                    <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-cyan-400"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projectData.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-sm transition-all hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                            <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} preview`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="mb-2 text-xl font-bold text-zinc-100">
                                    {project.name}
                                </h3>
                                <p className="mb-6 line-clamp-3 flex-1 text-zinc-400">
                                    {project.description}
                                </p>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full rounded-xl bg-zinc-800 py-3 font-medium text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-zinc-950"
                                >
                                    View More / Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedProject && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
                        <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl duration-200 animate-in fade-in zoom-in-95">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 rounded-full bg-zinc-800 p-2 text-zinc-300 transition-colors hover:bg-red-500/20 hover:text-red-300"
                                aria-label="Close project details"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-8 sm:p-10">
                                <h2 className="mb-4 text-3xl font-bold text-zinc-100">
                                    {selectedProject.name}
                                </h2>
                                <p className="mb-6 text-lg text-zinc-300">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="mb-3 text-sm font-semibold tracking-wider text-zinc-100 uppercase">
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-md border border-cyan-500/30 bg-zinc-900 px-3 py-1 text-sm font-medium text-cyan-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
                                        <div className="mb-3 flex items-center gap-2 font-semibold text-amber-300">
                                            <Info size={20} />
                                            Challenges Faced
                                        </div>
                                        <p className="text-sm leading-relaxed text-amber-100/90">
                                            {selectedProject.challenges}
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-5">
                                        <div className="mb-3 flex items-center gap-2 font-semibold text-cyan-300">
                                            <Info size={20} />
                                            Future Plans
                                        </div>
                                        <p className="text-sm leading-relaxed text-cyan-100/90">
                                            {selectedProject.futurePlans}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 border-t border-zinc-800 pt-4 sm:flex-row">
                                    <a
                                        href={selectedProject.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-medium text-zinc-950 transition-colors hover:bg-cyan-300"
                                    >
                                        <ExternalLink size={20} />
                                        Live Project
                                    </a>
                                    <a
                                        href={selectedProject.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-800 px-6 py-3 font-medium text-zinc-100 transition-colors hover:bg-zinc-700"
                                    >
                                        <FolderGit2 size={20} />
                                        Client Repository
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
