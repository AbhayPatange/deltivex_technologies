import { motion } from "framer-motion";
import { ShieldCheck, GitBranch, MessageSquare, Gauge } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Direct access to the people building",
    text: "No account managers relaying messages. You talk to the engineers actually writing the code.",
  },
  {
    icon: GitBranch,
    title: "Clean, maintainable architecture",
    text: "We build systems you or your future team can extend — documented, structured, not held together by shortcuts.",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    text: "Regular updates, honest timelines, and no disappearing between milestones.",
  },
  {
    icon: Gauge,
    title: "Practical, not trend-chasing",
    text: "We reach for AI and automation when they solve a real problem — not because they're fashionable.",
  },
];

export default function WhyDeltivex() {
  return (
    <section className="section-pad border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="Why deltivex"
          title="What working with a small technical team actually looks like."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="shrink-0 h-11 w-11 rounded-full border border-pink/50 flex items-center justify-center">
                <reason.icon className="h-5 w-5 text-pink" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-[16px] uppercase leading-snug">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{reason.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
