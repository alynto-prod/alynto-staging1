/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'armory-red': '#B54A3C',
                'armory-orange': '#D45D48',
                'deep-black': '#0A0A0A',
                'off-white': '#F5F5F5',
            },
            fontFamily: {
                bebas: ['"Bebas Neue"', 'sans-serif'],
                source: ['"Source Sans Pro"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
