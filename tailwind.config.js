/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-secondary': '#0a0a1f',
        'dark-tertiary': '#141428',
        'primary': '#00d4ff',
        'accent': '#9b59b6',
        'text-primary': '#ffffff',
        'text-secondary': '#a8b2d1',
        'glass': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'neon-cyan': '#00d4ff',
        'neon-purple': '#9b59b6',
        'neon-blue': '#0080ff',
        'neon-green': '#00ff00',
        'gradient-start': '#000000',
        'gradient-end': '#0a0a1f'
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end)',
        'float': 'float 6s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'glow-expand': 'glow-expand 0.3s ease-out',
        'slide-up': 'slideUp 0.8s ease-in-out',
        'slide-in-left': 'slideInLeft 0.8s ease-in-out',
        'slide-in-right': 'slideInRight 0.8s ease-in-out',
        'scale-in': 'scaleIn 0.8s ease-in-out',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'grid-move': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-50px, -50px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'glow-expand': {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 255, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px 10px rgba(0, 255, 255, 0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' }
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, rgba(0, 255, 255, 0.1) 0deg, transparent 360deg)',
        'neon-gradient': 'linear-gradient(135deg, #00ffff, #8000ff)',
        'grid-pattern': 'linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)'
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundSize: {
        'grid': '50px 50px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
