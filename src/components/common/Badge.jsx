import { cn } from "../../lib/utils";

const styles = {
  default: "border-border-strong text-ink-soft",
  pink: "border-pink/40 text-pink-soft",
};

export default function Badge({ children, variant = "default", className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide uppercase",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
