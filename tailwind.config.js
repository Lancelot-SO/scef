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
      screens: {
        'msm': '360px',
        'xsm': '375px',
        'vsm': '393px',
        'small': '430px',
        'tablet': '570px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'large': '1343px',
        '2xl': '1536px',
        'xxl': '1620px',
        'vl': '1728px',
        '3xl': '1800px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
}