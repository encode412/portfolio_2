/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        dark: '#2F2F2F',
        secondary: "#174677",
      },
    },
  },
  plugins: [],
};
