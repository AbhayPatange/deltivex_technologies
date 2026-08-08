
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import FounderGrid from "../components/team/FounderGrid";
import CTA from "../components/home/CTA";
import { founders } from "../data/founders";

const pillars = [
  {
    title: "Why we started",
    text: "We saw businesses struggling to find the right balance between quality, speed, and cost. Deltivex was created to offer a focused technical team that understands the problem, builds the right solution, and moves quickly.",
  },
  {
    title: "Mission",
    text: "Build practical software, AI systems, and digital solutions that create measurable value for businesses — with thoughtful engineering and a clear focus on outcomes.",
  },
  {
    title: "Vision",
    text: "To become a technology partner businesses trust with their most important digital initiatives — through strong engineering, honest communication, and consistently reliable work.",
  },
  {
    title: "Engineering philosophy",
    text: "Good engineering should make things simpler, not more complicated. We value clear architecture, readable code, thoughtful decisions, and technology that serves a purpose.",
  },
];

const values = [
  {
    number: "01",
    title: "Clarity",
    text: "We understand the problem before we start building. Clear requirements lead to better decisions and better products.",
  },
  {
    number: "02",
    title: "Quality",
    text: "We care about the details that make software reliable, maintainable, and ready for real-world use.",
  },
  {
    number: "03",
    title: "Transparency",
    text: "Clients should always know what is happening, why decisions are being made, and where the project stands.",
  },
  {
    number: "04",
    title: "Ownership",
    text: "We take responsibility for our work from the first conversation through development, delivery, and refinement.",
  },
  {
    number: "05",
    title: "Practicality",
    text: "We choose technology because it solves a problem — not because it is new, popular, or unnecessarily complex.",
  },
  {
    number: "06",
    title: "Long-term thinking",
    text: "We build solutions that can evolve with the business instead of creating technical decisions that become limitations later.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad">
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow-pink mb-5 inline-flex items-center gap-2"
          >
            About Deltivex
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[42px] sm:text-[56px] md:text-[64px] leading-[0.98] max-w-3xl text-balance"
          >
            Technology built around
            <br />
            real business problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft text-balance"
          >
            Deltivex Technologies was founded by Abhay, Gourav, Rohan, and
            Yash with a simple belief: great technology starts with
            understanding the problem. We build software, AI systems, and
            automation that help businesses turn ideas into reliable digital
            products.
          </motion.p>
        </Container>
      </section>

      {/* About pillars */}
      <section className="border-b border-border">
        <Container>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14 py-16 md:py-20">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-t border-border-strong pt-6"
              >
                <h2 className="font-display text-[19px] uppercase tracking-tight">
                  {pillar.title}
                </h2>

                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-pad border-b border-border">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="Principles behind the work."
            description="The way we work is as important as what we build. These principles guide how we approach projects, make technical decisions, and work with our clients."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {values.map((value, i) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-t border-border-strong pt-5"
              >
                <span className="text-[13px] text-ink-soft">
                  {value.number}
                </span>

                <h3 className="mt-5 font-display text-[18px] uppercase tracking-tight">
                  {value.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="section-pad border-b border-border">
        <Container>
          <SectionHeading
            eyebrow="Founding team"
            title="The people behind Deltivex."
            description="Four founders working closely across strategy, engineering, and product to turn ideas into reliable digital solutions."
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
