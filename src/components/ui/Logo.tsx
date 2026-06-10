import { useId } from "react";

type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Monograma "JS" en SVG (mark-only, sin tile): letras rellenas con el degradado
 * tricolor de marca (violeta → rosa → cyan) y un glow suave detrás.
 * Vectorial: nítido a cualquier tamaño e independiente de fuentes.
 */
export default function Logo({ size = 36, className = "" }: LogoProps) {
  const uid = useId();
  const ink = `${uid}-ink`;
  const blur = `${uid}-blur`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Juan Sebastian"
      className={className}
    >
      <defs>
        <linearGradient id={ink} x1="16" y1="14" x2="50" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8b5cf6" />
          <stop offset="0.5" stopColor="#f472b6" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <filter id={blur} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      <g fill={`url(#${ink})`}>
        {/* Glow */}
        <g filter={`url(#${blur})`} opacity="0.55">
          <path d="M30 15 h7 v19 c0 7 -4.5 11.5 -11.5 11.5 c-5 0 -8.7 -2.3 -10.5 -6.4 l5.8 -3.4 c0.9 2.1 2.5 3.2 4.7 3.2 c2.9 0 4.2 -1.6 4.2 -4.8 z" />
          <path d="M50 21.5 l-6 2.3 c-0.7 -2 -2.2 -3.2 -4.6 -3.2 c-2.3 0 -3.7 1.1 -3.7 2.8 c0 1.9 1.5 2.6 5.4 3.5 c5.5 1.3 9.3 3.2 9.3 8.4 c0 5.4 -4.4 8.7 -10.3 8.7 c-5.6 0 -9.4 -2.6 -11 -6.9 l6 -2.3 c0.9 2.4 2.8 3.6 5.2 3.6 c2.6 0 4 -1.1 4 -2.9 c0 -2 -1.6 -2.7 -5.7 -3.7 c-4.8 -1.1 -8.8 -3 -8.8 -8.2 c0 -5 4.1 -8.4 9.8 -8.4 c5.3 0 8.9 2.5 10.4 6.7 z" />
        </g>
        {/* Letras nítidas */}
        <path d="M30 15 h7 v19 c0 7 -4.5 11.5 -11.5 11.5 c-5 0 -8.7 -2.3 -10.5 -6.4 l5.8 -3.4 c0.9 2.1 2.5 3.2 4.7 3.2 c2.9 0 4.2 -1.6 4.2 -4.8 z" />
        <path d="M50 21.5 l-6 2.3 c-0.7 -2 -2.2 -3.2 -4.6 -3.2 c-2.3 0 -3.7 1.1 -3.7 2.8 c0 1.9 1.5 2.6 5.4 3.5 c5.5 1.3 9.3 3.2 9.3 8.4 c0 5.4 -4.4 8.7 -10.3 8.7 c-5.6 0 -9.4 -2.6 -11 -6.9 l6 -2.3 c0.9 2.4 2.8 3.6 5.2 3.6 c2.6 0 4 -1.1 4 -2.9 c0 -2 -1.6 -2.7 -5.7 -3.7 c-4.8 -1.1 -8.8 -3 -8.8 -8.2 c0 -5 4.1 -8.4 9.8 -8.4 c5.3 0 8.9 2.5 10.4 6.7 z" />
      </g>
    </svg>
  );
}
