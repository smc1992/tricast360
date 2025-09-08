/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Vela Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'vela': ['Vela Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'manrope': ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand': {
          'dark': 'rgb(14, 28, 61)',     // RGB: 14, 28, 61 (from design specs)
          'primary': '#baf742',          // New accent color - bright green
          'secondary': '#a3e635',        // Darker shade of new accent color
          'light': '#d9f99d',           // Lighter shade of new accent color
          'accent': '#baf742',          // Global accent color
        },
        // Global accent color system based on new color
        'accent': {
          '50': '#f7fee7',
          '100': '#ecfccb', 
          '200': '#d9f99d',
          '300': '#bef264',
          '400': '#a3e635',
          '500': '#baf742',             // Main accent color
          '600': '#84cc16',
          '700': '#65a30d',
          '800': '#4d7c0f',
          '900': '#365314',
        },
      },
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
        // Extended sizes for very large screens
        '8xl': ['6rem', { lineHeight: '1' }],     // 96px for 3xl+ screens
        '9xl': ['8rem', { lineHeight: '1' }],     // 128px for 4xl+ screens
        '10xl': ['10rem', { lineHeight: '1' }],   // 160px for 5xl+ screens
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

