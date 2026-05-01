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
        navy: "#0e1b4d",
        blue: "#4770db",
        frost: "#eff0f5",
        graphite: "#05070c",
        steel: "#141a24",
        smoke: "#a8b2c7",
        amber: "#ff6c2f"
      },
      fontFamily: {
        sans: ["Questrial", "Arial", "Helvetica", "sans-serif"],
        display: ["Archivo", "Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(71, 112, 219, 0.22)",
        amber: "0 0 36px rgba(255, 108, 47, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
