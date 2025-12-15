/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary-rgb) / <alpha-value>)', // Dynamic Theme Color with Opacity Support
                secondary: '#D6E4E2', // Light green bg
                accent: '#EAB3B3', // Soft pink
                dark: '#1F2937',
                light: '#F9FAFB',
                surface: '#FFFFFF',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
