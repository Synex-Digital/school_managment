/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#0C0C0C",
                Secondary: "#FB2576",
                navcolor: "#1C0033",
                bordercolor: "#C2C2C2",
                ptagcolor: "#303030",
            },
            spacing: {
                container: "1320px",
            },
            fontFamily: {
                in: "'Inter', sans-serif",
            },
            spacing: {
                "30px": "30px",
                "32px": "32px",
                "60px": "60px",
            },
            fontSize: {
              hd: '32px',
            }
        },
    },
    plugins: [],
};
