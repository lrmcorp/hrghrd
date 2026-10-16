/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './contact.html', './contact/index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
