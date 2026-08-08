import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";

export default function CTA() {
  return (
    <section className="section-pad border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1.3fr_1fr_0.7fr] gap-10 lg:gap-8 items-end"
        >
          <h2 className="text-[36px] sm:text-[46px] md:text-[54px] leading-[0.98] text-balance">
            <span className="text-pink">Ideas are easy.</span>
            <br />
            <span className="text-ink">Execution is</span>
            <br />
            <span className="text-ink">everything.</span>
          </h2>

          <div>
            <p className="text-[15px] leading-relaxed text-ink-soft max-w-xs">
              Have a project in mind? Let&rsquo;s build something
              exceptional together.
            </p>
            <div className="mt-6">
              <Button to="/contact" size="md">
                Let&rsquo;s Talk
              </Button>
            </div>
          </div>

          <div className="lg:text-right">

            <p className="mt-2 font-mono text-xs text-ink-faint uppercase tracking-wide">
              Belagavi, India
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
