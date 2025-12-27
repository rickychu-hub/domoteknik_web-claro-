/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'eco-cream': '#F8F5F0',  // Warm Sand Background
                'eco-green': '#4CAF50',  // Loxone Green
                'eco-dark': '#1A1A1A',   // Charcoal Text
                'eco-gray': '#F3F4F6',   // Soft Gray
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
