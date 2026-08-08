import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../common/SocialIcons";
import Badge from "../common/Badge";
import Button from "../common/Button";
import { ProjectCover } from "./ProjectCard";

export default function ProjectDetails({ project }) {
  const hasGithub = project.github && project.github !== "#";
  const hasDemo = project.demo && project.demo !== "#";

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge>{project.type}</Badge>
          <h1 className="mt-5 text-[34px] md:text-[46px] leading-[1] text-balance">
            {project.name}
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft text-balance">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {hasGithub && (
              <Button href={project.github} target="_blank" rel="noreferrer" variant="secondary" icon={false}>
                <GithubIcon className="h-4 w-4" />
                View code
              </Button>
            )}
            {hasDemo && (
              <Button href={project.demo} target="_blank" rel="noreferrer" icon={false}>
                <ExternalLink className="h-4 w-4" />
                Live demo
              </Button>
            )}
            {!hasGithub && !hasDemo && (
              <p className="font-mono text-xs text-ink-faint">
                Links coming soon.
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-hidden border border-border aspect-[16/10]"
        >
          <ProjectCover seed={project.slug} className="w-full h-full" />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 border-t border-border pt-12">
        <div>
          <h2 className="font-display text-[19px] uppercase">Problem</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{project.problem}</p>
        </div>
        <div>
          <h2 className="font-display text-[19px] uppercase">Solution</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{project.solution}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 border-t border-border mt-12 pt-12">
        <div>
          <h2 className="font-display text-[19px] uppercase">Key features</h2>
          <ul className="mt-4 space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="text-sm text-ink-soft pl-4 relative before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-pink">
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-[19px] uppercase">Technologies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <Badge key={t} variant="pink">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
