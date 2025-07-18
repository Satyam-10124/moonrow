// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated custom colors to match the specific dark tones in the provided images
        'moonflow-dark-blue': '#0A0D17', // The primary background color
        'moonflow-card-bg': '#1A202E',  // Background for cards and secondary elements
        'moonflow-border': '#2C3240',   // Border color for cards and elements
        'moonflow-text-primary': '#F9FAFB', // White/light text
        'moonflow-text-secondary': '#A0AEC0', // Gray text for descriptions/labels
        'moonflow-purple': '#A78BFA',
        'moonflow-green-cyan': '#06B6D4',
        'moonflow-pink': '#EC4899',
      },
      keyframes: {
        rotateBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      animation: {
        rotateBorder: 'rotateBorder 6s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        blob: 'blob 7s infinite',
      },
    },
  },
  plugins: [],
}