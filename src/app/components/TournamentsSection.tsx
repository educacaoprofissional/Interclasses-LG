import { motion } from "motion/react";
import { Calendar, Users, Trophy, Clock, MapPin } from "lucide-react";

const F = "Inter, -apple-system, sans-serif";

const modalities = [
  {
    emoji: "⚽",
    name: "Futsal",
    teams: 8,
    status: "Em Andamento",
    date: "Jun – Jul 2026",
    phase: "Quartas de Final",
    live: true,
    champion: null,
  },
  {
    emoji: "🏐",
    name: "Vôlei",
    teams: 6,
    status: "Em Andamento",
    date: "Jun – Jul 2026",
    phase: "Fase de Grupos",
    live: true,
    champion: null,
  },
  {
    emoji: "🏀",
    name: "Basquete",
    teams: 4,
    status: "Em Breve",
    date: "Jul – Ago 2026",
    phase: "Inscrições Abertas",
    live: false,
    champion: null,
  },
  {
    emoji: "🤾",
    name: "Handebol",
    teams: 4,
    status: "Em Breve",
    date: "Ago 2026",
    phase: "Inscrições Abertas",
    live: false,
    champion: null,
  },
  {
    emoji: "🏓",
    name: "Ping Pong",
    teams: 12,
    status: "Concluído",
    date: "Mai 2026",
    phase: "Finalizado",
    live: false,
    champion: "Turma 3B",
  },
];

const schedule = [
  { date: "12 Jun", time: "14:00", team1: "Turma 1A", team2: "Turma 2B", modality: "Futsal", local: "Quadra Principal" },
  { date: "13 Jun", time: "15:30", team1: "Turma 3A", team2: "Turma 4C", modality: "Vôlei", local: "Quadra 2" },
  { date: "14 Jun", time: "14:00", team1: "Turma 2A", team2: "Turma 1B", modality: "Futsal", local: "Quadra Principal" },
  { date: "16 Jun", time: "16:00", team1: "Turma 4A", team2: "Turma 3C", modality: "Vôlei", local: "Quadra 2" },
];

const statusStyle: Record<string, { color: string; bg: string }> = {
  "Em Andamento": { color: "#30d158", bg: "rgba(48,209,88,0.12)" },
  "Em Breve":     { color: "#ffd60a", bg: "rgba(255,214,10,0.12)" },
  "Concluído":    { color: "#8e8e93", bg: "rgba(142,142,147,0.12)" },
};

export function TournamentsSection() {
  return (
    <section
      id="torneios"
      className="py-28"
      style={{ background: "#111111" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14"
        >
          <p style={{ fontFamily: F }} className="text-xs font-medium text-white/35 tracking-widest uppercase mb-4">
            Competições
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
            Modalidades<br />e resultados.
          </h2>
        </motion.div>

        {/* Modalities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {modalities.map((m, i) => {
            const s = statusStyle[m.status] ?? { color: "#8e8e93", bg: "rgba(142,142,147,0.1)" };
            return (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="rounded-2xl p-6 flex flex-col gap-4 group hover:bg-white/3 transition-colors duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-start justify-between">
                  <span style={{ fontSize: "1.8rem" }}>{m.emoji}</span>
                  <div className="flex items-center gap-1.5">
                    {m.live && (
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: s.color }}
                      />
                    )}
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ fontFamily: F, color: s.color, background: s.bg }}
                    >
                      {m.status}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: F, fontWeight: 600, letterSpacing: "-0.02em", color: "#f5f5f7", fontSize: "1.05rem" }}>
                    {m.name}
                  </h3>
                  <p style={{ fontFamily: F }} className="text-sm text-white/40 mt-1">{m.phase}</p>
                </div>

                <div className="flex flex-col gap-1.5 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex items-center gap-2 text-white/35">
                    <Users style={{ width: 13, height: 13 }} />
                    <span style={{ fontFamily: F, fontSize: "0.8rem" }}>{m.teams} equipes</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/35">
                    <Calendar style={{ width: 13, height: 13 }} />
                    <span style={{ fontFamily: F, fontSize: "0.8rem" }}>{m.date}</span>
                  </div>
                  {m.champion && (
                    <div className="flex items-center gap-2 mt-1">
                      <Trophy style={{ width: 13, height: 13, color: "#ffd60a" }} />
                      <span style={{ fontFamily: F, fontSize: "0.8rem", color: "#ffd60a" }}>
                        Campeão: {m.champion}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h3
            style={{ fontFamily: F, fontWeight: 600, letterSpacing: "-0.025em", color: "#f5f5f7", fontSize: "1.3rem" }}
            className="mb-6"
          >
            Próximos Jogos
          </h3>

          <div className="flex flex-col" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {schedule.map((game, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Date + time */}
                <div className="flex items-center gap-3 min-w-[110px]">
                  <div>
                    <p style={{ fontFamily: F, fontWeight: 500, color: "#f5f5f7", fontSize: "0.875rem" }}>{game.date}</p>
                    <p className="flex items-center gap-1 text-white/30" style={{ fontSize: "0.75rem", fontFamily: F }}>
                      <Clock style={{ width: 11, height: 11 }} />
                      {game.time}
                    </p>
                  </div>
                </div>

                {/* Match */}
                <div className="flex items-center gap-3">
                  <span style={{ fontFamily: F, fontWeight: 500, color: "#f5f5f7", fontSize: "0.9rem" }}>{game.team1}</span>
                  <span
                    className="px-2 py-0.5 rounded text-xs font-semibold"
                    style={{ fontFamily: F, background: "rgba(0,113,227,0.15)", color: "#0071e3" }}
                  >
                    vs
                  </span>
                  <span style={{ fontFamily: F, fontWeight: 500, color: "#f5f5f7", fontSize: "0.9rem" }}>{game.team2}</span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ fontFamily: F, color: "#0071e3", background: "rgba(0,113,227,0.1)" }}
                  >
                    {game.modality}
                  </span>
                  <div className="hidden sm:flex items-center gap-1.5 text-white/25">
                    <MapPin style={{ width: 12, height: 12 }} />
                    <span style={{ fontFamily: F, fontSize: "0.75rem" }}>{game.local}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
