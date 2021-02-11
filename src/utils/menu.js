export const links = [
	{
		title: 'Services',
		location: '/#categories',
	},
	{
		title: 'How to Plan',
		location: '/#how-to-plan',
	},
	{
		image: 'Logo',
		className: "w-24 md:w-40",
		location: '/#',
		alt:"Plannit event company"
	},

	{
		title: 'About',
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
