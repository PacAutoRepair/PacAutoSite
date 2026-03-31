/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  '#1A3A5C',
        red:   '#C0392B',
        cream: '#FAF7F2',
        sand:  '#E8E0D0',
        slate: '#4A5568',
        gold:  '#D4A017',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
