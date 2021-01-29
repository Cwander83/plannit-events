import React from 'react';

import image from '../../images/landing_image.jpg';

const Landing = () => {
	return (
		<div id="#" className="h-auto ">
			{/* landing title and header image */}
			<div
				className="relative w-full max-h-screen h-108 lg:h-120 shadow-md "
				style={{
					background: `linear-gradient(
					rgba(0, 0, 0, 0.5),
					rgba(0, 0, 0, 0.5)
				  ),url(${image})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: "fixed"
				}}
			>
				{/* <h1 className="absolute bottom-40 left-6 md:bottom-30 md:left-14 text-xl sm:text-2xl md:text-4xl text-gray-lightest font-medium tracking-wide">
					Plannit's Event Planning
				</h1> */}
				<h2 className="absolute bottom-32 text-xl lg:text-2xl text-gray-light tracking-wider font-semibold antialiased w-full text-left pl-8 sm:pl-12 pr-3 lg:pl-20">
					Plannit provides the convenience
				</h2>
				<h2 className="absolute bottom-24 text-xl lg:text-2xl text-gray-light tracking-wider font-semibold antialiased w-full text-left pl-8 sm:pl-12 pr-3 lg:pl-20">
					of creating your own event.
				</h2>
				{/* TODO
				 add a button in the middle of the image 
				 says start planning
				 */}
				<button className="absolute bottom-10 left-12 sm:left-28 text-secondary shadow-md uppercase rounded-sm bg-primary text-semibold px-2 py-2 tracking-wider text-sm ">
					start planning
				</button>
				<button className="absolute bottom-10  left-52 sm:left-72 text-primary shadow-md  uppercase rounded-sm bg-secondary text-semibold  px-4 py-2 tracking-wider text-sm">
					learn more
				</button>
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
