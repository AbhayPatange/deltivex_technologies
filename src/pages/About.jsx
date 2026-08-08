import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import FounderGrid from "../components/team/FounderGrid";
import CTA from "../components/home/CTA";
import { founders } from "../data/founders";

const pillars = [
  {
    title: "Why we started",
    text: "We kept seeing the same gap: businesses needing real software or AI capability, and options that were either too generic (templates, no-code tools) or too expensive (large agencies with heavy overhead). Deltivex exists to sit in between — a small team that can move fast and still build things properly.",
  },
  {
    title: "Mission",
    text: "Build practical software and AI systems that solve specific business problems — without the padding, the buzzwords, or the bloated process that usually comes with hiring a larger firm.",
  },
  {
    title: "Vision",
    text: "To grow into a technology partner that businesses trust with their core systems — not because of scale, but because of consistently good engineering and honest communication.",
  },
  {
    title: "Engineering philosophy",
    text: "Simple systems are easier to trust than clever ones. We favor clear architecture, readable code, and decisions we can explain — over frameworks and patterns chosen for their own sake.",
  },
];

export default function About() {
  return (
    <>
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow-pink mb-5 inline-flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pink" />
            About Deltivex
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[36px] sm:text-[48px] md:text-[56px] leading-[0.98] max-w-3xl text-balance"
          >
            A small technical team, built to do the <span className="text-pink">work properly.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft text-balance"
          >
            Deltivex Technologies was founded by Abhay, Gourav, Rohan, and
            Yash to build software, AI systems, and automation for businesses
            that need real engineering behind their product — not just a
            polished pitch.
          </motion.p>
        </Container>
      </section>

      <section className="section-pad border-b border-border">
        <Container>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-t border-border-strong pt-6"
              >
                <h2 className="font-display text-[19px] uppercase">{pillar.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad border-b border-border">
        <Container>
          <SectionHeading
            eyebrow="Founding team"
            title="The people behind Deltivex."
            description="Four founders working directly on the product — no separation between strategy and execution."
          />
          <div className="mt-12">
            <FounderGrid founders={founders} />
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
