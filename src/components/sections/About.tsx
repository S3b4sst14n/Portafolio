import { motion } from "framer-motion";
import { GraduationCap, MapPin, Languages, Briefcase, Code, Database, Wrench, Download } from "lucide-react";
import { skillCategories } from "../../data/portfolio";

const categoryIcons = { code: Code, database: Database, wrench: Wrench } as const;

const facts = [
  { icon: GraduationCap, text: "Ing. Sistemas — 5.° Semestre" },
  { icon: MapPin, text: "Colombia" },
  { icon: Languages, text: "Español nativo · Inglés B2" },
  { icon: Briefcase, text: "Freelance & Open to work" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Perfil</span>
            <h2 className="section-title mt-2">
              Sobre <span className="gradient-text">mí</span>
            </h2>
            <p className="mt-5 leading-relaxed text-slate-400">
              Estudiante de Ingeniería de Sistemas (5.° semestre) apasionado por la tecnología.
              He complementado mi formación con bootcamps en desarrollo web, análisis y ciencia
              de datos, construyendo una base sólida en Frontend moderno y análisis de datos.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              Me motiva resolver problemas reales con código limpio, interfaces bien diseñadas
              y datos bien interpretados. Aprendo rápido, colaboro bien y siempre busco mejorar.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {facts.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.text}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-cyan/20 bg-brand-cyan/[0.07] text-brand-cyan">
                      <Icon size={14} />
                    </span>
                    {f.text}
                  </motion.div>
                );
              })}
            </div>

            <a
              href={`mailto:sanjuanelojuan@gmail.com`}
              className="btn-glow mt-8"
            >
              <Download size={16} /> Descargar CV
            </a>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            {skillCategories.map((cat, ci) => {
              const Icon = categoryIcons[cat.icon as keyof typeof categoryIcons];
              return (
                <div key={cat.label}>
                  <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    <Icon size={14} className="text-brand-cyan" />
                    {cat.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, si) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.85, y: 12 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: ci * 0.08 + si * 0.04,
                          }}
                          whileHover={{ y: -3 }}
                          className="chip"
                        >
                          <SkillIcon size={14} style={{ color: skill.color }} />
                          {skill.name}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
