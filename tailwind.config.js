/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'myungjo': ['NanumMyeongjoBold', 'ui-sans-serif', ' system-ui', ' sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    },
    screens: {
      'sm': '640px',
      'md': '1024px',
      'lg': '1280px',
    },
  },
  plugins: [],
}