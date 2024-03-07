import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        '-darkOrange': '#451A09',
        '-pureYellow': '#FFC700',
        '-paleYellow': '#FFF2CB',
        '-pale': '#FFFCF3',
        '-darkModerateYello': '#9EB04E',
        '-strongRed': '#C53D2D'
      }
    },
  },
  plugins: [],
};
export default config;
