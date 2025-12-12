/**
 * GENESIS Design System - Tokens
 * Style: Transformation Physique / Under Armour - Puissance & Performance
 * Inspiré de l'esthétique technique et data-driven
 */

export const colors = {
  // Backgrounds
  background: {
    primary: '#000000',      // Noir pur - fond principal
    secondary: '#0A0A0A',    // Noir profond - sections alternées
    tertiary: '#1A1A1A',     // Gris anthracite - cards/overlays
    elevated: '#2B2B2B',     // Gris foncé - éléments surélevés
  },

  // Overlay/Panels (style infographic)
  overlay: {
    offWhite: '#F5F5F0',     // Blanc cassé - panneau central principal
    beige: '#E8E8E3',        // Beige technique - variante
    cream: '#FAFAF5',        // Crème - alternative légère
  },

  // Text Colors
  text: {
    primary: '#000000',      // Noir pur - texte principal sur overlay
    secondary: '#1A1A1A',   // Gris très foncé - texte secondaire
    light: '#FFFFFF',        // Blanc - texte sur fond sombre
    muted: '#666666',        // Gris moyen - texte désactivé/secondaire
    accent: '#E63946',       // Rouge - texte accent
  },

  // Accents & CTAs
  accent: {
    primary: '#E63946',      // Rouge technique principal
    secondary: '#DC143C',    // Rouge accent profond
    dark: '#C41E3A',         // Rouge foncé - hover states
    light: '#FF4757',        // Rouge clair - highlights
  },

  // Borders & Dividers
  border: {
    dark: '#2A2A2A',         // Bordure sombre
    medium: '#404040',       // Bordure moyenne
    light: '#666666',        // Bordure claire
    accent: '#E63946',       // Bordure accent rouge
  },

  // Overlay Text (semi-transparent technical data)
  overlayText: {
    primary: 'rgba(102, 102, 102, 0.7)',    // Gris semi-transparent
    secondary: 'rgba(255, 255, 255, 0.4)',  // Blanc semi-transparent
    accent: 'rgba(230, 57, 70, 0.6)',       // Rouge semi-transparent
  },
};

export const typography = {
  // Font Families
  fonts: {
    primary: ['Rajdhani', 'sans-serif'],           // Technique, condensée, puissante
    secondary: ['Orbitron', 'sans-serif'],        // Futuriste, techno
    body: ['Inter', 'sans-serif'],                // Moderne, lisible
    mono: ['JetBrains Mono', 'monospace'],        // Technique, code-like
    display: ['Barlow Condensed', 'sans-serif'],  // Condensée, impact
  },

  // Font Sizes
  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
  },

  // Font Weights
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Letter Spacing
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Line Heights
  leading: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  md: '0.25rem',    // 4px
  lg: '0.5rem',     // 8px
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
  accent: '0 0 20px rgba(230, 57, 70, 0.3)',
};

export const transitions = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
};

// Style oratoire - Transformation Physique
export const copyStyle = {
  tone: 'powerful', // powerful, technical, imperative
  
  patterns: {
    imperative: [
      'PUSH BEYOND YOUR LIMITS',
      'ACTIVATE YOUR POTENTIAL',
      'ELEVATE YOUR OUTPUT',
      'BREAK THE THRESHOLD',
      'MAXIMIZE YOUR LOAD',
      'INITIATE TRANSFORMATION',
      'UNLOCK YOUR SYSTEM',
      'OPTIMIZE YOUR PROTOCOL',
    ],
    
    technical: [
      'THRESHOLD BREAKING PROTOCOL',
      'SYSTEM INIT: TRANSFORMATION',
      'OUTPUT LOAD 80-90%',
      'RPE 8-9',
      'MOVEMENT PROTOCOL',
      'TARGET REP MODE',
      'CONDITIONING NODE',
      'FOUNDATION WITHOUT SYSTEMIC FATIGUE',
    ],
    
    powerful: [
      'CONTINUE FOUNDATION WITHOUT SYSTEMIC FATIGUE',
      'PROGRESS BEYOND TARGET',
      'PUSHING THRESHOLD WHILE MAINTAINING RECOVERY',
      'ELEVATE YOUR PERFORMANCE',
      'TRANSFORM YOUR BIOLOGY',
      'ACTIVATE YOUR METABOLIC SYSTEM',
    ],
  },
  
  vocabulary: {
    technical: [
      'PROTOCOL', 'THRESHOLD', 'LOAD', 'OUTPUT', 'RPE',
      'SYSTEM', 'NODE', 'PHASE', 'MODE', 'INIT',
      'VECTOR', 'SIGNAL', 'SYNC', 'OFFSET', 'RATE',
    ],
    action: [
      'PUSH', 'ACTIVATE', 'ELEVATE', 'BREAK', 'MAXIMIZE',
      'UNLOCK', 'OPTIMIZE', 'TRANSFORM', 'PROGRESS',
    ],
    transformation: [
      'TRANSFORMATION', 'PERFORMANCE', 'POTENTIAL',
      'FOUNDATION', 'RECOVERY', 'OUTPUT',
    ],
  },
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  copyStyle,
};

