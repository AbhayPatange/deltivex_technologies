import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

/**
 * Signature hero visual: a faceted, wireframe crystal — echoing the
 * angular cut of the Deltivex mark — built from dark chamfered panels
 * with pink hairline edges. Framed with technical annotation (object
 * tag, crosshairs, dashed guides) rather than a literal illustration.
 */
function HeroGraphic() {
  const reduced = usePrefersReducedMotion();

  return (
    <svg viewBox="0 0 560 620" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="hero-panel" x1="80" y1="60" x2="480" y2="560" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1c1c1f" />
          <stop offset="1" stopColor="#0a0a0b" />
        </linearGradient>
      </defs>

      {/* faint crosshair guides */}
      <g stroke="#2a2a2e" strokeWidth="1">
        <line x1="130" y1="0" x2="130" y2="620" />
        <line x1="0" y1="200" x2="560" y2="200" />
      </g>
      <g stroke="#3a3a40" strokeWidth="1" strokeDasharray="2 6">
        <line x1="420" y1="0" x2="420" y2="620" />
      </g>

      {/* main faceted panel */}
      <path
        d="M120 90 L340 60 L470 190 L470 380 L360 500 L150 520 L60 400 L60 210 Z"
        fill="url(#hero-panel)"
        stroke="#ef3d6e"
        strokeWidth="1.4"
      />
      {/* internal facet lines */}
      <g stroke="#ef3d6e" strokeOpacity="0.55" strokeWidth="1">
        <line x1="120" y1="90" x2="360" y2="500" />
        <line x1="470" y1="190" x2="150" y2="520" />
        <line x1="60" y1="210" x2="470" y2="380" />
      </g>
      <g stroke="#3a3a40" strokeWidth="1">
        <line x1="340" y1="60" x2="360" y2="500" />
        <line x1="120" y1="90" x2="60" y2="400" />
      </g>

      {/* secondary outline panel, offset */}
      <path
        d="M330 340 L440 320 L500 400 L470 500 L370 540 L300 470 Z"
        fill="none"
        stroke="#3a3a40"
        strokeWidth="1.2"
        strokeDasharray="3 5"
      />

      {/* joints */}
      <circle cx="120" cy="90" r="4" fill="#ef3d6e" className={reduced ? "" : "animate-pulse-node"} />
      <circle cx="470" cy="190" r="3" fill="#5c5c62" />
      <circle cx="150" cy="520" r="4" fill="#ef3d6e" className={reduced ? "" : "animate-pulse-node"} style={{ animationDelay: "1.1s" }} />
      <circle cx="60" cy="210" r="2.5" fill="#5c5c62" />

      {/* crosshair marks */}
      {[[130, 40], [500, 560], [40, 560]].map(([cx, cy], i) => (
        <g key={i} stroke="#5c5c62" strokeWidth="1">
          <line x1={cx - 7} y1={cy} x2={cx + 7} y2={cy} />
          <line x1={cx} y1={cy - 7} x2={cx} y2={cy + 7} />
        </g>
      ))}
    </svg>
  );
}

/**
 * Full-bleed background video. Muted + playsInline so mobile browsers
 * allow autoplay. Paused entirely for prefers-reduced-motion. A dark
 * scrim sits on top so hero text stays readable over the footage.
 */
function HeroVideo() {
  const videoRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (reduced) {
      el.pause();
    } else {
      el.play().catch(() => {
        // Autoplay can still be blocked by some browsers — fine,
        // the first frame just stays put in that case.
      });
    }
  }, [reduced]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/videos/hero-loop.mp4"
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      {/* Scrim: darkens the footage so text stays readable */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background video + scrim */}
      <HeroVideo />
      {/* Signal wash, top right */}
      <div className="pointer-events-none absolute -right-40 -top-40 z-[1] h-[520px] w-[520px] rounded-full bg-[#FF2E63]/[0.06] blur-3xl" />

      <Container className="relative z-10 grid items-center gap-16 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#5a81b3]"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[#5a81b3]"
              animate={{ opacity: [1, 0.25, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            SYS.03 — Software · AI · Automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-[54px] font-medium leading-[1] tracking-wider text-ink sm:text-[72px] lg:text-[88px]"
          >
            <span className="block text-stone-300">We Build</span>

            <span className="relative inline-block text-[#FF2E63]">
              Software
            </span>

            <span className="block text-stone-300">That</span>

            <span className="block text-[#5a81b3]">Matters.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-9 max-w-xl text-[15px] leading-7 text-ink-soft"
          >
            Deltivex is a product engineering studio. We're a small,
            technical team building web applications, AI systems, and
            automation for businesses that need real engineering — not just
            a polished pitch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Button to="/contact" size="lg">
              Start a Project
            </Button>

            <Button to="/work" variant="ghost" icon={true}>
              Explore Our Work
            </Button>
          </motion.div>

          {/* Ruler-style credibility strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex items-center gap-4"
          >
            <svg width="56" height="10" viewBox="0 0 56 10" className="text-[#FF2E63]">
              <line x1="0" y1="5" x2="56" y2="5" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1" />
              <line x1="28" y1="2.5" x2="28" y2="7.5" stroke="currentColor" strokeWidth="1" />
              <line x1="56" y1="0" x2="56" y2="10" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Built for what comes next
            </span>
          </motion.div>
        </div>

        {/* RIGHT — blueprint / schematic panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative hidden aspect-[560/620] sm:block"
        >
          {/* Panel border */}
          <div className="absolute inset-6 border border-ink/10" />

          {/* Corner brackets */}
          {[
            "left-0 top-0 border-l border-t",
            "right-0 top-0 border-r border-t",
            "left-0 bottom-0 border-l border-b",
            "right-0 bottom-0 border-r border-b",
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute h-4 w-4 border-[#FF2E63] ${pos}`}
            />
          ))}

          {/* Center crosshair marker, pulsing */}
          <motion.div
            className="absolute left-1/2 top-1/2 z-10 -ml-1.5 -mt-1.5 h-3 w-3 bg-[#FF2E63]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2 bg-ink/[0.08]" />
          <div className="absolute top-1/2 left-6 right-6 h-px -translate-y-1/2 bg-ink/[0.08]" />

          {/* Object label, top right */}
          <div className="absolute right-0 top-0 text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Object
            </p>
            <p className="font-display text-lg tracking-wide text-[#FF2E63]">
              DX-01
            </p>
          </div>

          {/* Coordinate label, top left */}
          <p className="absolute left-6 top-2 font-mono text-[10px] text-ink-soft">
            X:24 Y:24
          </p>

          {/* Bottom label */}
          <div className="absolute bottom-6 right-0 text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
              Building
            </p>
            <p className="font-display text-lg tracking-wide text-ink">
              What's Next
            </p>
          </div>

          {/* Scale label, bottom left */}
          <p className="absolute bottom-2 left-6 font-mono text-[10px] text-ink-soft">
            SCALE 1:1
          </p>

          {/* Graphic */}
          <div className="relative h-full w-full">
            <HeroGraphic />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}