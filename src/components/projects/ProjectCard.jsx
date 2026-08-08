import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { hashString } from "../../lib/utils";

/**
 * Procedural abstract cover art, seeded from the project slug.
 * We don't have real product screenshots for every project yet, so rather
 * than faking one, each project gets a distinct faceted panel pattern in
 * the same charcoal / pink-hairline language as the hero visual.
 */
export function ProjectCover({ seed, className = "" }) {
  const h = hashString(seed);
  const points = [];
  for (let i = 0; i < 5; i++) {
    const x = 20 + ((h * (i + 3) * 37) % 280);
    const y = 20 + ((h * (i + 7) * 53) % 160);
    points.push([x, y]);
  }

  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden="true" preserveAspectRatio="none">
      <rect width="320" height="200" fill="#0c0c0e" />
      <polygon
        points={points.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke="#ef3d6e"
        strokeOpacity="0.55"
        strokeWidth="1.2"
      />
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i === 0 ? 3 : 2} fill={i === 0 ? "#ef3d6e" : "#5c5c62"} />
      ))}
      <line x1="0" y1="0" x2="320" y2="200" stroke="#1c1c1f" strokeWidth="1" />
      <line x1="320" y1="0" x2="0" y2="200" stroke="#1c1c1f" strokeWidth="1" />
    </svg>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="relative"
    >
      <Link
        to={`/work/${project.slug}`}
        className="group block border border-border hover:border-pink/40 transition-colors duration-300"
      >
        <div className="relative overflow-hidden aspect-[16/10] border-b border-border">
          <span className="absolute left-4 top-4 z-10 font-mono text-xs text-pink-soft">
            /{String(index + 1).padStart(2, "0")}
          </span>
          <ProjectCover
            seed={project.slug}
            className="w-full h-full transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="p-6 pb-7">
          <h3 className="font-display text-[19px] uppercase">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {project.technologies.slice(0, 3).map((t) => (
              <span key={t} className="font-mono text-[11px] text-ink-faint">
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-pink/60 bg-bg text-pink transition-colors group-hover:bg-pink group-hover:text-bg">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
}
