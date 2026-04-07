import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { projectData } from "@/data/projects";

type ProjectPageProps = {
    params: Promise<{ id: string }>;
};

export function generateStaticParams() {
    return projectData.map((project) => ({ id: String(project.id) }));
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
    const { id } = await params;
    const project = projectData.find((item) => String(item.id) === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl rounded-3xl border border-violet-400/25 bg-zinc-900/90 p-6 shadow-2xl shadow-violet-500/10 sm:p-10">
                <Link
                    href="/#projects"
                    className="mb-6 inline-flex rounded-full border border-violet-400/35 px-4 py-1.5 text-xs font-semibold tracking-wide text-violet-200 uppercase transition-colors hover:bg-violet-400/15"
                >
                    Back to Projects
                </Link>

                <h1 className="text-3xl font-extrabold text-zinc-100 sm:text-4xl">
                    {project.name}
                </h1>
                <p className="mt-4 text-zinc-300">{project.description}</p>

                <div className="relative mt-6 h-64 w-full overflow-hidden rounded-2xl border border-zinc-800 sm:h-80">
                    <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                    />
                </div>

                <section className="mt-8">
                    <h2 className="text-sm font-semibold tracking-wide text-zinc-100 uppercase">
                        Main Technology Stack
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-md border border-violet-400/35 bg-zinc-950 px-3 py-1 text-xs font-medium text-violet-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-violet-400/30 bg-violet-400/10 p-4">
                        <h3 className="text-sm font-semibold text-violet-200">Challenges Faced</h3>
                        <p className="mt-2 text-sm leading-relaxed text-violet-100/95">
                            {project.challenges}
                        </p>
                    </div>
                    <div className="rounded-xl border border-fuchsia-400/30 bg-fuchsia-400/10 p-4">
                        <h3 className="text-sm font-semibold text-fuchsia-200">Future Plans</h3>
                        <p className="mt-2 text-sm leading-relaxed text-fuchsia-100/95">
                            {project.futurePlans}
                        </p>
                    </div>
                </section>

                <section className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-400 px-5 py-3 font-semibold text-zinc-950 transition-colors hover:bg-violet-300"
                    >
                        <ExternalLink size={18} />
                        Live Project
                    </a>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-800 px-5 py-3 font-semibold text-zinc-100 transition-colors hover:bg-zinc-700"
                    >
                        <FolderGit2 size={18} />
                        Client Repository
                    </a>
                </section>
            </div>
        </main>
    );
}
