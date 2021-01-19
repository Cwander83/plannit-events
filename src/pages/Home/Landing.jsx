import React from 'react';

import image from '../../images/landing_image.jpg';

const Landing = () => {
	return (
		<div id="#" className="h-auto flex flex-row">
			<div className="w-1/3">
				<h1 className="text-secondary">
					Extraordinary moments are created together.
				</h1>
				<h2 className="text-secondary">
					Planning an event has never been easy.
				</h2>
				<h2 className="text-secondary">
					Plannit provides the convenience of creating your own event.
				</h2>
			</div>
			<div className="w-2/3">
				<img className=" rounded-lg ml-auto mr-8 w-3/4 mt-4 shadow-md" src={image} alt="" />
			</div>
		</div>
	);
};

export default Landing;
