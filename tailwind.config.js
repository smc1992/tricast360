/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
      maxWidth: {
        '8xl': '90rem',   // 1440px
        '9xl': '100rem',  // 1600px
        '10xl': '120rem', // 1920px
      },
      fontSize: {
        'hero': ['clamp(3rem, 5vw, 7rem)', { lineHeight: '1.1' }],
        'section-title': ['clamp(2rem, 3.5vw, 5rem)', { lineHeight: '1.2' }],
        'large': ['clamp(1rem, 1.25vw, 1.5rem)', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}

