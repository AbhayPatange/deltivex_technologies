import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import { navLinks } from "../../data/navigation";
import { cn } from "../../lib/utils";

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden overflow-hidden bg-bg border-b border-border"
        >
          <nav
            className="flex flex-col gap-1 px-6 py-6"
            aria-label="Mobile primary"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
              >
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      "block py-3 text-2xl font-display uppercase border-b border-border/60",
                      isActive ? "text-pink" : "text-ink"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="pt-5"
            >
              <Button to="/contact" onClick={onClose} className="w-full">
                Let&rsquo;s Build
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
