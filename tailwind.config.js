/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        "surface-alt": "var(--surface-alt)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        nav: "var(--nav)",
        pill: "var(--pill)",
        pop: "var(--pop)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderWidth: {
        neo: "3px",
      },
      boxShadow: {
        neo: "5px 5px 0 0 var(--ink)",
        "neo-lg": "8px 8px 0 0 var(--ink)",
      },
    },
  },
  plugins: [],
};
