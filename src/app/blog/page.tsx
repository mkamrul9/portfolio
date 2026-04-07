import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-3xl font-extrabold text-zinc-100 sm:text-4xl">Blog</h1>
                <p className="mt-3 max-w-2xl text-zinc-400">
                    Notes on system design, full stack development, and real-world engineering decisions.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {blogPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="rounded-2xl border border-violet-400/20 bg-zinc-900 p-5 transition-colors hover:border-violet-400/45"
                        >
                            <div className="text-xs text-zinc-500">
                                {post.publishedAt} • {post.readTime}
                            </div>
                            <h2 className="mt-2 text-lg font-bold text-zinc-100">{post.title}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{post.summary}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-violet-400/30 bg-violet-400/10 px-2.5 py-1 text-xs text-violet-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="mt-4 inline-flex rounded-lg bg-zinc-800 px-3 py-2 text-xs font-semibold text-violet-200 transition-colors hover:bg-violet-400 hover:text-zinc-950"
                            >
                                Read Article
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
