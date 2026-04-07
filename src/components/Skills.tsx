export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Shadcn UI",
                "TanStack Query",
                "TanStack Form",
            ],
        },
        {
            title: "Backend Development",
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
            title: "Auth, Tools & Architecture",
            skills: [
                "BetterAuth",
                "JWT & Session",
                "RBAC",
                "Stripe Integration",
                "Cloudinary",
                "Multer",
                "Git & GitHub",
            ],
        },
    ];

    return (
        <section id="skills" className="border-t border-gray-200 bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Technical <span className="text-blue-600">Skills</span>
                    </h2>
                    <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-blue-600"></div>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Technologies and tools I use to build robust and scalable
                        applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <h3 className="mb-6 border-b pb-4 text-center text-xl font-bold text-gray-900">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="cursor-default rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
