import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const F = "Inter, -apple-system, sans-serif";

const penalties = [
  {
    tag: "Crítico",
    tagColor: "#ff453a",
    title: "Brigas Físicas",
    items: [
      "Desclassificação imediata da equipe envolvida.",
      "Encaminhamento à coordenação escolar.",
      "Aplicação das medidas disciplinares previstas pela escola.",
    ],
  },
  {
    tag: "Grave",
    tagColor: "#ff9f0a",
    title: "Xingamentos e Ofensas Verbais",
    items: [
      "Advertência na primeira ocorrência.",
      "Suspensão de partidas em caso de reincidência.",
      "Possível exclusão do torneio.",
    ],
  },
  {
    tag: "Tolerância Zero",
    tagColor: "#bf5af2",
    title: "Preconceito, Discriminação ou Bullying",
    items: [
      "Desclassificação imediata — sem exceções.",
      "Encaminhamento à direção para medidas disciplinares.",
    ],
  },
  {
    tag: "Moderado",
    tagColor: "#ffd60a",
    title: "Conduta Antidesportiva",
    items: [
      "Perda de pontos para a equipe.",
      "Advertências ao responsável.",
      "Possível eliminação do campeonato.",
    ],
  },
];

export function PenaltiesSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="regulamento"
      className="py-28"
      style={{ background: "#111111" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14"
        >
          <p style={{ fontFamily: F }} className="text-xs font-medium text-white/35 tracking-widest uppercase mb-4">
            Regulamento
          </p>
          <h2
            style={{
              fontFamily: F,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#f5f5f7",
              lineHeight: 1.1,
            }}
          >
            Código de<br />conduta.
          </h2>
          <p style={{ fontFamily: F }} className="mt-5 text-base text-white/40 leading-relaxed max-w-lg">
            O fair play é inegociável. Ao participar do torneio, todos os atletas aceitam automaticamente estas regras.
          </p>
        </motion.div>

        {/* Accordion list */}
        <div className="flex flex-col" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {penalties.map((p, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    {/* Severity dot */}
                    <span
                      className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: p.tagColor }}
                    />
                    <div>
                      <span
                        style={{ fontFamily: F, fontSize: "0.65rem", fontWeight: 600, color: p.tagColor, letterSpacing: "0.08em" }}
                        className="uppercase block mb-0.5 opacity-80"
                      >
                        {p.tag}
                      </span>
                      <span
                        style={{ fontFamily: F, fontWeight: 500, letterSpacing: "-0.01em", color: "#f5f5f7", fontSize: "1rem" }}
                      >
                        {p.title}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-all duration-300 flex-shrink-0"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="pb-6 pl-6 flex flex-col gap-2.5">
                        {p.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="text-white/25 mt-0.5 text-xs select-none">—</span>
                            <span style={{ fontFamily: F }} className="text-sm text-white/55 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ fontFamily: F }}
          className="mt-10 text-xs text-white/25 leading-relaxed"
        >
          As penalidades são aplicadas pela comissão organizadora e pela coordenação escolar. Decisões são definitivas e visam garantir um torneio justo e seguro para todos.
        </motion.p>
      </div>
    </section>
  );
}
