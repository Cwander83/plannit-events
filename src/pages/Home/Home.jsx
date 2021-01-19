import React from 'react';

// sections
import Landing from './Landing.jsx';
import Categories from './Categories.jsx';
import About from './About.jsx';
import Plan from './HowTo.jsx';

// components
import FloatingIcon from '../../components/FloatingIcon.jsx';

const Home = () => {
	return (
		<div className="h-full w-full">
			<Landing />
			<Categories />
			<Plan />
			<About />
			<FloatingIcon />
		</div>
	);
};

export default Home;
