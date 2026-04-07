export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-800 bg-gray-900 py-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:px-8">
                <div className="text-2xl font-bold text-white">KI.</div>

                <p className="text-center text-sm text-gray-400 md:text-left">
                    &copy; {currentYear} Kamrul Islam. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a
                        href="https://github.com/mkamrul9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors hover:text-white"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-kamrul-islam9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors hover:text-white"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
