export default function ProjectDetailsLoading() {
    return (
        <div className="min-h-screen bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl animate-pulse rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
                <div className="mb-6 h-4 w-28 rounded bg-zinc-700" />
                <div className="mb-4 h-8 w-2/3 rounded bg-zinc-700" />
                <div className="mb-6 h-4 w-full rounded bg-zinc-800" />
                <div className="h-72 rounded-2xl bg-zinc-800" />
            </div>
        </div>
    );
}
