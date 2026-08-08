import { motion } from "framer-motion";
import { Check, Gift, Cloud, Wrench, ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";

const PLANS = [
  {
    tag: "PKG.01",
    name: "Starter",
    price: "₹5,000",
    period: "one-time",
    tagline: "For individuals & simple businesses",
    includesPrev: null,
    features: [
      "Up to 3 pages",
      "Responsive design",
      "Basic custom styling",
      "Contact form",
      "Social media links",
      "Basic animations",
      "Deployment",
      "3 months bug-fix support",
    ],
    bestFor: "Portfolio, personal website, simple landing page, small local business.",
    cta: "Get Started",
    featured: false,
  },
  {
    tag: "PKG.02",
    name: "Business",
    price: "₹10,000",
    period: "one-time",
    tagline: "For businesses that want a proper online presence",
    includesPrev: "Everything in Starter +",
    features: [
      "Up to 6 pages",
      "Custom UI/UX",
      "WhatsApp integration",
      "Google Maps",
      "Google Analytics",
      "Basic SEO",
      "Better animations/interactions",
      "Contact/lead form",
      "Deployment",
      "3 months bug-fix support",
    ],
    bestFor: "Startups, restaurants, agencies, shops, professionals, service businesses.",
    cta: "Choose Business",
    featured: false,
  },
  {
    tag: "PKG.03",
    name: "Pro",
    price: "₹15,000",
    period: "one-time",
    tagline: "For businesses that want a more premium website",
    includesPrev: "Everything in Business +",
    features: [
      "Up to 10 pages",
      "Premium custom UI",
      "Advanced animations",
      "Advanced responsive design",
      "SEO optimization",
      "Performance optimization",
      "Blog/content section",
      "Advanced forms",
      "Third-party integrations",
      "Deployment",
      "3 months bug-fix support",
    ],
    bestFor: "Growing businesses, brands, startups and organizations.",
    cta: "Go Pro",
    featured: true,
  },
];

function CornerBrackets({ active }) {
  return (
    <>
      {[
        "left-0 top-0 border-l border-t",
        "right-0 top-0 border-r border-t",
        "left-0 bottom-0 border-l border-b",
        "right-0 bottom-0 border-r border-b",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute h-3 w-3 border-[#ef3d6e] ${active ? "" : "opacity-0"} ${pos}`}
        />
      ))}
    </>
  );
}

/**
 * Launch offer — deliberately louder than the plan cards below it.
 * Pink-glow border, its own eyebrow, and a perk row instead of a
 * feature list, so it reads as a limited-time hook, not a fourth plan.
 */
function LaunchOffer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto mb-16 max-w-3xl overflow-hidden border border-[#ef3d6e]/40 bg-gradient-to-b from-[#ef3d6e]/[0.08] to-transparent p-8 sm:p-10"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ef3d6e]/20 blur-3xl" />
      <CornerBrackets active />

      <div className="relative flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 border border-[#ef3d6e]/40 bg-[#ef3d6e]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#ef3d6e]">
          First 5 clients
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">
          Launch offer
        </span>
      </div>

      <h3 className="relative mt-5 max-w-lg font-display text-2xl leading-tight text-stone-100 sm:text-3xl">
        Build your website from just ₹5,000.
      </h3>

      <div className="relative mt-7 grid gap-4 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <Gift size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-[#ef3d6e]" />
          <span className="text-[13px] leading-5 text-stone-300">
            Free domain — 1 year
          </span>
        </div>
        <div className="flex items-start gap-3">
          <Cloud size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-[#ef3d6e]" />
          <span className="text-[13px] leading-5 text-stone-300">
            Free hosting — 1 year
          </span>
        </div>
        <div className="flex items-start gap-3">
          <Wrench size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-[#ef3d6e]" />
          <span className="text-[13px] leading-5 text-stone-300">
            3 months bug-fix support
          </span>
        </div>
      </div>

      <p className="relative mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-stone-500">
        Only for our first 5 clients.
      </p>

      <p className="relative mt-2 font-mono text-[11px] text-stone-600">
        Then: ₹5K → Starter · ₹10K → Business · ₹15K → Pro
      </p>

      <Button
        to="/contact"
        variant="primary"
        className="relative mt-7 inline-flex w-full items-center justify-center gap-2 sm:w-auto"
      >
        Get Your Website
        <ArrowRight size={15} strokeWidth={2} />
      </Button>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section className="relative overflow-hidden border-t border-stone-800 bg-[#0a0a0b] py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(#2a2a2e 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 border border-[#ef3d6e]/20 bg-[#ef3d6e]/[0.06] px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#ef3d6e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ef3d6e]" />
            SYS.05 — Pricing
          </div>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-stone-100 sm:text-4xl">
            Three packages. No surprises.
          </h2>
          <p className="mt-5 text-[14px] leading-6 text-stone-400">
            Fixed-scope packages for businesses that want a straight answer
            on price. Need something bigger or ongoing? We also do custom
            engagements — just ask.
          </p>
        </motion.div>

        <div className="mt-14">
          <LaunchOffer />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col border p-8 ${
                plan.featured
                  ? "border-[#ef3d6e]/40 bg-[#ef3d6e]/[0.03]"
                  : "border-stone-800 bg-[#0a0a0b]"
              }`}
            >
              <CornerBrackets active={plan.featured} />

              {plan.featured && (
                <span className="absolute -top-3 left-8 border border-[#ef3d6e]/40 bg-[#0a0a0b] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#ef3d6e]">
                  Most popular
                </span>
              )}

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ef3d6e]">
                {plan.tag}
              </span>

              <h3 className="mt-4 font-display text-xl text-stone-100">
                {plan.name}
              </h3>
              <p className="mt-1 text-[13px] text-stone-500">{plan.tagline}</p>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-3xl text-stone-100">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="font-mono text-[11px] text-stone-500">
                    {plan.period}
                  </span>
                )}
              </div>

              {plan.includesPrev && (
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#ef3d6e]/80">
                  {plan.includesPrev}
                </p>
              )}

              <ul className={`space-y-3 ${plan.includesPrev ? "mt-3" : "mt-6"} flex-1`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] leading-5 text-stone-300">
                    <Check size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-[#ef3d6e]" />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-stone-800 pt-5 text-[12px] leading-5 text-stone-500">
                <span className="text-stone-400">Best for:</span> {plan.bestFor}
              </p>

              <Button
                to="/contact"
                variant={plan.featured ? "primary" : "ghost"}
                className="mt-6 w-full justify-center"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-stone-600"
        >
          Need something ongoing instead? Ask about our dedicated-team and retainer options.
        </motion.p>
      </Container>
    </section>
  );
}