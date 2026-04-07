import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import SystemDesignTradeoffs from "@/content/blog/system-design-tradeoffs.mdx";
import RealtimeCollabLessons from "@/content/blog/realtime-collab-lessons.mdx";

const postComponents = {
    "system-design-tradeoffs": SystemDesignTradeoffs,
    "realtime-collab-lessons": RealtimeCollabLessons,
} as const;

type BlogPostPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((item) => item.slug === slug);

    if (!post) {
        notFound();
    }

    const Content = postComponents[post.slug];

    return (
        <main className="min-h-screen bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
            <article className="prose prose-invert prose-violet mx-auto max-w-3xl rounded-3xl border border-violet-400/20 bg-zinc-900/90 p-6 sm:p-10">
                <div className="mb-6 text-xs text-zinc-500">
                    {post.publishedAt} • {post.readTime}
                </div>
                <Content />
            </article>
        </main>
    );
}
