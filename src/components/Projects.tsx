"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectData } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden bg-zinc-900 py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(192,132,252,0.14),transparent_40%)]" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-extrabold text-zinc-100 sm:text-4xl">
                        Featured{" "}
                        <span className="bg-linear-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-violet-400"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projectData.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{ y: -8 }}
                            className="flex flex-col overflow-hidden rounded-2xl border border-violet-400/20 bg-zinc-950 shadow-sm transition-all hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-400/10"
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
                                <p className="mb-6 line-clamp-3 flex-1 text-sm text-zinc-400">
                                    {project.description}
                                </p>
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="mt-auto inline-flex items-center justify-center rounded-xl bg-zinc-800 px-4 py-3 text-sm font-semibold text-violet-200 transition-colors hover:bg-violet-400 hover:text-zinc-950"
                                >
                                    View More / Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
