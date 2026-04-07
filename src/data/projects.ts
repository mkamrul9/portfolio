export type Project = {
    id: number;
    name: string;
    image: string;
    description: string;
    techStack: string[];
    liveLink: string;
    githubLink: string;
    challenges: string;
    futurePlans: string;
};

export const projectData: Project[] = [
    {
        id: 1,
        name: "Funding Panda",
        image: "/fp.png",
        description:
            "A comprehensive full-stack crowdfunding platform with secure payments, real-time updates, and role-based access control.",
        techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Zod",
            "PostgreSQL",
            "Prisma",
            "BetterAuth",
            "RBAC",
            "JWT",
            "Session",
            "Socket.io",
            "Stripe",
            "Cloudinary",
            "Multer",
            "Tailwind",
            "Shadcn",
            "TanStack Query",
            "TanStack Form",
            "Axios",
        ],
        liveLink: "https://funding-panda-frontend.vercel.app/",
        githubLink: "https://github.com/mkamrul9/fundingPanda-frontend",
        challenges:
            "Handling real-time secure socket connections for immediate funding updates and properly integrating Stripe webhooks securely with the backend architecture.",
        futurePlans:
            "Implement a more robust analytics dashboard for campaign creators and integrate an AI-driven recommendation system for donors.",
    },
    {
        id: 2,
        name: "SkillBridge",
        image: "/sb.png",
        description:
            "An educational platform bridging the gap between learners and mentors, featuring secure authentication and robust data handling.",
        techStack: [
            "Next.js App Router",
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "BetterAuth",
            "RBAC",
            "Native Fetch API",
            "TanStack Form",
            "Tailwind",
            "Shadcn",
        ],
        liveLink: "https://skillbridge-frontend-phi.vercel.app/",
        githubLink: "https://github.com/mkamrul9/SkillBridge-frontend",
        challenges:
            "Designing a flexible and secure Role-Based Access Control (RBAC) system from scratch and optimizing data fetching strategies using the native Fetch API.",
        futurePlans:
            "Add in-app video conferencing for mentoring sessions and a comprehensive certification generation module.",
    },
    {
        id: 3,
        name: "KanbanSync",
        image: "/ks.png",
        description:
            "A real-time collaborative Kanban board built by a 2-person team, designed to streamline project management and task synchronization.",
        techStack: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express.js",
            "WebSockets",
            "Prisma",
            "Tailwind CSS",
            "PostgreSQL",
        ],
        liveLink: "https://kanbansync-pc3d.onrender.com/",
        githubLink: "https://github.com/mkamrul9/KanbanSync",
        challenges:
            "Ensuring optimistic UI updates without data tearing when multiple users edited the same Kanban column simultaneously.",
        futurePlans:
            "Develop a mobile-native version and integrate third-party calendar applications like Google Calendar.",
    },
];
