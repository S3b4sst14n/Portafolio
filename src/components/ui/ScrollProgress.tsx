import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[9997] h-[3px] w-full origin-left bg-gradient-to-r from-brand-primary via-brand-pink to-brand-cyan shadow-[0_0_12px_rgba(124,58,237,.6)]"
    />
  );
}
