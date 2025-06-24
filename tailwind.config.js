// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        darumadrop: ['"Darumadrop One"', 'cursive'],
        sanchez: ['"Sanchez"', 'serif'],
        pacifico: ['"Pacifico"']
      },
    },
  },
  plugins: [],
}
