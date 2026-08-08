import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "eyebrow-pink mb-4 inline-flex items-center gap-2",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-pink" />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-[32px] md:text-[44px] leading-[1.02] text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-[15px] leading-relaxed text-ink-soft text-balance normal-case font-sans"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
