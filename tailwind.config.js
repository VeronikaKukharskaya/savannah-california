/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: '#D4AF37',      // заменяет border-border
        ring: '#D4AF37',        // заменяет outline-ring/50
        background: '#000000',
        foreground: '#ffffff',
      },
    },
  },
  plugins: [],
}
