/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                brand: {
                    dark: 'rgba(var(--color-brand-dark) / <alpha-value>)',
                    surface: 'rgba(var(--color-brand-surface) / <alpha-value>)',
                    border: 'rgba(var(--color-brand-border) / <alpha-value>)',
                    neon: 'rgba(var(--color-brand-neon) / <alpha-value>)',
                    text: 'rgba(var(--color-brand-text) / <alpha-value>)',
                    muted: 'rgba(var(--color-brand-muted) / <alpha-value>)'
                }
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scanline': 'scanline 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
                'grid-move': 'gridMove 20s linear infinite',
                'blob': 'blob 7s infinite',
                'bounce-x': 'bounceX 1s infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                gridMove: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(50px)' }
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' }
                },
                bounceX: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(25%)' }
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            }
        }
    },
    plugins: [],
}
