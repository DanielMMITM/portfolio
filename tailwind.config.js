/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      primary: '#0A2342',
      secondary: '#F46197',
      tertiary: '#FFFDF7',
      transparent: 'transparent',

      primaryLight: '#FFFDF7',
      secondaryLight: '#2364AA',
      tertiaryLight: '#000000',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'selector',
};
