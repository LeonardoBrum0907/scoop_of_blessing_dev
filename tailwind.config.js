/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['title', 'sans-serif'],
      },
      backgroundImage: {
        'table': "url('/assets/images/imagem_02.png')",
      },
      colors: {
        'background-color': '#fef1e9',
      }
    },
  },
  plugins: [],
}

