/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:    '#1B3A4B',
        red:     '#A63D2F',
        cream:   '#FAF6F0',
        sand:    '#E6DCD0',
        slate:   '#52524E',
        gold:    '#C8992E',
        brown:   '#5C4033',
        warmgray:'#F0EBE3',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
