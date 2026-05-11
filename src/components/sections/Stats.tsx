import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";
import { stats } from "../../data/portfolio";

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { ref, value: current } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="text-center"
    >
      <div className="gradient-text font-display text-4xl font-bold leading-none sm:text-5xl">
        {current}
        {suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-wider text-slate-400">
        {label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative border-y border-brand-primary/15 py-12"
      style={{
        background:
          "linear-gradient(90deg, rgba(9,9,24,1) 0%, rgba(15,9,32,1) 50%, rgba(9,9,24,1) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(124,58,237,.05) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-16 gap-y-8 px-6 sm:gap-x-24">
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}
