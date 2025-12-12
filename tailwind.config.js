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
        // Backgrounds - Clinical Technical (Light)
        bg: {
          primary: '#F5F5F2',      // Blanc cassé très clair - fond principal
          secondary: '#FFFFFF',    // Blanc pur - sections alternées
          tertiary: '#FAFAF8',    // Blanc cassé léger - cards/overlays
          elevated: '#F0F0ED',    // Gris très clair - éléments surélevés
        },
        // Text Colors
        text: {
          primary: '#000000',      // Noir pur - texte principal
          secondary: '#1A1A1A',     // Gris très foncé - texte secondaire
          muted: '#666666',         // Gris moyen - texte désactivé/secondaire
          accent: '#E63946',       // Rouge technique - accents
        },
        // Accents & CTAs - Rouge technique fin et précis
        accent: {
          primary: '#E63946',      // Rouge technique principal
          secondary: '#DC143C',    // Rouge accent profond
          dark: '#C41E3A',         // Rouge foncé - hover states
          light: '#FF4757',         // Rouge clair - highlights
        },
        // Borders - Subtils sur fond clair
        border: {
          light: '#E5E5E5',        // Bordure claire
          medium: '#CCCCCC',       // Bordure moyenne
          dark: '#999999',         // Bordure foncée
          accent: '#E63946',       // Bordure accent rouge
        },
        // Legacy support
        red: {
          600: '#E63946',
          700: '#D62839',
        },
        gray: {
          50: '#F5F5F2',
          100: '#F0F0ED',
          200: '#E5E5E5',
          300: '#CCCCCC',
          950: '#000000',
        }
      },
      fontFamily: {
        // Monospace pour sous-titres et textes techniques
        mono: ['JetBrains Mono', 'Roboto Mono', 'Courier New', 'monospace'],
        // Sans-serif grasse uniquement pour très gros titres
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Legacy
        primary: ['JetBrains Mono', 'monospace'],
        body: ['JetBrains Mono', 'monospace'],
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
