import { motion } from "framer-motion";
import { LinkedinIcon } from "../common/SocialIcons";

export function FounderAvatar({ name, photo, className = "" }) {
  return (
    <div className={`overflow-hidden bg-surface ${className}`}>
      <img
        src={`/founders/${photo}.jpg`}
        alt={`${name} - Deltivex founder`}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
      />
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
      <FounderAvatar
        name={founder.name}
        photo={founder.photo}
        className="aspect-[4/5]"
      />

      <div className="p-6">
        <h3 className="font-display text-[18px] uppercase">
          {founder.name}
        </h3>

        {founder.linkedin && founder.linkedin !== "#" ? (
          <a
            href={founder.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-[14px] text-ink-soft hover:text-pink transition-colors"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
            <span>↗</span>
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}