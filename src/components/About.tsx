"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, Coffee, Sprout } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden bg-zinc-900 py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.16),transparent_45%)]" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-2xl font-extrabold text-zinc-100 sm:text-3xl">
                        About{" "}
                        <span className="bg-linear-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                    <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-violet-400"></div>
                </motion.div>

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 text-base leading-relaxed text-zinc-300"
                    >
                        <p>
                            I am an ECE student at <strong>RUET</strong> focused on
                            full-stack engineering, system design, and building practical
                            products with clean architecture.
                        </p>
                        <p>
                            Currently pursuing my <strong>BSc in Electrical &amp; Computer
                                Engineering</strong> (8th Semester), with strong academic
                            grounding in software fundamentals and systems.
                        </p>
                        <p>
                            I enjoy building scalable backends and polished frontend
                            experiences, while keeping performance, clarity, and
                            maintainability in mind.
                        </p>
                        <p>
                            Strong problem-solving mindset with <strong>100+ solved
                                LeetCode problems</strong> and consistent algorithmic
                            practice.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                        <InfoCard
                            icon={<BookOpen className="text-violet-400" size={24} />}
                            title="Education"
                            desc="RUET ECE, 8th Semester"
                        />
                        <InfoCard
                            icon={<Sprout className="text-violet-400" size={24} />}
                            title="Hobbies"
                            desc="Plant care & Football"
                        />
                        <InfoCard
                            icon={<Coffee className="text-violet-400" size={24} />}
                            title="Interests"
                            desc="Open Source & System Design"
                        />
                        <InfoCard
                            icon={<Code className="text-violet-400" size={24} />}
                            title="Problem Solving"
                            desc="100+ LeetCode Problems"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function InfoCard({
    icon,
    title,
    desc,
}: {
    icon: ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-violet-400/20 bg-zinc-950 p-4 transition-all hover:border-violet-400/45 hover:shadow-lg hover:shadow-violet-400/10"
        >
            <div className="origin-left mb-4 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>
            <h3 className="mb-1 text-base font-bold text-zinc-100">{title}</h3>
            <p className="text-sm text-zinc-400">{desc}</p>
        </motion.div>
    );
}
