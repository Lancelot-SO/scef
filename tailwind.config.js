/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #65616F, #181921)',
      },
      cardBackground: {
        'card-background': 'linear-gradient(to bottom, #4A4A55, #6C6C75, #B8A9A8)',
      },
    },
  },
  plugins: [],
}