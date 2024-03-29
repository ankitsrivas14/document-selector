/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-dark': '#ff5a1f',
        'accent-light': '#fff8f1',
        'success': '#0e9f6e',
        'gray-1': '#4b5563',
        'gray-2': '#f9fafb',
        'gray-3': '#E5E7EB',
        'gray-4': '#111928',
        'gray-5': '#f3f4f6',
        'gray-6': '#6b7280',
        'gray-7': '#292D53',
      },
    },
  },
  plugins: [],
}

