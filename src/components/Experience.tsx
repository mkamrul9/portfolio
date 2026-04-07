import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            role: "Open Source Contributor",
            company: "OWASP Foundation",
            duration: "Recent",
            description:
                "Contributed to the OWASP Bug Logging Tool (BLT). Actively worked in the 'blt core' and 'blt next' repositories, improving the tool's functionality, fixing bugs, and collaborating with the open-source community.",
        },
        {
            role: "Full Stack Developer",
            company: "Team Project (2-Person Team)",
            duration: "2026",
            description:
                "Co-developed KanbanSync, a collaborative Kanban board application. Managed full-stack responsibilities, ensuring seamless real-time data synchronization, robust architecture, and smooth deployment workflows.",
        },
    ];

    return (
        <section id="experience" className="bg-white py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Professional <span className="text-blue-600">Experience</span>
                    </h2>
                    <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-blue-600"></div>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <div key={exp.role} className="relative pl-8 md:pl-0">
                            <div className="group items-start justify-between rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-shadow hover:shadow-md md:flex">
                                <div className="flex-1">
                                    <div className="mb-2 flex items-center gap-2">
                                        <Briefcase className="text-blue-600" size={20} />
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {exp.role}
                                        </h3>
                                    </div>
                                    <h4 className="mb-4 text-lg font-medium text-blue-600">
                                        {exp.company}
                                    </h4>
                                    <p className="leading-relaxed text-gray-600">
                                        {exp.description}
                                    </p>
                                </div>
                                <div className="mt-4 ml-0 flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-500 md:mt-0 md:ml-6">
                                    <Calendar size={16} />
                                    {exp.duration}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
