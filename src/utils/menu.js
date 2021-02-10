export const links = [
	{
		title: "Plannit's Services",
		location: '/#categories',
	},
	{
		title: 'How to Plan',
		location: '/#how-to-plan',
	},
	{
		title: 'About Us',
		location: '/#about',
	},
];

export const scrollWithOffset = (el, offset) => {
	const elementPosition = el.offsetTop - offset;
	window.scroll({
		top: elementPosition,
		left: 0,
		behavior: 'smooth',
	});
};
