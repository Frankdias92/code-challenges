import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./public/font/**/*.{ttf}",
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
        salsa: ['Salsa', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
