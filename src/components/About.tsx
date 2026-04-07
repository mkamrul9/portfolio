import type { ReactNode } from "react";
import { BookOpen, Code, Coffee, Sprout } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        About <span className="text-blue-600">Me</span>
                    </h2>
                    <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-blue-600"></div>
                </div>

                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                        <p>
                            Hello! My programming journey started with a deep curiosity
                            about how things work on the web. Today, I am an
                            8th-semester, 4th-year student at <strong>Rajshahi
                            University of Engineering and Technology (RUET)</strong>,
                            studying Electrical &amp; Computer Engineering (ECE).
                        </p>
                        <p>
                            I thrive in full-stack development, particularly enjoying the
                            challenge of building scalable backends and seamless,
                            interactive frontends. Whether it&apos;s architecting a database
                            with PostgreSQL and Prisma or crafting UI components with
                            Next.js and Tailwind, I love turning complex logic into
                            user-friendly applications.
                        </p>
                        <p>
                            When I&apos;m not writing code or studying for my ECE courses,
                            you can usually find me on the <strong>football</strong>
                            field enjoying a good match, or tending to my <strong>
                            rooftop garden</strong>, where I grow a variety of plants
                            and find a great sense of peace.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <InfoCard
                            icon={<BookOpen className="text-blue-600" size={32} />}
                            title="Education"
                            desc="B.Sc in ECE, RUET (4th Year, 8th Semester)"
                        />
                        <InfoCard
                            icon={<Code className="text-blue-600" size={32} />}
                            title="Focus"
                            desc="Full Stack Web Development & System Design"
                        />
                        <InfoCard
                            icon={<Sprout className="text-blue-600" size={32} />}
                            title="Hobbies"
                            desc="Rooftop Gardening & Plant Care"
                        />
                        <InfoCard
                            icon={<Coffee className="text-blue-600" size={32} />}
                            title="Interests"
                            desc="Football & Open Source Contribution"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function InfoCard({
    icon,
    title,
    desc,
}: {
    icon: ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-blue-100 hover:shadow-lg">
            <div className="origin-left mb-4 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}
