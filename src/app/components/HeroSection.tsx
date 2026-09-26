import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const F = "Inter, -apple-system, sans-serif";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Very subtle radial glow — barely visible, not neon */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(0,113,227,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ fontFamily: F }}
          className="text-sm font-medium text-white/40 tracking-widest uppercase mb-6 select-none"
        >
          Temporada 2026
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: F,
            fontSize: "clamp(3rem, 9vw, 6.5rem)",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            color: "#f5f5f7",
          }}
        >
          Torneio<br />
          <span style={{ color: "#0071e3" }}>Interclasse</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ fontFamily: F }}
          className="mt-6 text-lg md:text-xl text-white/50 max-w-xl mx-auto leading-relaxed font-light"
        >
          Competição, respeito e espírito esportivo entre turmas.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
        >
          <a
            href="#regulamento"
            style={{ fontFamily: F }}
            className="px-7 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-medium transition-colors duration-200"
          >
            Ver Regulamento
          </a>
          <a
            href="#torneios"
            style={{ fontFamily: F }}
            className="px-7 py-3 rounded-full bg-white/8 hover:bg-white/12 text-white text-sm font-medium transition-colors duration-200 border border-white/10"
          >
            Ver Torneios
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex justify-center gap-12 mt-20 pt-10 border-t border-white/6"
        >
          {[
            { value: "12+", label: "Turmas" },
            { value: "5", label: "Modalidades" },
            { value: "100+", label: "Atletas" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                style={{ fontFamily: F, fontSize: "1.75rem", fontWeight: 600, letterSpacing: "-0.03em", color: "#f5f5f7" }}
              >
                {stat.value}
              </div>
              <div style={{ fontFamily: F }} className="text-xs text-white/35 mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-white/25"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
