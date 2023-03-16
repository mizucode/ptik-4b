/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
            },
            colors: {
                dsr: "#1455cd",
                ylw: "#f4bc2b",
            },
        },
        plugins: [],
    },
};
