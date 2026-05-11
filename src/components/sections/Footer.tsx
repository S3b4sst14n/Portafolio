import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn as SiLinkedin } from "react-icons/fa6";
import { socials } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-bg py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6">
        <a href="#hero" className="flex items-center gap-2.5 font-display font-bold">
          <img
            src="/img/Logo.png"
            alt="JS"
            width={32}
            height={32}
            className="rounded-md drop-shadow-[0_0_8px_rgba(124,58,237,.6)]"
          />
          <span className="text-sm">Juan Sebastian</span>
        </a>

        <p className="text-xs text-slate-500">
          © 2026 Juan Sebastian — Diseñado &amp; construido con{" "}
          <span className="gradient-text font-semibold">React</span> +{" "}
          <span className="gradient-text font-semibold">Tailwind</span>
        </p>

        <div className="flex gap-3">
          {[
            { href: socials.linkedin, icon: SiLinkedin, label: "LinkedIn" },
            { href: socials.github, icon: SiGithub, label: "GitHub" },
            { href: `mailto:${socials.email}`, icon: Mail, label: "Email" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={i}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:border-brand-primary hover:bg-brand-primary/15 hover:text-white"
              >
                <Icon size={14} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
