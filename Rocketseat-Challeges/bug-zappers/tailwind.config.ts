import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        salsa: ['Salsa', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'bug-blue': '#44D5FF',
        'bug-darkBlue': '#121A25',
        'bug-orange': '#FCBC41',
        'bug-pale': '#F7F7F7',
      }
    },
  },
  plugins: [],
};
export default config;
