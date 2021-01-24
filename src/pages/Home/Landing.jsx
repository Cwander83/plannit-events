import React from 'react';

import image from '../../images/landing_image.jpg';

const Landing = () => {
	return (
		<div id="#" className="h-auto ">
			{/* landing title and header image */}
			<div
				className="relative w-full max-h-screen h-108 lg:h-120 shadow-md"
				style={{
					background: `linear-gradient(
					rgba(0, 0, 0, 0.5),
					rgba(0, 0, 0, 0.5)
				  ),url(${image}) no-repeat`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<h1 className="absolute bottom-20 left-6 md:bottom-12 md:left-14 text-xl sm:text-2xl md:text-4xl text-gray-lightest font-medium tracking-wide">
					Plannit's Event Planning
				</h1>
				<h2 className="absolute bottom-4 text-lg lg:text-xl text-secondary font-medium antialiased w-full text-left pl-12 pr-3 lg:pl-20">
					Plannit provides the convenience of creating your own event.
				</h2>
			</div>
			{/* information and links */}

			<div className="flex flex-row  w-full my-10 lg:px-20">
				<div className=" flex flex-col justify-center item-center mx-8">
					<h1 className="text-black text-xl lg:text-3xl tracking-wider uppercase font-bold text-left ">
						Extraordinary moments are created together.
					</h1>
					<p className="transition-all ease-in-out duration-1000 transform translate-x-0 text-black text-lg lg:text-xl tracking-wide mt-5">
						Plannit is an all-inclusive event-planning business where our
						customers come to us as a single source to plan their extraordinary
						moment. Extraordinary moments are created by each customer’s
						individuality &#38; uniqueness.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
