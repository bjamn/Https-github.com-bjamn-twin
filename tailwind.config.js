/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx"
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    50: '#fbf8eb',
                    100: '#f5eccd',
                    200: '#ebd89f',
                    300: '#e0bf6e',
                    400: '#d4a746', // Main Gold
                    500: '#c68e33',
                    600: '#aa6f28',
                    700: '#885223',
                    800: '#704122',
                    900: '#5e3620',
                },
                silver: {
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                script: ['Great Vibes', 'cursive'],
            },
        },
    },
    plugins: [],
}
