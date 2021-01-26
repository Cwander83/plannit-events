import React, { Suspense, lazy } from 'react';

// sections
const Landing = lazy(() => import('./Landing.jsx'));
const Categories = lazy(() => import('./Categories.jsx'));
const About = lazy(() => import('./About.jsx'));
const Plan = lazy(() => import('./HowTo.jsx'));

// components
import FloatingIcon from '../../components/FloatingIcon.jsx';
import EventAd from '../../components/EventAd.jsx';
//import Loading from '../../components/Loading.jsx';

const Home = () => {
	return (
		<div className="h-full w-full">
			<Suspense fallback={<div></div>}>
				<Landing />
				<EventAd />
				<Categories />
				<Plan />
				<About />
				<FloatingIcon />
			</Suspense>
		</div>
	);
};

export default Home;
