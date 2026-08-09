import { NavLink } from "react-router-dom";
import Container from "../common/Container";
import { footerLinks } from "../../data/navigation";
import { COMPANY } from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <Container className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10">
          <div>
            <span className="font-display text-[26px] tracking-[0.01em] text-white uppercase">
              Deltive<span className="text-[#327ee2]">x</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              A product engineering studio. We design, build, and scale
              software, AI systems, and automation that create real impact.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className="text-sm text-ink-soft hover:text-pink-soft transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-ink-soft hover:text-pink-soft transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ink-soft hover:text-pink-soft transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-faint">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-ink-faint uppercase tracking-wide">
            {COMPANY.location}
          </p>
        </div>
      </Container>
    </footer>
  );
}
