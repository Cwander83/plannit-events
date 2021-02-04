import React from 'react';

import SectionTitle from '../../components/SectionTitle.jsx';
import AboutSection from '../../components/AboutSection.jsx';

const About = () => {
	return (
		<div id="about" className="py-12">
			<div className=" max-w-full mx-auto px-0 sm:py-6 sm:px-6">
				<SectionTitle title="Get to Know Plannit" />
			</div>
			<AboutSection
				primarySlot={
					<div className=" md:ml-10">
						<h3 className="text-2xl font-semibold leading-tight w-full">
							What is Plannit?
						</h3>
					</div>
				}
				secondarySlot={
					<div className="lg:pr-30 xl:pr-40 lg:pl-16 xl:pl-20 md:mx-28 md:mb-8">
						<p className="mt-8 text-xl text-gray-dark leading-relaxed">
							&emsp;
							<span className="text-black text-3xl text-bold font-title">
								P
							</span>
							lannit is an all-inclusive event-planning business where our
							customers come to us as a single source to plan their
							extraordinary moment. Extraordinary moments are created by each
							customer’s individuality &#38; uniqueness. With Plannit, customers
							are able to bring their moment to life through customization,
							while also saving time &#38; supporting local businesses! Here’s
							how: With Plannit, we provide customers with venue options,
							rentals, catering, &#38; exclusive entertainment to name a few.
						</p>
					</div>
				}
			/>
			<AboutSection
				primarySlot={
					<div className=" md:ml-10">
						<h3 className="text-2xl font-semibold leading-tight">
							Who We Are.
						</h3>
					</div>
				}
				secondarySlot={
					<div className="lg:pr-30 xl:pr-40 lg:pl-16 xl:pl-20 md:mx-28 md:mb-8">
						<p className="mt-8 text-xl text-gray-dark leading-relaxed">
							&emsp;
							<span className="text-black text-3xl text-bold font-title">
								P
							</span>
							lannit was created to alleviate customers of a time-consuming,
							stressful process of creating an event. Plannit is a convenient
							one-stop-shop, making event-planning fun, simple, &#38; easy to
							navigate. All our customers have to do is choose what they want.
						</p>
					</div>
				}
			/>
			<AboutSection
				primarySlot={
					<div className=" md:ml-10">
						<h3 className="text-2xl font-semibold leading-tight">
							Who Do We Cater To?
						</h3>
					</div>
				}
				secondarySlot={
					<div className="lg:pr-30 xl:pr-40 lg:pl-16 xl:pl-20 md:mx-28 md:mb-8">
						<p className="mt-8 text-xl text-gray-dark leading-relaxed">
							To Our Customers: <br />
							&emsp;
							<span className="text-black text-3xl text-bold font-title">
								P
							</span>
							lannit caters to busy parents, families, young adults &#38;
							everyone in between because we understand how precious your time
							is. Plannit offers the convenience you need to plan an event you
							&#38; your loved ones will enjoy while also knowing that planning
							the event itself was a wonderful experience.
						</p>
					</div>
				}
			/>
		</div>
	);
};

export default About;
