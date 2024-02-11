/** @type {import('tailwindcss').Config} */
export default {
  // estou dizendo quais os arquivos vão ter o twind
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

