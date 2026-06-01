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
        frost: "#F8FAFC",
        graphite: "#05070c",
        steel: "#1E293B",
        smoke: "#CBD5E1",
        amber: "#FF6A00"
      },
      fontFamily: {
        sans: ["Questrial", "Arial", "Helvetica", "sans-serif"],
        display: ["Archivo", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 70px rgba(37, 99, 235, 0.16)",
        amber: "0 20px 52px rgba(255, 106, 0, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
