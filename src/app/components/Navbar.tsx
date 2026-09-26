import { useState, useEffect } from "react";
import { Trophy, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Regulamento", href: "#regulamento" },
  { label: "Torneios", href: "#torneios" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <Trophy className="w-5 h-5 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
            <span
              className="text-white text-sm font-semibold tracking-tight"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.01em" }}
            >
              Interclasse
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontFamily: "Inter, sans-serif" }}
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#regulamento"
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ver Regulamento
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors p-1"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(10,10,10,0.95)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="px-0 py-3 text-white/60 hover:text-white text-sm transition-colors border-b border-white/5 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#regulamento"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-5 py-3 rounded-full bg-white text-black text-sm font-medium text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Ver Regulamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
