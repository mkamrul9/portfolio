"use client";

import { motion } from "framer-motion";
import { SiCodeforces, SiGithub, SiLeetcode, SiNpm } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const links = [
        { label: "GitHub", href: "https://github.com/mkamrul9", icon: SiGithub },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/md-kamrul-islam9",
            icon: FaLinkedinIn,
        },
        { label: "LeetCode", href: "https://leetcode.com/u/Kamrul19/", icon: SiLeetcode },
        {
            label: "Codeforces",
            href: "https://codeforces.com/profile/blue9",
            icon: SiCodeforces,
        },
        {
            label: "streamshare-cli",
            href: "https://www.npmjs.com/package/streamshare-cli",
            icon: SiNpm,
        },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.2),transparent_45%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-5 text-zinc-400">
                    <div className="text-xl font-bold tracking-wider text-violet-400">KI.</div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {links.map((item, idx) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.06 }}
                                whileHover={{ y: -3, scale: 1.04 }}
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm transition-colors hover:border-violet-400/50 hover:text-violet-300"
                            >
                                <item.icon size={16} />
                                {item.label}
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
                        <a
                            href="tel:01736635727"
                            className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-zinc-300 transition-colors hover:border-violet-400/40 hover:text-violet-300"
                        >
                            <Phone size={12} />
                            01736635727
                        </a>
                        <a
                            href="mailto:mdkamrulislam.dev@gmail.com"
                            className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-zinc-300 transition-colors hover:border-violet-400/40 hover:text-violet-300"
                        >
                            <Mail size={12} />
                            mdkamrulislam.dev@gmail.com
                        </a>
                    </div>

                    <p className="text-center text-xs text-zinc-500">
                        &copy; {currentYear} Kamrul Islam. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
