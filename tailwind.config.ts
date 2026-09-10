import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#E85C8D",
        pastel: "#FDE8F0",
        soft: "#FFF5F8",
        accent: "#C83E6D",
        dark: "#2D2529",
        muted: "#6B5A60"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
        "pill": "50px"
      },
      boxShadow: {
        spa: "0 10px 30px rgba(232, 92, 141, 0.1)",
        "spa-lg": "0 20px 60px rgba(232, 92, 141, 0.12)",
        glow: "0 0 60px rgba(232, 92, 141, 0.15)"
      },
      backgroundImage: {
        radialBrand: "radial-gradient(circle at top right, rgba(232, 92, 141, 0.08), transparent 34%), radial-gradient(circle at bottom left, rgba(253, 232, 240, 0.5), transparent 38%)"
      }
    }
  },
  plugins: []
};
export default config;
