"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Code, Coffee, Sprout } from "lucide-react";

export default function About() {
    const journey = [
        {
            period: "2022 - Present",
            title: "RUET ECE (4th Year, 8th Semester)",
            description:
                "Studying Electrical & Computer Engineering while building full-stack products and sharpening software architecture skills.",
        },
        {
            period: "Open Source",
            title: "OWASP BLT Contributor",
            description:
                "Contributed in both blt core and blt next repositories with fixes, improvements, and collaborative development workflows.",
        },
        {
            period: "Team Project",
            title: "KanbanSync (2-Person Team)",
            description:
                "Built a collaborative Kanban app focused on real-time sync and practical project collaboration.",
        },
    ];

    return (
        <section id="about" className="relative overflow-hidden bg-zinc-900 py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_45%)]" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-extrabold text-zinc-100 sm:text-4xl">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-cyan-400"></div>
                </motion.div>

                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-lg leading-relaxed text-zinc-300"
                    >
                        <p>
                            Hello! My programming journey started with a deep curiosity
                            about how things work on the web. Today, I am an
                            8th-semester, 4th-year student at <strong>Rajshahi
                                University of Engineering and Technology (RUET)</strong>,
                            studying Electrical &amp; Computer Engineering (ECE).
                        </p>
                        <p>
                            I thrive in full-stack development, particularly enjoying the
                            challenge of building scalable backends and seamless,
                            interactive frontends. Whether it&apos;s architecting a database
                            with PostgreSQL and Prisma or crafting UI components with
                            Next.js and Tailwind, I love turning complex logic into
                            user-friendly applications.
                        </p>
                        <p>
                            When I&apos;m not writing code or studying for my ECE courses,
                            you can usually find me on the <strong>football</strong>
                            field enjoying a good match, or tending to my <strong>
                                rooftop garden</strong>, where I grow a variety of plants
                            and find a great sense of peace.
                        </p>

                        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6">
                            <h3 className="mb-4 text-xl font-bold text-zinc-100">
                                Journey Timeline
                            </h3>
                            <div className="relative pl-6 before:absolute before:top-1 before:left-2 before:h-[calc(100%-8px)] before:w-px before:bg-zinc-700">
                                {journey.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.12 }}
                                        className="relative mb-5 last:mb-0"
                                    >
                                        <span className="absolute top-1 -left-6 h-3 w-3 rounded-full border border-cyan-300 bg-zinc-950" />
                                        <p className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                                            {item.period}
                                        </p>
                                        <p className="mt-1 text-base font-semibold text-zinc-100">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-sm text-zinc-400">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="relative h-60 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 sm:h-72">
                            <Image
                                src="/profilepic.jpeg"
                                alt="Kamrul Islam snapshot"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 to-transparent" />
                            <p className="absolute right-4 bottom-4 rounded-full border border-cyan-400/40 bg-zinc-950/80 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300 uppercase">
                                Building with purpose
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <InfoCard
                                icon={<BookOpen className="text-cyan-400" size={32} />}
                                title="Education"
                                desc="B.Sc in ECE, RUET (4th Year, 8th Semester)"
                            />
                            <InfoCard
                                icon={<Code className="text-cyan-400" size={32} />}
                                title="Focus"
                                desc="Full Stack Web Development & System Design"
                            />
                            <InfoCard
                                icon={<Sprout className="text-cyan-400" size={32} />}
                                title="Hobbies"
                                desc="Rooftop Gardening & Plant Care"
                            />
                            <InfoCard
                                icon={<Coffee className="text-cyan-400" size={32} />}
                                title="Interests"
                                desc="Football & Open Source Contribution"
                            />
                        </div>
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
            className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
        >
            <div className="origin-left mb-4 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold text-zinc-100">{title}</h3>
            <p className="text-zinc-400">{desc}</p>
        </motion.div>
    );
}
