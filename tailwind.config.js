/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './design-system/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: {
          primary: '#000000',
          secondary: '#0A0A0A',
          tertiary: '#1A1A1A',
          elevated: '#2B2B2B',
        },
        // Overlay/Panels
        overlay: {
          offWhite: '#F5F5F0',
          beige: '#E8E8E3',
          cream: '#FAFAF5',
        },
        // Text Colors
        text: {
          primary: '#000000',
          secondary: '#1A1A1A',
          light: '#FFFFFF',
          muted: '#666666',
          accent: '#E63946',
        },
        // Accents & CTAs
        accent: {
          primary: '#E63946',
          secondary: '#DC143C',
          dark: '#C41E3A',
          light: '#FF4757',
        },
        // Borders
        border: {
          dark: '#2A2A2A',
          medium: '#404040',
          light: '#666666',
          accent: '#E63946',
        },
        // Legacy support
        red: {
          600: '#E63946',
          700: '#D62839',
        },
        gray: {
          950: '#0F0F0F',
        }
      },
      fontFamily: {
        primary: ['Rajdhani', 'sans-serif'],
        secondary: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Barlow Condensed', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      boxShadow: {
        'accent': '0 0 20px rgba(230, 57, 70, 0.3)',
      },
    },
  },
  plugins: [],
}
