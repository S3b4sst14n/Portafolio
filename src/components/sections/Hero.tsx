import { motion } from "framer-motion";
import { Rocket, ChevronDown, Sparkles } from "lucide-react";
import { SiReact, SiPython, SiAstro, SiTypescript, SiGithub } from "react-icons/si";
import { FaLinkedinIn as SiLinkedin } from "react-icons/fa6";
import { useTypewriter } from "../../hooks/useTypewriter";
import { socials } from "../../data/portfolio";

const TYPED_ROLES = [
  "Desarrollador Frontend",
  "Analista de Datos",
  "Científico de Datos",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const typed = useTypewriter(TYPED_ROLES);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-16 pt-32"
    >
      {/* Animated blobs */}
      <motion.div
        animate={{ y: [0, -28, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full opacity-30 blur-[110px]"
        style={{ background: "#7c3aed" }}
      />
      <motion.div
        animate={{ y: [0, 24, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -bottom-28 -right-24 h-[420px] w-[420px] rounded-full opacity-25 blur-[110px]"
        style={{ background: "#06b6d4" }}
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute left-[55%] top-[40%] h-[280px] w-[280px] rounded-full opacity-15 blur-[100px]"
        style={{ background: "#f472b6" }}
      />

      {/* Dot grid */}
      <div className="dot-bg mask-radial pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-0 text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex">
            <div className="availability-badge">
              <span className="badge-dot" />
              Disponible para trabajar
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-[clamp(2.6rem,5.4vw,5rem)] font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-slate-200">Hola, soy</span>
            <br />
            <span className="gradient-text-tri">Juan Sebastian</span>
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 3 }}
              className="ml-3 inline-block origin-[70%_70%]"
            >
              <Sparkles className="inline h-7 w-7 text-brand-cyan" />
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 flex h-7 items-center gap-2 text-base text-slate-400 sm:text-lg lg:justify-start"
          >
            <span className="border-r-2 border-brand-cyan pr-1 font-semibold text-brand-cyan animate-blink">
              {typed}
            </span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-slate-400 text-balance"
          >
            Estudiante de Ingeniería de Sistemas apasionado por construir
            experiencias web modernas y transformar datos en decisiones.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a href="#projects" className="btn-glow">
              <Rocket size={16} /> Ver proyectos
            </a>
            <a href="#contact" className="btn-ghost">
              Contactarme
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex gap-3"
          >
            {[
              { href: socials.github, icon: SiGithub, label: "GitHub" },
              { href: socials.linkedin, icon: SiLinkedin, label: "LinkedIn" },
              {
                href: `mailto:${socials.email}`,
                icon: () => <span className="text-[15px]">@</span>,
                label: "Email",
              },
            ].map((s, i) => {
              const Icon = s.icon as React.ComponentType<{ size?: number }>;
              return (
                <motion.a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-brand-primary hover:bg-brand-primary/15 hover:text-white"
                >
                  <Icon size={14} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden items-center justify-center p-10 lg:flex"
        >
          {/* Conic spinning ring background */}
          <div
            className="absolute h-[320px] w-[320px] animate-spin-slow rounded-full opacity-30 blur-2xl"
            style={{
              background:
                "conic-gradient(from 0deg, #7c3aed, #06b6d4, #f472b6, #7c3aed)",
            }}
          />

          <div className="relative z-10 w-[280px] rounded-3xl border border-white/[0.09] bg-white/[0.04] p-9 text-center shadow-[0_32px_80px_rgba(0,0,0,.5),inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-2xl">
            {/* Inner glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(124,58,237,.18) 0%, transparent 70%)",
              }}
            />

            {/* Avatar */}
            <div className="relative mx-auto mb-5 h-24 w-24">
              <div
                className="absolute inset-0 animate-spin-slow rounded-full p-[2px]"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7c3aed, #06b6d4, #f472b6, #7c3aed)",
                }}
              >
                <div className="h-full w-full rounded-full bg-bg" />
              </div>
              <div
                className="absolute inset-[3px] flex items-center justify-center rounded-full font-display text-3xl font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                  boxShadow: "0 0 40px rgba(124,58,237,.6)",
                }}
              >
                JS
              </div>
            </div>

            <p className="font-display text-base font-bold">Juan Sebastian</p>
            <p className="mt-1 text-xs text-slate-400">
              Frontend &amp; Data Developer
            </p>

            <div className="my-5 h-px bg-white/[0.08]" />

            <div className="flex items-center justify-between gap-2">
              {[
                { v: "4+", l: "Proyectos" },
                { v: "14+", l: "Tech" },
                { v: "1+", l: "Año exp." },
              ].map((s, i, arr) => (
                <div key={s.l} className="flex flex-1 flex-col items-center">
                  <span className="gradient-text font-display text-lg font-bold">
                    {s.v}
                  </span>
                  <span className="text-[0.65rem] text-slate-400">{s.l}</span>
                  {i < arr.length - 1 && (
                    <div className="absolute top-0 h-0 w-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Floating tech badges */}
          {[
            { icon: SiReact, label: "React", color: "#61dafb", pos: "top-[6%] -right-2", delay: 0 },
            { icon: SiPython, label: "Python", color: "#3776ab", pos: "bottom-[20%] -left-4", delay: 1.2 },
            { icon: SiAstro, label: "Astro", color: "#ff5d01", pos: "top-[48%] -right-6", delay: 2.4 },
            { icon: SiTypescript, label: "TS", color: "#3178c6", pos: "top-[14%] left-0", delay: 3.6 },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: b.delay,
                }}
                className={`absolute z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-[rgba(11,11,30,.92)] px-3.5 py-1.5 text-xs font-semibold shadow-[0_8px_24px_rgba(0,0,0,.35)] backdrop-blur ${b.pos}`}
                style={{ color: b.color }}
              >
                <Icon size={13} />
                {b.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-500"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
