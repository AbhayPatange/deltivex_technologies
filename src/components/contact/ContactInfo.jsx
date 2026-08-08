import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "../common/SocialIcons";
import { COMPANY } from "../../lib/constants";
import { footerLinks } from "../../data/navigation";

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  "X / Twitter": XIcon,
};

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow-pink mb-3 inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-pink" />
          Get in touch
        </p>
        <h2 className="font-display text-[30px] uppercase leading-tight">
          Tell us about your project.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft max-w-sm">
          Whether it's a full product build, an AI feature, or a system that
          needs modernizing — describe it and we'll follow up with next
          steps.
        </p>
      </div>

      <div className="space-y-4">
        <a
          href={`mailto:${COMPANY.email}`}
          className="flex items-center gap-3 text-sm text-ink-soft hover:text-ink transition-colors"
        >
          <span className="h-9 w-9 rounded-full border border-pink/50 flex items-center justify-center shrink-0">
            <Mail className="h-4 w-4 text-pink" />
          </span>
          {COMPANY.email}
        </a>
        <div className="flex items-center gap-3 text-sm text-ink-soft">
          <span className="h-9 w-9 rounded-full border border-pink/50 flex items-center justify-center shrink-0">
            <MapPin className="h-4 w-4 text-pink" />
          </span>
          {COMPANY.location}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        {footerLinks.social.map((link) => {
          const Icon = socialIcons[link.label] ?? GithubIcon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-ink-faint hover:text-pink hover:border-pink/40 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
