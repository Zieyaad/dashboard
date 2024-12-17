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
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      backgroundOpacity: {
        8: "0.08",
      },
      borderOpacity: {
        24: "0.24",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
