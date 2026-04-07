"use client";

import { motion } from "framer-motion";
import {
    SiAxios,
    SiBetterauth,
    SiCloudinary,
    SiDocker,
    SiExpress,
    SiFastapi,
    SiFramer,
    SiGit,
    SiGithub,
    SiJsonwebtokens,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiReact,
    SiShadcnui,
    SiSocketdotio,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
    SiZod,
} from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa6";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Magic",
            skills: [
                { name: "React.js", icon: SiReact },
                { name: "Next.js", icon: SiNextdotjs },
                { name: "TypeScript", icon: SiTypescript },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "Shadcn UI", icon: SiShadcnui },
                { name: "TanStack Query", icon: FaLayerGroup },
                { name: "Framer Motion", icon: SiFramer },
            ],
        },
        {
            title: "Backend Power",
            skills: [
                { name: "Node.js", icon: SiNodedotjs },
                { name: "Express.js", icon: SiExpress },
                { name: "FastAPI", icon: SiFastapi },
                { name: "Python", icon: SiPython },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "MongoDB", icon: SiMongodb },
                { name: "Prisma ORM", icon: SiPrisma },
                { name: "BetterAuth", icon: SiBetterauth },
                { name: "Zod", icon: SiZod },
                { name: "Socket.io", icon: SiSocketdotio },
                { name: "WebRTC", icon: FaLayerGroup },
            ],
        },
        {
            title: "Architecture & Tools",
            skills: [
                { name: "JWT", icon: SiJsonwebtokens },
                { name: "Stripe", icon: SiStripe },
                { name: "Cloudinary", icon: SiCloudinary },
                { name: "Docker", icon: SiDocker },
                { name: "Git", icon: SiGit },
                { name: "GitHub", icon: SiGithub },
                { name: "Axios", icon: SiAxios },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 py-24"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(192,132,252,0.2),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(232,121,249,0.16),transparent_36%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(161,161,170,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(161,161,170,0.12)_1px,transparent_1px)] bg-size-[36px_36px] opacity-25" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl">
                        Technical{" "}
                        <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Arsenal
                        </span>
                    </h2>
                    <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-violet-400"></div>
                </motion.div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg shadow-black/40"
                        >
                            <h3 className="mb-8 border-b border-zinc-800 pb-4 text-center text-2xl font-bold text-zinc-100">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill.name}
                                        whileHover={{
                                            scale: 1.08,
                                            rotate: 2,
                                            backgroundColor: "#c084fc",
                                            color: "#09090b",
                                        }}
                                        transition={{ type: "tween", duration: 0.18 }}
                                        className="flex cursor-pointer items-center gap-2 rounded-xl border border-violet-400/30 bg-zinc-800 px-4 py-2.5 text-sm font-bold text-violet-300 shadow-sm"
                                    >
                                        <skill.icon size={14} />
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
