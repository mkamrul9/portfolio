export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-800 bg-zinc-950 py-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:px-8">
                <div className="text-2xl font-bold text-cyan-400">KI.</div>

                <p className="text-center text-sm text-zinc-400 md:text-left">
                    &copy; {currentYear} Kamrul Islam. All rights reserved.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href="https://github.com/mkamrul9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-cyan-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-kamrul-islam9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-cyan-300"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://leetcode.com/u/Kamrul19/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-cyan-300"
                    >
                        LeetCode
                    </a>
                    <a
                        href="https://codeforces.com/profile/blue9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-cyan-300"
                    >
                        Codeforces
                    </a>
                    <a
                        href="https://www.npmjs.com/package/streamshare-cli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-cyan-300"
                    >
                        streamshare-cli
                    </a>
                </div>
            </div>
        </footer>
    );
}
