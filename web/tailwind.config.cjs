/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/Fundo.svg')",
      },
    },
  },
  plugins: [],
};
