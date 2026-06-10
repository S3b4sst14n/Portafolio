import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "../data/portfolio";
import Logo from "./ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const ids = ["hero", "about", "services", "projects", "contact"];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.35 },
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-[1000] transition-all duration-500 ${
        scrolled
          ? "border-b border-brand-primary/20 bg-bg/85 py-3 shadow-[0_8px_48px_rgba(0,0,0,.55)] backdrop-blur-2xl"
          : "border-b border-white/[0.05] bg-bg/50 py-4 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#hero"
          className="flex items-center gap-2.5 font-display text-base font-bold"
        >
          <motion.span
            whileHover={{ rotate: 8, scale: 1.05 }}
            className="inline-flex drop-shadow-[0_0_12px_rgba(124,58,237,.55)]"
          >
            <Logo size={36} />
          </motion.span>
          <span className="hidden sm:inline">
            Juan<span className="gradient-text">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 280, damping: 30 }}
                    className="absolute inset-0 rounded-lg bg-brand-primary/12 ring-1 ring-brand-primary/30"
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href="#contact"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-brand-primary/45 bg-brand-primary/10 px-5 py-2 text-xs font-semibold tracking-wide text-brand-primary transition-all hover:-translate-y-0.5 hover:bg-brand-primary/20 hover:shadow-[0_6px_24px_rgba(124,58,237,.35)]"
          >
            <Download size={13} />
            Hablemos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-slate-300 transition-colors hover:border-brand-primary/40 hover:bg-brand-primary/10 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/[0.05] bg-bg/95 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-brand-primary/10 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-grad-brand py-3 text-sm font-semibold text-white"
              >
                Hablemos
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
