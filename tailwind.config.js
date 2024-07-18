/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      primary: '#0A2342',
      secondary: '#F46197',
      font_primary: '#FFFDF7',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'selector',
};
