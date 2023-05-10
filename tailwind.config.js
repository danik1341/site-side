/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'calibribold': ['calibribold', 'sans-serif'],
        'calibriitalic': ['calibriitalic', 'sans-serif'],
        'calibrilight': ['calibrilight', 'sans-serif'],
        'calibriregular': ['calibriregular', 'sans-serif'],
      },
      backgroundColor: {
        'primary': '#2B2B2B'
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
