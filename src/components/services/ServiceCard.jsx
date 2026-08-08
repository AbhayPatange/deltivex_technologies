import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { serviceIcon } from "../../lib/serviceIcons";

export default function ServiceCard({ service, index = 0, reverse = false }) {
  const Icon = serviceIcon(service.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.05 }}
      id={service.id}
      className={`grid md:grid-cols-2 gap-10 items-center py-14 ${
        index > 0 ? "border-t border-border" : ""
      }`}
    >
      <div className={reverse ? "md:order-2" : ""}>
        <div className="flex items-center gap-4">
          <span className="font-display text-pink text-2xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="h-11 w-11 rounded-full border border-pink/50 flex items-center justify-center">
            <Icon className="h-5 w-5 text-pink" strokeWidth={1.75} />
          </div>
        </div>
        <h2 className="mt-6 font-display text-[26px] uppercase">{service.name}</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{service.description}</p>
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <div className="border border-border p-6">
          <p className="eyebrow mb-4">What this includes</p>
          <ul className="space-y-3">
            {service.valuePoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-ink-soft">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-pink" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
