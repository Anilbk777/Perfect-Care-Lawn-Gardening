/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: "#15803d",
                    dark: "#166534",
                    light: "#dcfce7",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            keyframes: {
                "ken-burns": {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(1.15)" },
                }
            },
            animation: {
                "ken-burns": "ken-burns 20s ease-out infinite alternate",
            },
        },
    },
    plugins: [],
}
