/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.8s linear infinite',
        'spin-medium': 'spin 1.5s linear infinite',
      }
    },
  },
  plugins: [],
};
