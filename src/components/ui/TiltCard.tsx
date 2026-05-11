import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
};

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  scale = 1.02,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rX = ((-y / rect.height) * maxTilt).toFixed(2);
    const rY = ((x / rect.width) * maxTilt).toFixed(2);
    card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale(${scale})`;

    // Light position
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${px}%`);
    card.style.setProperty("--my", `${py}%`);
  };

  const onLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`will-change-transform transition-transform duration-200 ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
