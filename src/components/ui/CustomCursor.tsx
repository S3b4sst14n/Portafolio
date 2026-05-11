import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const handler = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    let mx = 0,
      my = 0,
      gx = 0,
      gy = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;

      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest("a, button, input, textarea, [role='button']");
      setHovering(interactive);
    };

    const animate = () => {
      gx += (mx - gx) * 0.1;
      gy += (my - gy) * 0.1;
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full transition-[width,height,background] duration-150"
        style={{
          width: hovering ? 22 : 8,
          height: hovering ? 22 : 8,
          background: hovering ? "#7c3aed" : "#06b6d4",
          mixBlendMode: hovering ? "normal" : "screen",
          boxShadow: hovering
            ? "0 0 20px rgba(124,58,237,.7)"
            : "0 0 12px rgba(6,182,212,.7)",
        }}
      />
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full"
        style={{
          width: 360,
          height: 360,
          background:
            "radial-gradient(circle, rgba(124,58,237,.12) 0%, transparent 70%)",
        }}
      />
    </>
  );
}
