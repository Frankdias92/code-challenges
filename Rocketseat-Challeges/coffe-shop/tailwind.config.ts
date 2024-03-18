/** @type {import('tailwindcss').Config } ; */

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stripe/**/*.tsx",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['Baloo_2', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark-orange': '#451A09',
        'pure-yellow': '#FFC700',
        'pale-yellow': '#FFF2CB',
        'pale': '#FFFCF3',
        'darkModerateYello': '#9EB04E',
        'strongRed': '#C53D2D',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};

