import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects, type Project } from "../../data/portfolio";

const filters = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "data", label: "Datos" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export default function Projects() {
  const [filter, setFilter] = useState<FilterId>("all");

  const featured = useMemo(() => projects.filter((p) => p.featured), []);
  const grid = useMemo(
    () =>
      projects.filter((p) => !p.featured && (filter === "all" || p.category === filter)),
    [filter],
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const stepWidth = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const first = el.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + 24 : el.clientWidth; // 24 = gap-6
  };

  const scrollByCards = (dir: number) =>
    trackRef.current?.scrollBy({ left: dir * stepWidth(), behavior: "smooth" });

  const scrollToCard = (i: number) =>
    trackRef.current?.scrollTo({ left: i * stepWidth(), behavior: "smooth" });

  const onScroll = () => {
    const el = trackRef.current;
    const w = stepWidth();
    if (!el || !w) return;
    setActive(Math.round(el.scrollLeft / w));
  };

  // Reinicia el carrusel al cambiar de filtro
  useEffect(() => {
    setActive(0);
    trackRef.current?.scrollTo({ left: 0 });
  }, [filter]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label">Portafolio</span>
          <h2 className="section-title mt-2">
            Mis <span className="gradient-text">proyectos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-slate-400">
            Proyectos que reflejan mi enfoque técnico y atención al detalle.
          </p>
        </motion.div>

        {/* Featured */}
        {featured.map((p) => (
          <FeaturedProject key={p.id} project={p} />
        ))}

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="mr-2 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-slate-500">
            <Filter size={12} /> Filtrar
          </span>
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`relative rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  active ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    transition={{ type: "spring", stiffness: 280, damping: 26 }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                      boxShadow: "0 0 20px rgba(124,58,237,.4)",
                    }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Carrusel */}
        {grid.length > 0 ? (
          <div className="relative">
            <div
              ref={trackRef}
              onScroll={onScroll}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {grid.map((p, i) => (
                <div
                  key={p.id}
                  className="w-[85%] flex-shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <ProjectCard project={p} index={i} />
                </div>
              ))}
            </div>

            {/* Controles: flechas a los lados de los indicadores */}
            {grid.length > 1 && (
              <div className="mt-7 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollByCards(-1)}
                  aria-label="Proyecto anterior"
                  disabled={active === 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-bg/80 text-slate-200 backdrop-blur transition-all hover:border-brand-primary/50 hover:bg-brand-primary/20 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex items-center gap-2">
                  {grid.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Ir al proyecto ${i + 1}`}
                      onClick={() => scrollToCard(i)}
                      className={`h-2 rounded-full transition-all ${
                        active === i
                          ? "w-6 bg-gradient-to-r from-brand-primary to-brand-cyan"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => scrollByCards(1)}
                  aria-label="Proyecto siguiente"
                  disabled={active >= grid.length - 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-bg/80 text-slate-200 backdrop-blur transition-all hover:border-brand-primary/50 hover:bg-brand-primary/20 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="mt-12 text-center text-sm text-slate-500">
            No hay proyectos en esta categoría todavía. Vuelve pronto :)
          </p>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── Featured */
function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative mt-14 grid grid-cols-1 overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03] transition-all duration-500 hover:border-brand-primary/40 hover:shadow-[0_32px_80px_rgba(0,0,0,.5)] lg:grid-cols-[1.1fr_1fr]"
    >
      {/* Image */}
      <div className="relative min-h-[300px] overflow-hidden lg:min-h-0">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(45deg, rgba(6,6,18,.85) 0%, rgba(6,6,18,.15) 60%, transparent 100%)",
          }}
        />
        {project.workBadge && (
          <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-brand-primary/85 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur">
            {project.workBadge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col justify-center p-10 md:p-12">
        <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-brand-cyan">
          <Star size={12} className="fill-brand-cyan" />
          Proyecto destacado
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                boxShadow: "0 0 24px rgba(124,58,237,.35)",
              }}
            >
              <ExternalLink size={14} /> Ver sitio
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-display text-sm font-semibold text-slate-300 transition-all hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
            >
              <SiGithub size={14} /> Código
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────── Card */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_28px_72px_rgba(0,0,0,.6),0_0_0_1px_rgba(124,58,237,.4)]"
    >
      {/* Gradient hover border */}
      <div
        className="pointer-events-none absolute inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,.25), transparent 35%, transparent 65%, rgba(6,182,212,.25))",
        }}
      />

      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,6,18,.95) 0%, rgba(6,6,18,.15) 60%, transparent 100%)",
          }}
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-bg/80 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-slate-300 backdrop-blur">
          {project.category === "data" ? "Data" : "Web"}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-display text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
              }}
            >
              <ExternalLink size={12} /> Ver sitio
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 font-display text-xs font-semibold text-slate-300 transition-all hover:border-white/30 hover:text-white"
            >
              <SiGithub size={12} /> Código
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
