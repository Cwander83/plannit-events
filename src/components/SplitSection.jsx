import React from 'react';

const SplitSection = ({
	primarySlot,
	secondarySlot,
	reverseOrder,
	fade,
	delay,
}) => (
	<section className="py-5 lg:py-0">
		<div
			data-aos={`${fade}`}
			data-aos-easing="ease-in-out"
			data-aos-delay={`${delay ? delay : '100'}`}
			data-aos-once="false"
			data-aos-duration="1000"
			data-aos-mirror="true"
			className="w-auto mx-0  items-center flex flex-col md:flex-row"
		>
			<div className="md:w-1/2 flex px-4 sm:px-0">{primarySlot}</div>
			<div
				className={`mt-10 lg:mt-0 w-full md:w-1/2 ${
					reverseOrder && `order-last md:order-first`
				}`}
			>
				{secondarySlot}
			</div>
		</div>
	</section>
);

export default SplitSection;
