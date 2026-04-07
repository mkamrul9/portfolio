"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function BlogComingSoon() {
    return (
        <section id="blog" className="relative overflow-hidden bg-zinc-900 py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(192,132,252,0.24),transparent_42%)]" />
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-violet-400/25 bg-zinc-950/90 p-8 text-center shadow-xl shadow-violet-500/10"
                >
                    <div className="mx-auto mb-4 inline-flex rounded-full border border-violet-400/35 bg-violet-400/10 p-3 text-violet-200">
                        <FileText size={20} />
                    </div>
                    <h2 className="text-2xl font-extrabold text-zinc-100 sm:text-3xl">
                        Blog <span className="text-violet-300">Coming Soon</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                        I will soon share engineering notes, system design breakdowns, and
                        practical lessons from building real-world full stack projects.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
