import { motion } from "framer-motion";
import { Code2, Sparkles, Blocks, Workflow, ServerCog, Cloud } from "lucide-react";
import Container from "../common/Container";
import { services } from "../../data/services";

const ICONS = { Code2, Sparkles, Blocks, Workflow, ServerCog, Cloud };

function CornerBrackets() {
  return (
    <>
      {[
        "left-0 top-0 border-l border-t",
        "right-0 top-0 border-r border-t",
        "left-0 bottom-0 border-l border-b",
        "right-0 bottom-0 border-r border-b",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute h-3 w-3 border-[#ef3d6e]/0 transition-colors duration-300 group-hover:border-[#ef3d6e]/70 ${pos}`}
        />
      ))}
    </>
  );
}

/**
 * Decorative header schematic: a thin connector line with six nodes,
 * one per capability below it, plus a slow-traveling pulse. Ties the
 * grid of cards back to a single system, the way a circuit trace
 * would — visual, not just six unrelated boxes.
 */
function ConnectorRail() {
  return (
    <div className="relative mt-14 hidden h-10 items-center sm:flex">
      <svg viewBox="0 0 1200 40" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="20" x2="1200" y2="20" stroke="#292929" strokeWidth="1" />
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const x = 40 + i * ((1200 - 80) / 5);
          return (
            <g key={i}>
              <line x1={x} y1="12" x2={x} y2="28" stroke="#3a3a40" strokeWidth="1" />
              <circle cx={x} cy="20" r="3" fill="#ef3d6e" fillOpacity="0.7" />
            </g>
          );
        })}
        <motion.circle
          r="4"
          fill="#ef3d6e"
          initial={{ cx: 0, cy: 20, opacity: 0 }}
          whileInView={{
            cx: [0, 1200],
            opacity: [0, 1, 1, 0],
          }}
          viewport={{ once: true }}
          transition={{ duration: 3.2, ease: "easeInOut", delay: 0.4 }}
        />
      </svg>
    </div>
  );
}

export default function Solutions() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0b] py-24 lg:py-32">
      {/* Faint engineering dot-grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(#2a2a2e 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Signal washes for depth */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#ef3d6e]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#5a81b3]/[0.05] blur-3xl" />

      {/* Margin coordinate labels, purely atmospheric */}
      <p className="pointer-events-none absolute left-4 top-8 hidden font-mono text-[10px] text-stone-700 lg:block">
        SEC.02 / CAPABILITIES
      </p>
      <p className="pointer-events-none absolute bottom-8 right-4 hidden font-mono text-[10px] text-stone-700 lg:block">
        N=6
      </p>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 inline-flex items-center gap-3 border border-[#ef3d6e]/20 bg-[#ef3d6e]/[0.06] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#ef3d6e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ef3d6e]" />
            SYS.04 — What we do
          </div>
          <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-wider text-stone-100 sm:text-4xl">
            Software, AI, and infrastructure — one team.
          </h2>
          <p className="mt-5 max-w-xl text-[14px] leading-6 text-stone-400">
            Six focused capabilities. No outsourced pieces, no hand-offs
            between agencies — the same team that scopes the work builds
            and ships it.
          </p>
        </motion.div>

        {/* Connector rail, visually ties the six cards to one system */}
        <ConnectorRail />

        <div className="mt-4 grid gap-px bg-stone-800 sm:grid-cols-2 sm:mt-8 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden bg-[#0a0a0b] p-8 transition-colors duration-300 hover:bg-[#0f0f11]"
              >
                <CornerBrackets />

                {/* Oversized background index numeral */}
                <span
                  className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[110px] leading-none text-stone-100 opacity-[0.025] transition-opacity duration-300 group-hover:opacity-[0.05]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ef3d6e]">
                    CAP.{String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon panel with glow halo on hover */}
                  <div className="relative flex h-10 w-10 items-center justify-center border border-stone-800 text-[#ef3d6e] transition-colors duration-300 group-hover:border-[#ef3d6e]/50">
                    <div className="pointer-events-none absolute inset-0 scale-0 rounded-full bg-[#ef3d6e]/10 blur-md transition-transform duration-300 group-hover:scale-150" />
                    <Icon size={17} strokeWidth={1.75} className="relative" />
                  </div>
                </div>

                <h3 className="relative mt-6 font-display text-lg text-stone-100">
                  {service.name}
                </h3>
                <p className="relative mt-3 max-w-[92%] text-[13px] leading-6 text-stone-400">
                  {service.short}
                </p>

                {/* Underline that draws in on hover — reinforces the "trace" motif */}
                <div className="relative mt-6 h-px w-full bg-stone-800">
                  <motion.div
                    className="h-px bg-[#ef3d6e]"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}