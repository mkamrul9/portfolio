"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

type ExperienceItem = {
    role: string;
    company: string;
    duration: string;
    description: string;
    prLinks?: { label: string; href: string }[];
    note?: string;
};

export default function Experience() {
    const experiences: ExperienceItem[] = [
        {
            role: "Open Source Contributor",
            company: "OWASP Foundation",
            duration: "Recent",
            description:
                "Contributed to the OWASP Bug Logging Tool ecosystem in both BLT core and BLT Next repositories by improving functionality, fixing issues, and collaborating with maintainers.",
            prLinks: [
                {
                    label: "BLT PR #6094",
                    href: "https://github.com/OWASP-BLT/BLT/pull/6094",
                },
                {
                    label: "BLT Next PR #117",
                    href: "https://github.com/OWASP-BLT/BLT-Next/pull/117",
                },
                {
                    label: "BLT Next PR #115",
                    href: "https://github.com/OWASP-BLT/BLT-Next/pull/115",
                },
            ],
        },
        {
            role: "Frontend & Product Contributor",
            company: "GenZSBD (4-Person Team)",
            duration: "2026",
            description:
                "Worked in a team of 4 people to build a games leaderboard experience for GenZSBD, focusing on ranking UI, user flow, and integration logic.",
            note: "Private repository work.",
        },
        {
            role: "Full Stack Developer",
            company: "Team Project (2-Person Team)",
            duration: "2026",
            description:
                "Co-developed KanbanSync in a 2-person team as a collaborative Kanban board application. Managed full-stack responsibilities for real-time synchronization, system design, and deployment workflows.",
            prLinks: [
                {
                    label: "KanbanSync Live",
                    href: "https://kanbansync-pc3d.onrender.com/",
                },
                {
                    label: "KanbanSync GitHub",
                    href: "https://github.com/mkamrul9/KanbanSync",
                },
            ],
        },
    ];

    return (
        <section id="experience" className="relative bg-zinc-950 py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-extrabold text-zinc-100 sm:text-4xl">
                        Professional <span className="text-violet-400">Experience</span>
                    </h2>
                    <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-violet-400"></div>
                </motion.div>

                <div className="space-y-6">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative"
                        >
                            <div className="group items-start justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-shadow hover:shadow-md hover:shadow-violet-500/10 md:flex">
                                <div className="flex-1">
                                    <div className="mb-2 flex items-center gap-2">
                                        <Briefcase className="text-violet-400" size={20} />
                                        <h3 className="text-xl font-bold text-zinc-100">
                                            {exp.role}
                                        </h3>
                                    </div>
                                    <h4 className="mb-4 text-lg font-medium text-violet-300">
                                        {exp.company}
                                    </h4>
                                    <p className="leading-relaxed text-zinc-400">
                                        {exp.description}
                                    </p>
                                    {exp.note && (
                                        <p className="mt-3 text-xs font-medium tracking-wide text-violet-200/90 uppercase">
                                            {exp.note}
                                        </p>
                                    )}
                                    {exp.prLinks && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {exp.prLinks.map((pr) => (
                                                <a
                                                    key={pr.href}
                                                    href={pr.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200 transition-colors hover:border-violet-300 hover:bg-violet-400/20"
                                                >
                                                    {pr.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-4 ml-0 flex shrink-0 items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-300 md:mt-0 md:ml-6">
                                    <Calendar size={16} />
                                    {exp.duration}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
