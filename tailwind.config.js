/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E31E24',
          'red-dark': '#B8161B',
          black: '#1A1A1A',
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EDEDED',
            300: '#DDDDDD',
            400: '#BBBBBB',
            500: '#8A8A8A',
            600: '#5C5C5C',
            700: '#3D3D3D',
            800: '#262626',
            900: '#161616',
          },
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', '-apple-system', 'Roboto', 'Arial', 'sans-serif'],
        display: ['"Segoe UI"', 'system-ui', '-apple-system', 'Roboto', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        premium: '0 20px 60px -15px rgba(0,0,0,0.25)',
        card: '0 10px 30px -10px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};
