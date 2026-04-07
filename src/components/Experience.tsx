"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            role: "Open Source Contributor",
            company: "OWASP Foundation",
            duration: "Recent",
            description:
                "Contributed to the OWASP Bug Logging Tool (BLT), working in both 'blt core' and 'blt next' repositories. Improved functionality, fixed issues, and collaborated with the open-source community.",
        },
        {
            role: "Full Stack Developer",
            company: "Team Project (2-Person Team)",
            duration: "2026",
            description:
                "Co-developed KanbanSync in a 2-person team as a collaborative Kanban board application. Managed full-stack responsibilities for real-time synchronization, system design, and deployment workflows.",
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
                        Professional <span className="text-cyan-400">Experience</span>
                    </h2>
                    <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-cyan-400"></div>
                </motion.div>

                <div className="relative space-y-8">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute top-0 left-3 h-full w-px origin-top bg-zinc-700 md:left-1/2"
                    />
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-10 md:pl-0"
                        >
                            <span className="absolute top-7 left-1 h-4 w-4 rounded-full border-2 border-cyan-400 bg-zinc-950 md:left-1/2 md:-translate-x-1/2" />
                            <div className="group items-start justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-shadow hover:shadow-md hover:shadow-cyan-500/10 md:flex">
                                <div className="flex-1">
                                    <div className="mb-2 flex items-center gap-2">
                                        <Briefcase className="text-cyan-400" size={20} />
                                        <h3 className="text-xl font-bold text-zinc-100">
                                            {exp.role}
                                        </h3>
                                    </div>
                                    <h4 className="mb-4 text-lg font-medium text-cyan-300">
                                        {exp.company}
                                    </h4>
                                    <p className="leading-relaxed text-zinc-400">
                                        {exp.description}
                                    </p>
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
