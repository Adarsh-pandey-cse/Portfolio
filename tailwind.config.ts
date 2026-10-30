import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core surfaces
        'surface': '#fdf9f1',
        'surface-dim': '#dddad2',
        'surface-bright': '#fdf9f1',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f7f3eb',
        'surface-container': '#f1ede6',
        'surface-container-high': '#ece8e0',
        'surface-container-highest': '#e6e2da',
        'canvas-almond': '#F4EFEA',
        // Text
        'on-surface': '#1c1c17',
        'on-surface-variant': '#444557',
        'ink-black': '#111111',
        'ink-muted': '#52525B',
        'inverse-surface': '#31302b',
        'inverse-on-surface': '#f4f0e8',
        // Borders
        'outline': '#757689',
        'outline-variant': '#c5c5da',
        'border-dark': '#111111',
        // Background
        'background': '#fdf9f1',
        'on-background': '#1c1c17',
        'surface-variant': '#e6e2da',
        // Primary (Electric Blue)
        'primary': '#001dcc',
        'on-primary': '#ffffff',
        'primary-container': '#1833ff',
        'on-primary-container': '#c7cbff',
        'inverse-primary': '#bdc2ff',
        'primary-fixed': '#dfe0ff',
        'primary-fixed-dim': '#bdc2ff',
        'on-primary-fixed': '#000965',
        'on-primary-fixed-variant': '#0020dd',
        'surface-tint': '#283fff',
        // Secondary (Yellow)
        'secondary': '#735c00',
        'on-secondary': '#ffffff',
        'secondary-container': '#fed01b',
        'on-secondary-container': '#6f5900',
        'secondary-fixed': '#ffe083',
        'secondary-fixed-dim': '#eec200',
        'on-secondary-fixed': '#231b00',
        'on-secondary-fixed-variant': '#574500',
        // Tertiary (Purple)
        'tertiary': '#5300b7',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#6d24de',
        'on-tertiary-container': '#dac6ff',
        'tertiary-fixed': '#eaddff',
        'tertiary-fixed-dim': '#d2bbff',
        'on-tertiary-fixed': '#25005a',
        'on-tertiary-fixed-variant': '#5a00c6',
        // Error
        'error': '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        // Pastels
        'pastel-butter': '#FEF08A',
        'pastel-mint': '#74DEB6',
        'pastel-sky': '#BAE6FD',
        'pastel-peach': '#FED7AA',
        'pastel-lavender': '#DDD6FE',
      },
      fontFamily: {
        'display': ['"Bricolage Grotesque"', 'sans-serif'],
        'body': ['"Bricolage Grotesque"', 'sans-serif'],
        'mono': ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        'headline-xl': ['clamp(40px,6vw,64px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'headline-lg': ['clamp(32px,4.5vw,44px)', { lineHeight: '1.12', letterSpacing: '-0.025em', fontWeight: '800' }],
        'headline-md': ['clamp(22px,3vw,28px)', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-sm': ['clamp(18px,2.5vw,22px)', { lineHeight: '1.27', letterSpacing: '-0.015em', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '500' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.43', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '1.28', letterSpacing: '0.02em', fontWeight: '700' }],
        'label-md': ['12px', { lineHeight: '1.33', letterSpacing: '0.04em', fontWeight: '700' }],
        'label-sm': ['11px', { lineHeight: '1.27', letterSpacing: '0.05em', fontWeight: '700' }],
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        'full': '9999px',
      },
      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'gutter': '1.5rem',
        'gutter-mobile': '1rem',
        'margin': '3rem',
        'margin-mobile': '1.25rem',
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'marquee2': 'marquee2 20s linear infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'hard': '4px 4px 0px #111111',
        'hard-sm': '2px 2px 0px #111111',
        'hard-lg': '6px 6px 0px #111111',
        'hard-yellow': '4px 4px 0px #FACC15',
        'hard-blue': '4px 4px 0px #1833FF',
        'hard-mint': '4px 4px 0px #74DEB6',
        'hard-peach': '4px 4px 0px #FED7AA',
        'hard-lavender': '4px 4px 0px #DDD6FE',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}

export default config
