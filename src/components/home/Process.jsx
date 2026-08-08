import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Scope",
    text: "We start by understanding the actual problem — not the feature list. Clear scope, honest timelines, no padding.",
  },
  {
    n: "02",
    title: "Design & Architect",
    text: "System design and interface design happen together, so the product is coherent from the database up to the UI.",
  },
  {
    n: "03",
    title: "Build",
    text: "Iterative development with visible progress. You see working software early, not a single delivery at the end.",
  },
  {
    n: "04",
    title: "Ship & Support",
    text: "We deploy, monitor, and stay involved after launch — fixing issues and supporting the next iteration.",
  },
];

export default function Process() {
  return (
    <section className="section-pad border-t border-border bg-bg-raised">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A straightforward process, run by the people doing the work."
        />

        <div className="mt-16 grid md:grid-cols-4 gap-10 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="font-display text-pink text-2xl">{step.n}</span>
              <h3 className="mt-3 font-display text-[18px] uppercase">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-2.5 -right-3 w-6 h-px bg-border-strong" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
