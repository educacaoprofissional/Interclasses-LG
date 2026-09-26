import { Trophy } from "lucide-react";

const F = "Inter, -apple-system, sans-serif";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Regulamento", href: "#regulamento" },
  { label: "Torneios", href: "#torneios" },
];

export function Footer() {
  return (
    <footer
      id="contato"
      className="py-16"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-14">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-4 h-4 text-white/50" />
              <span style={{ fontFamily: F, fontWeight: 600, color: "#f5f5f7", fontSize: "0.9rem" }}>
                Interclasse
              </span>
            </div>
            <p style={{ fontFamily: F }} className="text-sm text-white/30 leading-relaxed">
              Promovendo o esporte, o respeito e o espírito coletivo entre as turmas da nossa escola.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-2">
            <p style={{ fontFamily: F }} className="text-xs text-white/25 tracking-widest uppercase mb-2">
              Navegação
            </p>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ fontFamily: F }}
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <p style={{ fontFamily: F }} className="text-xs text-white/25 tracking-widest uppercase mb-2">
              Contato
            </p>
            {[
              { label: "esportes@escola.edu.br" },
              { label: "(11) 99999-0000" },
              { label: "Quadra Esportiva — Bloco C" },
            ].map((c) => (
              <span key={c.label} style={{ fontFamily: F }} className="text-sm text-white/40">
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p style={{ fontFamily: F }} className="text-xs text-white/20">
            © 2026 Torneio Interclasse. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: F }} className="text-xs text-white/20">
            Departamento de Educação Física
          </p>
        </div>
      </div>
    </footer>
  );
}
