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
			data-aos-delay={`${delay ? delay : '300'}`}
			data-aos-once="false"
			data-aos-duration="1000"
			data-aos-mirror="true"
			className="w-auto mx-0  items-center flex flex-col lg:flex-row"
		>
			<div className="lg:w-1/2 flex ">{primarySlot}</div>
			<div
				className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${
					reverseOrder && `order-last lg:order-first`
				}`}
			>
				{secondarySlot}
			</div>
		</div>
	</section>
);

export default SplitSection;
