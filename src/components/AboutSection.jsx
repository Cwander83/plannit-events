import React from 'react';

const AboutSection = ({
	primarySlot,
	secondarySlot,
	reverseOrder,
	fade,
	delay,
}) => (
	<section className="px-4 sm:px-6 py-5 lg:py-0">
		<div
			// data-aos="fade"
			// data-aos-easing="ease-in-out"
			// data-aos-delay="300"
			// data-aos-once="false"
			// data-aos-duration="600"
			// data-aos-mirror="true"
			className="w-auto mx-0 items-center justify-center flex flex-col"
		>
			<div className=" flex justify-center md:justify-start w-full">
				{primarySlot}
			</div>
			<div
				className={`mt-0 w-full  ${
					reverseOrder && `order-last lg:order-first`
				}`}
			>
				{secondarySlot}
			</div>
		</div>
	</section>
);

export default AboutSection;
