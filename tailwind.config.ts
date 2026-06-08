import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#FDFBF7",
        maroon: {
          DEFAULT: "#6B1D2F",
          light: "#8B2D45",
          deep: "#4A1220",
        },
        gold: {
          DEFAULT: "#C5A059",
          light: "#D4B87A",
          muted: "#A8894A",
          pale: "#EDD99A",
        },
        ink: {
          DEFAULT: "#2C1810",
          soft: "#5C3D2E",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        devanagari: ["Noto Serif Devanagari", "serif"],
      },
      letterSpacing: {
        royal: "0.18em",
        wide: "0.12em",
        ultra: "0.25em",
      },
      backgroundImage: {
        "parchment-texture": "url('/texture-parchment.jpg')",
        "crimson-velvet": "url('/texture-crimson-velvet.jpg')",
        "mughal-arches": "url('/texture-mughal-arches.jpg')",
        "carpet-border": "url('/texture-carpet-border.jpg')",
        "sandstone-ceiling": "url('/texture-sandstone-ceiling.jpg')",
        "palace-mural": "url('/mural-rajmahal-palace.jpg')",
        "mayur-mural": "url('/mural-mayur-vatika.jpg')",
        "mughal-arch-pink": "url('/mural-mughal-arch-pink.jpg')",
        "garden-mural": "url('/mural-rajmahal-garden.jpg')",
        "damask-pattern": "url('/pattern-ivory-damask.png')",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
