export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg">
      <div className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink" />
        </span>
        <span className="font-mono text-xs tracking-widest text-ink-soft uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}
