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
                "desc-color": "#f05123",
                "info-color": "#757575",
            },
            width: {
                wSearchSm: "384px",
                wSearchLg: "760px",
                wSearchMd: "550px",
            },
            spacing: {
                18: "72px",
            },
            maxWidth: {
                screen: "1220px",
                wSearchSm: "384px",
                wSearchLg: "760px",
                wSearchMd: "550px",
            },
            animation: {
                slideIn: "slideIn 0.5s linear",
                "rotate-360": "rotate-360 1s linear infinite",
                "rotate-720": "rotate-720 1s linear infinite",
                "blur-down": "blur-down 0.3s linear",
            },
            keyframes: {
                slideIn: {
                    "0%": { transform: "translateY(-60%)" },
                    "100%": { transform: "translateX(0)" },
                },
                "rotate-360": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                "rotate-720": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(-720deg)" },
                },
                "blur-down": {
                    "0%": { opacity: 0.2 },
                    "100%": { opacity: 1 },
                },
            },
            scale: {
                1009: "1.0099",
            },
            boxShadow: {
                cricle: "0 0 0 30px red",
            },
        },
    },
    plugins: [],
};
