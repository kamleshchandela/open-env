/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
        'primary-light': "#22c55e",
        'bg-pale': "#f0fdf4",
        'bg-mint': "#dcfce7",
        'text-dark': "#1e293b",
        'text-medium': "#475569",
        'text-light': "#94a3b8",
        'border-green': "#bbf7d0",
        'dark-green': "#14532d",
        'off-white': "#f8fafc",
        success: "#4ade80",
        warning: "#f59e0b",
        error: "#ef4444"
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        // Soft, realistic multi-stop layered drop shadows replacing standard tailwind sharp shadows
        'realistic-sm': '0px 2px 4px rgba(22, 163, 74, 0.04), 0px 4px 12px rgba(22, 163, 74, 0.04)',
        'realistic': '0px 4px 6px rgba(22, 163, 74, 0.05), 0px 10px 24px rgba(22, 163, 74, 0.08), 0px 20px 48px -12px rgba(22, 163, 74, 0.12)',
        'realistic-lg': '0px 10px 15px rgba(22, 163, 74, 0.08), 0px 24px 48px rgba(22, 163, 74, 0.12), 0px 40px 80px -20px rgba(22, 163, 74, 0.15)',
        'realistic-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.03), inset 0 4px 8px rgba(22, 163, 74, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'flow': 'flow 20s linear infinite',
        'blob': 'blob 15s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(50px, -50px) scale(1.1) rotate(120deg)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.9) rotate(240deg)' },
          '100%': { transform: 'translate(0px, 0px) scale(1) rotate(360deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 15px rgba(22, 163, 74, 0)' },
          '50%': { opacity: 0.9, boxShadow: '0 0 20px rgba(22, 163, 74, 0.4)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        flow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
