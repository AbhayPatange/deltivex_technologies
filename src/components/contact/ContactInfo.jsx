import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "../common/SocialIcons";
import { COMPANY } from "../../lib/constants";
import { footerLinks } from "../../data/navigation";

const socialIcons = {
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
};

export default function ContactInfo() {
  return (
    <div>
      <p className="eyebrow-pink mb-5">Get in touch</p>

      <h1 className="text-[42px] sm:text-[52px] md:text-[60px] font-medium leading-[1] tracking-wider max-w-xl text-balance">
        Tell us about your project.
      </h1>

      <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-soft">
        Whether it's a full product build, an AI feature, or a system that
        needs modernizing — describe it and we'll follow up with next
        steps.
      </p>

      <div className="mt-10 space-y-4">
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

      <div className="flex items-center gap-3 pt-6">
        {footerLinks.social.map((link) => {
          const Icon = socialIcons[link.label];

          if (!Icon) return null;

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