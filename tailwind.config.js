/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-gray-100': '#E5E7EB',
        'c-gray-900': '#111928',
        'accent': '#ff5a1f',
        'accent-light': '#fff8f1',
        'success': '#0e9f6e',
        'gray-1': '#4b5563',
      },
    },
  },
  plugins: [],
}

