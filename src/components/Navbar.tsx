"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("#home");

    useEffect(() => {
        const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));

        const syncFromHash = () => {
            if (window.location.hash) {
                setActive(window.location.hash);
            }
        };

        const updateActiveByScroll = () => {
            const scrollY = window.scrollY;
            const offset = 120;

            let current = "#home";
            for (const id of sectionIds) {
                const section = document.getElementById(id);
                if (!section) {
                    continue;
                }

                if (scrollY >= section.offsetTop - offset) {
                    current = `#${id}`;
                }
            }

            setActive(current);
        };

        syncFromHash();
        updateActiveByScroll();
        window.addEventListener("hashchange", syncFromHash);
        window.addEventListener("scroll", updateActiveByScroll, { passive: true });
        window.addEventListener("resize", updateActiveByScroll);

        return () => {
            window.removeEventListener("hashchange", syncFromHash);
            window.removeEventListener("scroll", updateActiveByScroll);
            window.removeEventListener("resize", updateActiveByScroll);
        };
    }, []);

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/90 bg-zinc-950/80 shadow-sm backdrop-blur-md">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(168,85,247,0.16),transparent_30%,transparent_70%,rgba(217,70,239,0.14))]" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        className="relative shrink-0 rounded-full border border-violet-400/35 bg-transparent px-4 py-1 text-2xl font-bold text-violet-300"
                    >
                        KI.
                    </motion.div>

                    <div className="hidden items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 p-1 md:flex">
                        {NAV_LINKS.map((link) => (
                            <motion.div key={link.name} whileHover={{ y: -1 }}>
                                <Link
                                    href={link.href}
                                    onClick={() => setActive(link.href)}
                                    className={`relative rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${active === link.href
                                        ? "border-violet-400/55 bg-violet-400/12 text-violet-200"
                                        : "border-transparent text-zinc-300 hover:border-violet-400/30 hover:text-violet-300"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-300 hover:text-violet-300 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-b border-zinc-800 bg-zinc-950 pb-4 md:hidden"
                >
                    <div className="flex flex-col items-center space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => {
                                    setActive(link.href);
                                    setIsOpen(false);
                                }}
                                className={`block rounded-md px-3 py-2 text-lg font-medium transition-colors ${active === link.href
                                    ? "text-violet-300"
                                    : "text-zinc-300 hover:text-violet-300"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
