import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const F = "Inter, -apple-system, sans-serif";

const quotes = [
  { text: "O talento vence jogos, mas o trabalho em equipe vence campeonatos.", author: "Michael Jordan" },
  { text: "Respeito ao adversário é a maior demonstração de espírito esportivo.", author: "Espírito Olímpico" },
  { text: "A vitória é consequência da dedicação.", author: "Ayrton Senna" },
  { text: "Cada partida é uma oportunidade de evoluir.", author: "Filosofia do Esporte" },
  { text: "Disciplina e esforço transformam potencial em resultado.", author: "Vince Lombardi" },
  { text: "Campeões continuam jogando até acertarem.", author: "Billie Jean King" },
];

export function QuotesCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="py-28"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p style={{ fontFamily: F }} className="text-xs font-medium text-white/30 tracking-widest uppercase mb-14">
          Motivação
        </p>

        {/* Quote */}
        <div style={{ minHeight: "120px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <blockquote
                style={{
                  fontFamily: F,
                  fontSize: "clamp(1.3rem, 3.5vw, 2rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                  color: "#f5f5f7",
                  lineHeight: 1.35,
                }}
              >
                "{quotes[current].text}"
              </blockquote>
              <p style={{ fontFamily: F }} className="mt-6 text-sm text-white/30">
                {quotes[current].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                background: i === current ? "#0071e3" : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
