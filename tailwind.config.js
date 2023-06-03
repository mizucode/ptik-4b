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
				niger: "#212529",
				biru: "#1390ff",
				kuning: "#ffd93d",
				abu: "#454545",
				dark: "#232323",
				putih: "#f7f7f7",
				text: "#393C43",
			},
			screens: {
				"2xl": "1320px",
			},
		},

		plugins: [],
	},
};
