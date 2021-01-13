const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.html', './src/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			primary: '#183859',
			secondary: '#EFB71B',
			gray: {
				lightest: '#fafafa',
				light: '#d4d4d4',
				dark: '#737373',
				darkest: '#171717',
			},
			black: '#000000',
			white: '#ffffff',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
