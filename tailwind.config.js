/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // Small devices such as mobile phones
      sm: '480px',
      // => @media (min-width: 640px) { ... }

      // Larger devices like tablets
      md: '768px',
      // => @media (min-width: 768px) { ... }

      // Medium size laptops and screens
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      // Pantallas más grandes como las de escritorio
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      // Extra large screens or high resolution screens
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      slate: colors.slate,
      zinc: colors.zinc,
      gray: colors.gray,
      neutral: colors.slate,
      stone: colors.stone,
    },
  },
  plugins: [],
};
