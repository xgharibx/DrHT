import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep space premium palette
        vanta: '#0a0a0f',
        'deep-navy': '#0d1117',
        'space-blue': '#161b22',
        'cosmic-purple': '#1a1040',
        'nebula-blue': '#0d2137',
        // Gold accent system
        'gold-primary': '#d4a853',
        'gold-light': '#f0d68a',
        'gold-dark': '#a07c2e',
        'gold-glow': '#ffeed4',
        // Celestial greens
        'quran-green': '#1a6b3c',
        'verse-green': '#2dd4a8',
        'emerald-divine': '#10b981',
        // Text
        'text-primary': '#e6edf3',
        'text-secondary': '#8b949e',
        'text-muted': '#484f58',
        // Borders
        'border-subtle': '#21262d',
        'border-gold': 'rgba(212, 168, 83, 0.3)',
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        quran: ['Amiri Quran', 'Amiri', 'serif'],
      },
      fontSize: {
        'verse-xl': ['2.5rem', { lineHeight: '3.5rem', letterSpacing: '0.02em' }],
        'verse-2xl': ['3rem', { lineHeight: '4.2rem', letterSpacing: '0.02em' }],
        'verse-3xl': ['3.75rem', { lineHeight: '5.25rem', letterSpacing: '0.02em' }],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'stars-drift': 'starsDrift 120s linear infinite',
        'verse-reveal': 'verseReveal 1.5s ease-out forwards',
        'particle-rise': 'particleRise 4s ease-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        starsDrift: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-100%) rotate(360deg)' },
        },
        verseReveal: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        particleRise: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(-100px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212,168,83,0.3), transparent)',
        'cosmic-gradient': 'linear-gradient(180deg, #0a0a0f 0%, #0d1117 30%, #1a1040 60%, #0d2137 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(212, 168, 83, 0.15)',
        'gold-md': '0 0 20px rgba(212, 168, 83, 0.2)',
        'gold-lg': '0 0 40px rgba(212, 168, 83, 0.3)',
        'gold-glow': '0 0 60px rgba(212, 168, 83, 0.4), 0 0 120px rgba(212, 168, 83, 0.1)',
        'cosmic': '0 0 80px rgba(13, 33, 55, 0.5)',
        'verse': '0 4px 30px rgba(45, 212, 168, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
