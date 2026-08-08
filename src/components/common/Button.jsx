import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

const variants = {
  primary: "border border-pink/70 text-ink hover:border-pink",
  secondary: "border border-border-strong text-ink hover:border-pink/60",
  ghost: "border-none text-ink-soft hover:text-ink pl-0 pr-0",
};

const sizes = {
  md: "h-11 text-[13px]",
  lg: "h-[52px] text-sm",
};

const Button = forwardRef(
  (
    {
      href,
      to,
      variant = "primary",
      size = "md",
      icon = true,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const isGhost = variant === "ghost";
    const classes = cn(
      "group inline-flex items-center justify-center gap-4 rounded-full font-semibold uppercase tracking-[0.1em] transition-all duration-200 whitespace-nowrap",
      "focus-visible:outline-2 focus-visible:outline-pink focus-visible:outline-offset-2",
      variants[variant],
      !isGhost && sizes[size],
      !isGhost && (icon ? "pl-6 pr-1.5" : "px-6"),
      className
    );

    const iconWrap = icon && !isGhost && (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink text-bg transition-transform duration-200 group-hover:translate-x-0.5">
        <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
      </span>
    );

    const iconGhost = icon && isGhost && (
      <ArrowRight
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        strokeWidth={2}
      />
    );

    const content = (
      <>
        {children}
        {iconWrap}
        {iconGhost}
      </>
    );

    if (to) {
      return (
        <Link ref={ref} to={to} className={classes} {...props}>
          {content}
        </Link>
      );
    }

    if (href) {
      return (
        <a ref={ref} href={href} className={classes} {...props}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
