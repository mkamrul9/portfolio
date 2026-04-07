"use client";

import { motion } from "framer-motion";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Magic",
            skills: [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Shadcn UI",
                "TanStack Query",
                "Framer Motion",
            ],
        },
        {
            title: "Backend Power",
            skills: [
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Prisma ORM",
                "REST APIs",
                "Socket.io",
            ],
        },
        {
            title: "Architecture & Tools",
            skills: [
                "BetterAuth",
                "JWT & Session",
                "RBAC",
                "Stripe",
                "Cloudinary",
                "Docker",
                "Git & GitHub",
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="overflow-hidden border-t border-gray-200 bg-gray-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Technical{" "}
                        <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Arsenal
                        </span>
                    </h2>
                    <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-blue-600"></div>
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
                            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg shadow-gray-200/50"
                        >
                            <h3 className="mb-8 border-b border-gray-100 pb-4 text-center text-2xl font-bold text-gray-900">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: [-2, 2, -2, 0],
                                            backgroundColor: "#2563eb",
                                            color: "#ffffff",
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="cursor-pointer rounded-xl border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-bold text-blue-700 shadow-sm"
                                    >
                                        {skill}
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
