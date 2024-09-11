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
    extend: {
      animation: {
        meteor: 'meteor 5s linear infinite',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
          },
        },
      },
    },
    screens: {
      xs: '250px',
      sm: '600px',
      md: '900px',
      lg: '1280px',
      xl: '2400px',
    },
  },
  plugins: [],
  darkMode: 'selector',
};
