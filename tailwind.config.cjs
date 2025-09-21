/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'yuhu-blue-700': '#1965C6',
        'yuhu-blue-400': '#3EA0E3',
        'yuhu-green-500': '#6AC144',
        'yuhu-green-300': '#A9E46B',
        'yuhu-gray-100': '#F6F7FB',
        'yuhu-text': '#0E1420'
      },
      boxShadow: {
        'card': '0 6px 14px rgba(16,24,40,0.06)'
      },
      borderRadius: {
        'xl': '12px'
      }
    }
  },
  plugins: []
}
