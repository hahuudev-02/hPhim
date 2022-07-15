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
                "desc-color": "#f05123"
            },
            width: {
                wSearchSm: '384px',
                wSearchLg: "760px",
                wSearchMd: "550px",
            },
            maxWidth: {
                screen: "1220px",
                wSearchSm: '384px',
                wSearchLg: "760px",
                wSearchMd: "550px",

            },
            animation: {
                slideIn: 'slideIn 0.5s linear',
            },
            keyframes: {
                slideIn: {
                    '0%': {transform: 'translateY(-60%)'},
                    '100%': {transform: 'translateX(0)'},
                }
            },
            
        },
    },
    plugins: [],
};
