import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";
import Button from "../common/Button";
import MobileMenu from "./MobileMenu";
import Container from "../common/Container";
import { navLinks } from "../../data/navigation";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container className="flex h-[76px] items-center justify-between">
        <NavLink to="/" aria-label="Deltivex home" className="shrink-0">
          <Logo />
        </NavLink>

        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                cn(
                  "relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 -bottom-[3px] h-[3px] w-[3px] rounded-full bg-pink transition-opacity duration-200",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" size="md">
            Let&rsquo;s Build
          </Button>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
