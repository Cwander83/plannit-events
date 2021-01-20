import React, { useEffect, useState } from 'react';

import image from '../../images/landing_image.jpg';
import image2 from '../../images/small-2.jpg';

const Landing = () => {
	const [width, setWidth] = useState(null);

	useEffect(() => {
		setWidth({ width: window.innerWidth });
	}, []);
	return (
		<div id="#" className="h-auto ">
			{/* landing title and header image */}
			<div
				className="relative w-full max-h-screen h-96 shadow-md"
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
				<h1 className="absolute bottom-18 left-6 md:bottom-12 md:left-14 text-xl sm:text-2xl md:text-4xl text-gray-lightest font-medium tracking-wide">
					Plannit's Event Planning
				</h1>
				<h2 className="absolute bottom-4 text-xl text-secondary font-medium antialiased w-full text-center">
					Plannit provides the convenience of creating your own event.
				</h2>
			</div>
			{/* information and links */}

			<div className="flex flex-row  w-full mt-6">
				<div className=" flex flex-col justify-center item-center ml-10 sm:ml-12 md:ml-36">
					<h1 className="text-black text-xl uppercase font-bold text-left">
						Extraordinary moments are created together.
					</h1>
					<h2 className="text-black uppercase font-bold text-center">
						Planning an event has never been easy.
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Landing;
