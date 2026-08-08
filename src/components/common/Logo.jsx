export default function Logo({
  className = "h-8 w-8",
  withWordmark = true,
  wordmarkClassName = "",
}) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/deltivex_logo.svg"
        alt="Deltivex logo"
        className={className}
      />

      {withWordmark && (
        <span
          className={`font-display font-bold uppercase tracking-[0.12em] text-[22px] leading-none ${wordmarkClassName}`}
        >
          <span className="text-[#fefeff]">DELTIVE</span>
          <span
            className="bg-gradient-to-br from-[#0d597c] via-[#087BEF] to-[#5B18D6] bg-clip-text text-transparent"
          >
            X
          </span>
        </span>
      )}
    </div>
  );
}