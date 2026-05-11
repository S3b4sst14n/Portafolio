import { motion } from "framer-motion";
import { Code2, BarChart3, Brain } from "lucide-react";
import { services } from "../../data/portfolio";
import TiltCard from "../ui/TiltCard";

const iconMap = { code: Code2, chart: BarChart3, brain: Brain } as const;

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding relative"
      style={{ background: "#090918" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 100% 50%, rgba(6,182,212,.04) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 0% 50%, rgba(124,58,237,.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label">¿Qué hago?</span>
          <h2 className="section-title mt-2">
            Mis <span className="gradient-text">servicios</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-slate-400">
            Áreas en las que puedo aportar valor a tu proyecto o equipo.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <TiltCard className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03] p-9">
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at var(--mx,50%) var(--my,0%), rgba(124,58,237,.18) 0%, transparent 50%)",
                    }}
                  />

                  {/* Top-right accent number */}
                  <div className="pointer-events-none absolute right-5 top-3 font-display text-6xl font-bold opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.10]">
                    0{i + 1}
                  </div>

                  <div
                    className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-glow"
                    style={{
                      background:
                        "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="relative font-display text-lg font-bold">{s.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-slate-400">
                    {s.description}
                  </p>

                  <ul className="relative mt-5 flex flex-col gap-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-slate-500"
                      >
                        <span
                          className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{
                            background:
                              "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                          }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Border glow on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-brand-primary/30" />
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
