import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "explore-color-bg-primary": "#1B1B1B",
        "explore-color-bg-secondary": "#111111",
        "explore-color-text-first": "#676767",
        "explore-color-text-second": "#F2F2F2",
        "explore-color-offShore": "#F59D1A",
      },
      fontFamily: {
        'poppins': 'Poppins',
        'caveat': ['Caveat']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
