export default function BlogPostLoading() {
    return (
        <div className="min-h-screen bg-zinc-950 px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl animate-pulse rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
                <div className="mb-4 h-3 w-32 rounded bg-zinc-700" />
                <div className="mb-3 h-8 w-4/5 rounded bg-zinc-700" />
                <div className="h-4 w-full rounded bg-zinc-800" />
            </div>
        </div>
    );
}
