import React from 'react';

import image from '../../images/landing_image.jpg';

const Landing = () => {
	return (
		<div id="#" className="h-auto bg-gray-light">
			<div
				className="sm:hidden bg-cover bg-no-repeat max-h-screen"
				style={{ backgroundImage: `url(${image})`, height: '900px' }}
			>
				<h1 className="mt-auto mb-0">Plannit's Event Planning Company</h1>
			</div>
			<div
				className="hidden sm:block bg-cover bg-no-repeat max-h-screen"
				style={{ backgroundImage: `url(${image})`, height: '900px' }}
			>
				<h1 className="mt-auto mb-0">Plannit's Event Planning Company</h1>
			</div>
			<div className="flex flex-row text-center ">
				<div className="w-1/2 h-5/6 py-8 my-auto flex flex-col justify-center item-center bg-secondary shadow-md rounded-r-lg">
					<h1 className="text-black text-xl uppercase font-bold ml-20 text-left w-3/4 ">
						Extraordinary moments are created together.
					</h1>
					<h2 className="text-black uppercase font-bold ml-20 text-left ">
						Planning an event has never been easy.
					</h2>
					<h2 className="text-black uppercase font-bold ml-20 text-left ">
						Plannit provides the convenience of creating your own event.
					</h2>
					<div className="flex flex-col justify-center items-center">
						<button className="border-primary border-2 w-1/2 mx-auto">
							What if Offer
						</button>
						<button className="border-primary border-2 w-1/2 mx-auto">
							start building your event
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
