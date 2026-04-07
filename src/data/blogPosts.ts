export type BlogPostMeta = {
    slug: "system-design-tradeoffs" | "realtime-collab-lessons";
    title: string;
    summary: string;
    publishedAt: string;
    readTime: string;
    tags: string[];
};

export const blogPosts: BlogPostMeta[] = [
    {
        slug: "system-design-tradeoffs",
        title: "System Design Tradeoffs I Use In Real Projects",
        summary:
            "How I balance scalability, developer speed, and maintainability when building full-stack products.",
        publishedAt: "2026-04-01",
        readTime: "5 min",
        tags: ["System Design", "Architecture", "Backend"],
    },
    {
        slug: "realtime-collab-lessons",
        title: "Realtime Collaboration Lessons from KanbanSync",
        summary:
            "Practical lessons about optimistic updates, socket event design, and keeping UX smooth under concurrency.",
        publishedAt: "2026-04-04",
        readTime: "6 min",
        tags: ["WebSocket", "Realtime", "Frontend"],
    },
];
