import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check, AlertCircle, Loader2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn as SiLinkedin } from "react-icons/fa6";
import { socials } from "../../data/portfolio";

const EMAILJS_SERVICE = "service_qtnb1aq";
const EMAILJS_TEMPLATE = "template_uyksvpl";
const EMAILJS_KEY = "D4ILizNNnYQCGVQpK";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const mensaje = String(data.get("message") || "");

    setStatus("loading");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE,
          template_id: EMAILJS_TEMPLATE,
          user_id: EMAILJS_KEY,
          template_params: { nombre, email, mensaje },
        }),
      });
      if (!res.ok) throw new Error("Error en el envío");
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "No se pudo enviar el mensaje.",
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative"
      style={{ background: "#090918" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 0%, rgba(124,58,237,.06) 0%, transparent 65%)",
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
          <span className="section-label">¿Hablamos?</span>
          <h2 className="section-title mt-2">
            Contac<span className="gradient-text">tame</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-slate-400">
            ¿Tienes un proyecto en mente o quieres trabajar juntos? Escríbeme.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="leading-relaxed text-slate-400">
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades
              laborales. No dudes en contactarme por cualquier canal.
            </p>

            <div className="mt-9 flex flex-col gap-5">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: socials.email,
                  href: `mailto:${socials.email}`,
                },
                {
                  icon: SiGithub,
                  label: "GitHub",
                  value: "S3b4sst14n",
                  href: socials.github,
                },
                {
                  icon: SiLinkedin,
                  label: "LinkedIn",
                  value: "Juan Sebastian",
                  href: socials.linkedin,
                },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-brand-primary/20 bg-brand-primary/10 text-brand-primary transition-all group-hover:scale-105 group-hover:bg-brand-primary/20">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-widest text-slate-500">
                        {c.label}
                      </p>
                      <p className="text-sm font-medium text-slate-200 transition-colors group-hover:text-brand-cyan">
                        {c.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-8">
              <div className="availability-badge">
                <span className="badge-dot" />
                Disponible para proyectos
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.035] p-9 backdrop-blur-xl sm:p-11"
          >
            <div
              className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(124,58,237,.12) 0%, transparent 70%)",
              }}
            />

            <form onSubmit={onSubmit} className="relative flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="form-input"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tucorreo@ejemplo.com"
                  className="form-input"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="form-input resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileTap={{ scale: 0.98 }}
                className="relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full py-3.5 font-display text-sm font-bold text-white transition-all disabled:opacity-70"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                  boxShadow: "0 0 28px rgba(124,58,237,.35)",
                }}
              >
                {status === "loading" && (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Enviando...
                  </>
                )}
                {status === "success" && (
                  <>
                    <Check size={16} /> ¡Mensaje enviado!
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle size={16} /> {errorMsg || "Error al enviar"}
                  </>
                )}
                {status === "idle" && (
                  <>
                    <Send size={15} /> Enviar mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
