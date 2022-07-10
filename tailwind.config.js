/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#081b27",
                headerBg: "#0c2738",
                yellow: "#f1b722",
                "footer-bg": "#181821",
                "dark-green": "#74a8cf",
                "dark-gray": "#a9b3bb",
            },
            maxWidth: {
                screen: "1220px",
                wSearch: "760px"
            },
        },
    },
    plugins: [],
};
