import { motion } from "framer-motion";
import Container from "../components/common/Container";
import ProjectGrid from "../components/projects/ProjectGrid";
import CTA from "../components/home/CTA";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow-pink mb-5 inline-flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pink" />
            Selected work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[42px] sm:text-[56px] md:text-[64px] font-medium leading-[1] tracking-wider max-w-2xl text-balance"
          >
            What we&rsquo;ve<br /><span className="text-pink">actually built.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft text-balance"
          >
            A small portfolio, labeled honestly. Internal builds and personal
            projects — not client work we don't have yet.
          </motion.p>
        </Container>
      </section>

      <section className="section-pad border-b border-border">
        <Container>
          <ProjectGrid projects={projects} />
        </Container>
      </section>

      <CTA />
    </>
  );
}
