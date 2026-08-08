import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "../common/SocialIcons";
import { initials } from "../../lib/utils";

export function FounderAvatar({ name, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center bg-surface ${className}`}
    >
      <span className="font-display text-3xl text-pink">
        {initials(name)}
      </span>
    </div>
  );
}

export default function FounderCard({ founder, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border border-border overflow-hidden group hover:border-pink/40 transition-colors duration-300"
    >
      <FounderAvatar name={founder.name} className="aspect-square w-full border-b border-border" />
      <div className="p-5">
        <h3 className="font-display text-[16px] uppercase">{founder.name}</h3>
        <p className="mt-1 text-sm text-ink-soft">{founder.role}</p>
        <div className="mt-4 flex items-center gap-3">
          {founder.github && founder.github !== "#" ? (
            <a
              href={founder.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${founder.name} on GitHub`}
              className="text-ink-faint hover:text-pink transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          ) : null}
          {founder.linkedin && founder.linkedin !== "#" ? (
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${founder.name} on LinkedIn`}
              className="text-ink-faint hover:text-pink transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
