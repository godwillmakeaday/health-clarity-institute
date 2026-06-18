import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E2238",
          900: "#081523",
          800: "#0E2238",
          700: "#163049",
          600: "#1F3D5C",
        },
        charcoal: {
          DEFAULT: "#23262B",
          700: "#2C2F35",
          600: "#3A3E46",
          soft: "#54585F",
        },
        ink: "#1A1D21",
        gold: {
          DEFAULT: "#A9802E",
          dark: "#7E5F22",
          soft: "#F1E6CB",
          line: "#D9BD7C",
        },
        grey: {
          50: "#F8F7F4",
          100: "#F1EFEA",
          200: "#E4E1D8",
          300: "#CCC7BA",
          400: "#9D978A",
        },
        warn: {
          DEFAULT: "#8E3B33",
          soft: "#F3E5E2",
          line: "#D9B3AC",
        },
        trust: {
          DEFAULT: "#3C5E45",
          soft: "#E5EBE2",
          line: "#BBC9B5",
        },
        offwhite: "#F7F5EF",
        paper: "#FBFAF6",
        line: "#E2DED3",
        lineSoft: "#ECE9E0",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.3rem, 5vw, 3.8rem)", { lineHeight: "1.05", letterSpacing: "-0.016em" }],
        h1: ["clamp(1.95rem, 3.4vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.014em" }],
        h2: ["clamp(1.5rem, 2.3vw, 2rem)", { lineHeight: "1.18", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1240px",
        prose: "720px",
      },
      borderRadius: {
        sm: "3px",
        DEFAULT: "5px",
        lg: "8px",
        xl: "12px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14, 34, 56, 0.05), 0 1px 1px rgba(14, 34, 56, 0.03)",
        cardHover: "0 10px 30px -12px rgba(14, 34, 56, 0.22)",
        header: "0 1px 0 rgba(226, 222, 211, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
