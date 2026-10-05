/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0d14',
      },
      fontFamily: {
        sans: ['var(--font-inter, system-ui)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope, system-ui)', 'Manrope', 'system-ui', 'sans-serif'],
        grotesk: ['var(--font-grotesk, system-ui)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
