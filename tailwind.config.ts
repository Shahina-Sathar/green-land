import type { Config } from "tailwindcss";

// Colour tokens live as CSS variables (RGB channels) in app/globals.css so the
// whole theme can be retuned in one place; Tailwind just points at them.
// These are the same tokens as the shopping app (cart.greenland.millx.in), so
// the website and the store read as one brand.
const channel = (name: string) => `rgb(var(${name}) / <alpha-value>)`;
const scale = (prefix: string, steps: number[]) =>
  Object.fromEntries(steps.map((s) => [s, channel(`--${prefix}-${s}`)]));

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Class names also live outside the component tree — the category tile
    // tints in lib/category-style.ts would be purged without this.
    "./lib/**/*.{js,ts}",
    "./constants/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      colors: {
        brand: scale("brand", [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]),
        accent: scale("accent", [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
        cream: channel("--cream"),
        ink: channel("--ink"),
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        soft: "var(--shadow-soft)",
        lift: "var(--shadow-lift)",
        glow: "var(--shadow-glow)",
      },
      maxWidth: {
        page: "var(--page-max)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-10px) rotate(var(--r, 0deg))" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
        "scale-in": "scale-in 0.25s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
