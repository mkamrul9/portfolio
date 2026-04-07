import type { ReactNode } from "react";
import Link from "next/link";
import { Briefcase, Code, Download, FolderGit2, Users } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="flex min-h-screen items-center justify-center bg-gray-50 pt-20"
        >
            <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="mb-2 font-semibold tracking-wide text-blue-600 uppercase">
                        Welcome to my portfolio
                    </h2>
                    <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-6xl">
                        Hi, I&apos;m <span className="text-blue-600">Kamrul Islam</span>
                    </h1>
                    <h3 className="mb-6 text-2xl font-medium text-gray-700 md:text-3xl">
                        Full Stack Developer
                    </h3>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:mx-0">
                        I build robust, scalable, and user-centric web applications. Passionate
                        about solving complex problems and turning innovative ideas into
                        reality.
                    </p>

                    <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                        <a
                            href="/Kamrul_Islam_Resume.pdf"
                            download="Kamrul_Islam_Resume.pdf"
                            className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 font-medium text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>
                        <Link
                            href="#contact"
                            className="rounded-full border-2 border-gray-300 px-8 py-3 font-medium text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-5 md:justify-start">
                        <SocialIcon
                            href="https://github.com/mkamrul9"
                            icon={<FolderGit2 />}
                            ariaLabel="GitHub"
                        />
                        <SocialIcon
                            href="https://www.linkedin.com/in/md-kamrul-islam9"
                            icon={<Briefcase />}
                            ariaLabel="LinkedIn"
                        />
                        <SocialIcon
                            href="https://leetcode.com/u/Kamrul19/"
                            icon={<Code />}
                            ariaLabel="LeetCode"
                        />
                        <SocialIcon
                            href="https://www.facebook.com/kamrul.islam.648172/"
                            icon={<Users />}
                            ariaLabel="Facebook"
                        />
                    </div>
                </div>

                <div className="flex flex-1 justify-center md:justify-end">
                    <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl md:h-80 md:w-80">
                        <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-400">
                            <span>[Profile Image Placeholder]</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialIcon({
    href,
    icon,
    ariaLabel,
}: {
    href: string;
    icon: ReactNode;
    ariaLabel: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="rounded-full bg-white p-3 text-gray-600 shadow-md transition-all duration-300 hover:-translate-y-1 hover:text-blue-600"
        >
            {icon}
        </a>
    );
}
