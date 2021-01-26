import React from 'react';



const SplitSection = ({ primarySlot, secondarySlot, reverseOrder }) => (
	<section className="">
		<div
			data-aos="fade-right"
			data-aos-easing="ease-in-out"
			data-aos-delay="300"
			data-aos-once="false"
			data-aos-duration="1000"
			data-aos-mirror="true"
			className="w-auto mx-0  items-center flex flex-col lg:flex-row"
		>
			<div className="lg:w-1/2">{primarySlot}</div>
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
