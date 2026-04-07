"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, MoveRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function BlogComingSoon() {
    return (
        <section id="blog" className="relative overflow-hidden bg-zinc-900 py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(192,132,252,0.24),transparent_42%)]" />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 rounded-3xl border border-violet-400/25 bg-zinc-950/90 p-8 text-center shadow-xl shadow-violet-500/10"
                >
                    <div className="mx-auto mb-4 inline-flex rounded-full border border-violet-400/35 bg-violet-400/10 p-3 text-violet-200">
                        <FileText size={20} />
                    </div>
                    <h2 className="text-2xl font-extrabold text-zinc-100 sm:text-3xl">
                        Latest <span className="text-violet-300">Blog Posts</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                        Engineering notes on system design, realtime collaboration, and
                        practical full stack development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {blogPosts.map((post) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-violet-400/20 bg-zinc-950/90 p-5"
                        >
                            <div className="text-xs text-zinc-500">
                                {post.publishedAt} - {post.readTime}
                            </div>
                            <h3 className="mt-2 text-lg font-bold text-zinc-100">{post.title}</h3>
                            <p className="mt-2 text-sm text-zinc-400">{post.summary}</p>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200"
                            >
                                Read Article
                                <MoveRight size={14} />
                            </Link>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex rounded-full border border-violet-400/35 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-200 transition-colors hover:bg-violet-400/20"
                    >
                        View All Posts
                    </Link>
                </div>
            </div>
        </section>
    );
}
