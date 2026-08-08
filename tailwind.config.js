/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#060607",
          raised: "#0b0b0d",
        },
        surface: {
          DEFAULT: "#111113",
          2: "#18181b",
        },
        border: {
          DEFAULT: "#232327",
          strong: "#323238",
        },
        ink: {
          DEFAULT: "#f4f4f2",
          soft: "#9a9aa0",
          faint: "#5c5c62",
        },
        pink: {
          DEFAULT: "#ef3d6e",
          soft: "#ff85a8",
          dim: "#5c1a30",
          deep: "#2b0e18",
        },
      },
      fontFamily: {
        display: ["'Anton'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        container: "1320px",
      },
      backgroundImage: {
        "pink-gradient": "linear-gradient(135deg, #ef3d6e 0%, #b5245a 100%)",
        "grid-fade":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(239,61,110,0.16), transparent 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: 0.35, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.4)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-node": "pulse-node 3.2s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
