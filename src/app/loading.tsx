export default function Loading() {
  return (
    <div className="fixed inset-0 z-110 grid place-items-center bg-zinc-950/80 backdrop-blur-sm">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-violet-300/40 border-t-violet-300" />
    </div>
  );
}
