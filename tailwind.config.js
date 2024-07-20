/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      primary: '#0A2342',
      secondary: '#F46197',
      tertiary: '#FFFDF7',
      font_primary: '#FFFDF7',

      primaryLight: '#FFFDF7',
      secondaryLight: '#F46197',
      tertiaryLight: '#FFFDF7',

      font_primaryLight: '#000000',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'selector',
};
