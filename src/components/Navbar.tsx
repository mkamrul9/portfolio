"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("#home");

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/90 bg-zinc-950/80 shadow-sm backdrop-blur-md">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.12),transparent_30%,transparent_70%,rgba(59,130,246,0.12))]" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        className="relative shrink-0 rounded-full border border-cyan-400/30 bg-zinc-900 px-4 py-1 text-2xl font-bold text-cyan-400"
                    >
                        KI.
                    </motion.div>

                    <div className="hidden items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 p-1 md:flex">
                        {navLinks.map((link) => (
                            <motion.div key={link.name} whileHover={{ y: -1 }}>
                                <Link
                                    href={link.href}
                                    onClick={() => setActive(link.href)}
                                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                                        active === link.href
                                            ? "text-zinc-950"
                                            : "text-zinc-300 hover:text-cyan-300"
                                    }`}
                                >
                                    {active === link.href && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 -z-10 rounded-full bg-cyan-400"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-300 hover:text-cyan-400 focus:outline-none"
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
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => {
                                    setActive(link.href);
                                    setIsOpen(false);
                                }}
                                className="block px-3 py-2 text-lg font-medium text-zinc-300 hover:text-cyan-400"
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
