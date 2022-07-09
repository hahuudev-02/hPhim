/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#081b27",
                headerBg: "#0c2738",
                yellow: "#f1b722"
            },
            maxWidth: {
                screen: "1220px",
            },
        },
    },
    plugins: [],
};
