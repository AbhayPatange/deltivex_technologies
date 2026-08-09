import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { hashString } from "../../lib/utils";

/**
 * Procedural abstract cover art, seeded from the project slug.
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
    <div
      className={`relative aspect-[16/9] shrink-0 overflow-hidden bg-surface ${className}`}
    >
      <svg
        viewBox="0 0 320 200"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <polygon
          points={points.map((p) => p.join(",")).join(" ")}
          fill="none"
          stroke="#ef3d6e"
          strokeOpacity="0.55"
          strokeWidth="1.2"
        />

        {points.map((p, i) => (
          <circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r={i === 0 ? 3 : 2}
            fill={i === 0 ? "#ef3d6e" : "#5c5c62"}
          />
        ))}
      </svg>
    </div>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  const hasDemo = project.demo && project.demo !== "#";

  const cardContent = (
    <>
      <ProjectCover seed={project.slug} />

      <div className="flex flex-1 flex-col p-6">
        {/* Project number */}
        <div className="text-[13px] text-ink-faint">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Project title */}
        <h2 className="mt-4 font-display text-[20px] uppercase tracking-wide">
          {project.name}
        </h2>

        {/* Project tagline */}
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          {project.tagline}
        </p>

        {/* Push technologies + arrow to bottom */}
        <div className="mt-auto pt-6 flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="border border-border px-2.5 py-1 text-xs text-ink-faint"
              >
                {technology}
              </span>
            ))}
          </div>

          {hasDemo && (
            <span
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                border border-pink
                text-pink
                transition-all duration-300
                group-hover:bg-pink
                group-hover:text-white
              "
              aria-hidden="true"
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
      }}
      className="h-full"
    >
      {hasDemo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="
            group flex h-full flex-col
            border border-border
            hover:border-pink/40
            transition-colors duration-300
          "
          aria-label={`View ${project.name} live demo`}
        >
          {cardContent}
        </a>
      ) : (
        <Link
          to={`/work/${project.slug}`}
          className="
            group flex h-full flex-col
            border border-border
            hover:border-pink/40
            transition-colors duration-300
          "
        >
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
}