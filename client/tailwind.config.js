/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'armory-black': '#000000',
                'armory-gray': '#949493',
                'armory-orange': '#FF6000',
                'armory-dark': '#111111',
            },
            fontFamily: {
                'oswald': ['Oswald', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
