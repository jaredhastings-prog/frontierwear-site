import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        blue: "#2563EB",
        frost: "#FFFFFF",
        graphite: "#0F172A",
        steel: "#1E293B",
        smoke: "#64748B",
        amber: "#FF6A00"
      },
      fontFamily: {
        sans: ["Questrial", "Arial", "Helvetica", "sans-serif"],
        display: ["Archivo", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 22px 70px rgba(15, 23, 42, 0.12)",
        amber: "0 18px 48px rgba(255, 106, 0, 0.20)"
      }
    }
  },
  plugins: []
};

export default config;
