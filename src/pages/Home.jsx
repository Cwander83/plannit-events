import React from 'react';

import Categories from './Categories.jsx';
import About from './About.jsx';
import Plan from './HowTo.jsx';
import FloatingIcon from '../components/FloatingIcon.jsx';

const Home = () => {
	return (
		<div id="#" className="h-full w-full">
			<Categories />
			<Plan />
			<About />
			<FloatingIcon />
		</div>
	);
};

export default Home;
