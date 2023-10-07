/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#694f4f',
        'search-color': '#f5f5f5ea',
    },
    textColor: {
      'text-color': '#694f4f',
    },
  },
  plugins: [],
}
}