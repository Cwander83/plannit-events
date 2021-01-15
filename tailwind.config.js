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
			textColor: ['hover', 'focus', 'active'],
			backgroundColor: ['hover', 'focus', 'active'],
			scale: ['hover', 'focus', 'active'],
			textDecoration: ['hover', 'focus', 'active'],
			transform: ['hover', 'focus', 'active'],
			backgroundOpacity: ['hover', 'focus', 'active'],
			outline: ['hover', 'focus', 'active'],
			borderColor: ['hover', 'focus', 'active'],
			borderWidth: ['hover', 'focus', 'active'],
			ringColor: ['focus'],
			ringWidth: ['focus'],
			fontSize: ['focus'],
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
