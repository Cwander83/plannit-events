import React from 'react';

// sections
import Landing from './Landing.jsx';
import Categories from './Categories.jsx';
import About from './About.jsx';
import Plan from './HowTo.jsx';

// components
import FloatingIcon from '../../components/FloatingIcon.jsx';
import EventAd from '../../components/EventAd.jsx';

const Home = () => {
	return (
		<div className="h-full w-full">
			<Landing />
			<EventAd />
			<Categories />
			<Plan />
			<About />
			<FloatingIcon />
		</div>
	);
};

export default Home;
