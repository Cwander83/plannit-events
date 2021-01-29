import React from 'react';

import SectionTitle from '../../components/SectionTitle.jsx';
import AboutSection from '../../components/AboutSection.jsx'

const About = () => {
	return (
		<div id="about" className="py-12">
			<div className=" max-w-full mx-auto px-0 sm:px-6 lg:px-0 ">
				<SectionTitle title="Get to Know Plannit" />
			</div>
			<AboutSection 
			primarySlot={
				<div className="lg:pr-30 xl:pr-40 lg:pl-16 xl:pl-20">
							<h3 className="text-3xl font-semibold leading-tight">
							What is Plannit?

							</h3>
							
						</div>
			}
			secondarySlot={
				<div className="lg:pr-30 xl:pr-40 lg:pl-16 xl:pl-20">
							
							<p className="mt-8 text-xl text-gray-dark leading-relaxed">
							Plannit is an all-inclusive event-planning business where our customers come to us as a single source to plan their extraordinary moment. Extraordinary moments are created by each customer’s individuality &#38; uniqueness. With Plannit, customers are able to bring their moment to life through customization, while also saving time &#38; supporting local businesses! Here’s how: With Plannit, we provide customers with venue options, rentals, catering, &#38; exclusive entertainment to name a few.
							</p>
						</div>
			}/>
		</div>
	);
};

export default About;
