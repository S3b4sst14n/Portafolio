/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05050f",
        surface: "#090918",
        muted: "#94a3b8",
        subtle: "#64748b",
        brand: {
          DEFAULT: "#7c3aed",
          primary: "#7c3aed",
          cyan: "#06b6d4",
          pink: "#f472b6",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'grad-brand': 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
        'grad-brand-pink': 'linear-gradient(135deg, #7c3aed 0%, #f472b6 50%, #06b6d4 100%)',
      },
      boxShadow: {
        glow: '0 0 28px rgba(124,58,237,.4)',
        'glow-lg': '0 0 48px rgba(124,58,237,.65)',
        'glow-cyan': '0 0 28px rgba(6,182,212,.4)',
        card: '0 24px 64px rgba(0,0,0,.5), 0 0 0 1px rgba(124,58,237,.2)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'spin-slow': 'spin 6s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        blink: 'blink 0.8s step-end infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-28px) scale(1.04)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.4', transform: 'scale(.7)' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
