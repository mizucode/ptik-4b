/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
            },
            colors: {
                dsr: "#1455cd",
                ylw: "#f4bc2b",
            },
            screens: {
                "2xl": "1320px",
            },
        },
        plugins: [],
    },
};
