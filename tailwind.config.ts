import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: "#F4EFE6",
          muted: "#E8E0D4",
          deep: "#D9CFC0",
        },
        charcoal: {
          DEFAULT: "#2C2A26",
          soft: "#4A4740",
          muted: "#6B665C",
        },
        brass: {
          DEFAULT: "#B8A06E",
          light: "#C9B88A",
          dark: "#8A7548",
        },
        ink: "#1A1917",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "12col": "var(--max-content)",
      },
      spacing: {
        gutter: "var(--gutter)",
        section: "var(--section-y)",
      },
      boxShadow: {
        soft: "0 24px 48px -12px rgba(44, 42, 38, 0.12)",
        lift: "0 12px 32px -8px rgba(44, 42, 38, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
