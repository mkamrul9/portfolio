"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, Code, Download, FolderGit2, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    } as const;

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    } as const;

    return (
        <section
            id="home"
            className="flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 pt-20"
        >
            <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
                <div className="animate-blob absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500 opacity-20 blur-2xl"></div>
                <div className="animate-blob animation-delay-2000 absolute top-20 right-10 h-72 w-72 rounded-full bg-blue-500 opacity-20 blur-2xl"></div>

                <motion.div
                    className="z-10 flex-1 text-center md:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="mb-3 font-bold tracking-widest text-cyan-400 uppercase"
                    >
                        Welcome to my universe
                    </motion.h2>
                    <motion.h1
                        variants={itemVariants}
                        className="mb-4 text-5xl font-extrabold tracking-tight text-zinc-100 md:text-7xl"
                    >
                        Hi, I&apos;m{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Kamrul Islam
                        </span>
                    </motion.h1>
                    <motion.h3
                        variants={itemVariants}
                        className="mb-6 text-2xl font-medium text-zinc-300 md:text-4xl"
                    >
                        Full Stack Developer
                    </motion.h3>
                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:mx-0"
                    >
                        I engineer robust, scalable, and user-centric web applications.
                        Passionate about solving complex system design challenges and
                        bringing innovative ideas to life on the web.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mb-10 flex flex-col items-center justify-center gap-5 sm:flex-row md:justify-start"
                    >
                        <motion.a
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(34, 211, 238, 0.25)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            href="/Resumemarch.pdf"
                            download="Resumemarch.pdf"
                            className="flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-4 font-bold text-zinc-950 transition-all"
                        >
                            <Download size={22} />
                            Download Resume
                        </motion.a>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="#contact"
                                className="inline-block rounded-full border-2 border-zinc-700 px-8 py-4 font-bold text-zinc-200 transition-colors hover:border-cyan-400 hover:text-cyan-400"
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-6 md:justify-start"
                    >
                        <SocialIcon
                            href="https://github.com/mkamrul9"
                            icon={<FolderGit2 />}
                            ariaLabel="GitHub"
                        />
                        <SocialIcon
                            href="https://www.linkedin.com/in/md-kamrul-islam9"
                            icon={<Briefcase />}
                            ariaLabel="LinkedIn"
                        />
                        <SocialIcon
                            href="https://leetcode.com/u/Kamrul19/"
                            icon={<Code />}
                            ariaLabel="LeetCode"
                        />
                        <SocialIcon
                            href="https://www.facebook.com/kamrul.islam.648172/"
                            icon={<Users />}
                            ariaLabel="Facebook"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="z-10 flex flex-1 justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-zinc-800 shadow-2xl md:h-96 md:w-96"
                    >
                        <Image
                            src="/profilepic.jpeg"
                            alt="Kamrul Islam"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 18rem, 24rem"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialIcon({
    href,
    icon,
    ariaLabel,
}: {
    href: string;
    icon: ReactNode;
    ariaLabel: string;
}) {
    return (
        <motion.a
            whileHover={{
                scale: 1.2,
                rotate: 5,
                backgroundColor: "#2563eb",
                color: "#09090b",
            }}
            whileTap={{ scale: 0.9 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="rounded-full border border-zinc-700 bg-zinc-900 p-4 text-zinc-300 shadow-lg transition-colors duration-300"
        >
            {icon}
        </motion.a>
    );
}
