import React from 'react';

const StepSection = ({ step, title, description, reverse }) => {
	return (
		<div
			data-aos="fade-up"
			data-aos-easing="ease-in-out"
			data-aos-delay="100"
			data-aos-once="false"
			data-aos-duration="500"
			data-aos-mirror="true"
			className={`mb-8 flex justify-between items-center w-full ${
				reverse && 'flex-row-reverse'
			}`}
		>
			<div className="order-1 w-5/12"></div>
			<div className="z-20 flex items-center order-1 bg-secondary shadow-xl w-12 h-12 rounded-full">
				<h1 className="mx-auto font-bold text-2xl text-gray-lightest">{step}</h1>
			</div>
			<div className="order-1 bg-primary bg-opacity-80 rounded-lg shadow-sm w-5/12 px-6 py-4">
				<h3 className="mb-3 font-medium capitalize tracking-wide text-secondary text-xl">
					{title}
				</h3>
				<p className="text-sm leading-snug tracking-wide text-gray-light text-opacity-100">
					{description}
				</p>
			</div>
		</div>
	);
};

export default React.memo(StepSection);
