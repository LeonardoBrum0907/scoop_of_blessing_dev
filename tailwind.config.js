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
        'guiamobile': "url('/assets/imagenspipo/image_mobile.png')",
        'guiadesktop': "url('/assets/imagenspipo/image_desktop.png')"
      },
      colors: {
        'background-color': '#fef1e9',
        'text-color': '#613c33',
        'orange': '#e94c32',
        'purple': '#634292',
        'pink': '#ee7fa4',
        
      }
    },
  },
  plugins: [],
}

