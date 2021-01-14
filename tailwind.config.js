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
		fontFamily: {
			title: ['Comfortaa', 'cursive'],
			body: ['Poppins', 'sans-serif'],
		},
	},
	variants: {
		extend: {
			textColor: ['hover', 'focus', 'visited', 'active'],
			backgroundColor: ['hover', 'focus', 'visited', 'active'],
			scale: ['hover', 'focus', 'visited', 'active'],
			textDecoration: ['hover', 'focus', 'visited', 'active'],
			transform: ['hover', 'focus', 'visited', 'active'],
			backgroundOpacity: ['hover', 'focus', 'visited', 'active'],
			outline: ['hover', 'focus', 'visited', 'active'],
		},
	},
	plugins: [],
};
