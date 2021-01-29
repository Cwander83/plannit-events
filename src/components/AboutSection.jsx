import React from 'react';

const AboutSection = ({
	primarySlot,
	secondarySlot,
	reverseOrder,
	fade,
	delay,
}) => (
	<section className="py-5 lg:py-0">
		<div
			
			className="w-auto mx-0 items-center justify-center flex flex-col lg:flex-row"
		>
			<div className="lg:w-1/3 flex  ">{primarySlot}</div>
			<div
				className={`mt-10 lg:mt-0 w-full lg:w-2/3 ${
					reverseOrder && `order-last lg:order-first`
				}`}
			>
				{secondarySlot}
			</div>
		</div>
	</section>
);

export default AboutSection;
