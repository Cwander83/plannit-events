import React from 'react';

const SplitSection = ({ primarySlot, secondarySlot, reverseOrder }) => (
	<section className="">
		<div className="w-auto mx-0  items-center flex flex-col lg:flex-row">
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
