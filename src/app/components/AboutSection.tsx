import { motion } from "motion/react";
import { Users, Target, Heart, Star } from "lucide-react";

const F = "Inter, -apple-system, sans-serif";

const cards = [
  {
    icon: Target,
    title: "Objetivo",
    text: "Promover a prática esportiva de forma organizada, desenvolvendo habilidades individuais e coletivas em um ambiente competitivo e saudável.",
  },
  {
    icon: Users,
    title: "Trabalho em Equipe",
    text: "Valorizar a colaboração e confiança mútua. Cada equipe representa a sua turma com orgulho, aprendendo que juntos somos mais fortes.",
  },
  {
    icon: Heart,
    title: "Convivência",
    text: "Estimular relações saudáveis entre alunos de diferentes turmas, fortalecendo laços de amizade e respeito às diferenças.",
  },
  {
    icon: Star,
    title: "Espírito Esportivo",
    text: "O respeito ao adversário e às regras são valores fundamentais. Como se compete importa tanto quanto vencer.",
  },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-28"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p style={{ fontFamily: F }} className="text-xs font-medium text-white/35 tracking-widest uppercase mb-4">
            Sobre o Torneio
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
            Mais do que<br />uma competição.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="p-8 flex flex-col gap-5 group hover:bg-white/2 transition-colors duration-300"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-xl"
                  style={{ background: "rgba(0,113,227,0.15)", color: "#0071e3" }}
                >
                  <Icon className="w-4.5 h-4.5" style={{ width: "18px", height: "18px" }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: F, fontWeight: 600, letterSpacing: "-0.02em", color: "#f5f5f7", fontSize: "1rem" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: F }} className="text-sm text-white/45 mt-2 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 text-center"
        >
          <p
            style={{
              fontFamily: F,
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "rgba(245,245,247,0.5)",
              lineHeight: 1.5,
            }}
          >
            "O esporte ensina o que a sala de aula{" "}
            <span style={{ color: "#f5f5f7", fontWeight: 400 }}>
              não consegue ensinar sozinha.
            </span>
            "
          </p>
        </motion.div>
      </div>
    </section>
  );
}
