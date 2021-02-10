import React from 'react';

import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import image from '../../images/landing_image-min.jpg';

const Landing = () => {
	return (
		<div id="#" className="h-auto ">
			{/* landing title and header image */}
			<div
				className="relative w-full max-h-screen h-108 shadow-md "
				style={{
					background: `linear-gradient(
					rgba(0, 0, 0, 0.5),
					rgba(0, 0, 0, 0.5)
				  ),url(${image})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
				}}
			>
				<h1 className="absolute bottom-60 pl-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary font-medium tracking-wide">
					Plannit's Event Planning
				</h1>
				<h2 className="absolute w-2/3 sm:w-full bottom-44  sm:bottom-48 text-lg lg:text-2xl text-gray-light tracking-wider font-semibold antialiased  text-left pl-8 ">
					Birthdays, Weddings, Company Outings
				</h2>
				<h2 className="absolute bottom-28 sm:bottom-40 text-lg lg:text-2xl text-gray-light tracking-wider font-semibold antialiased w-full text-left pl-8 ">
					Plannit provides the convenience of creating your own event.
				</h2>
				{/* <h2 className="absolute top-56 text-xl lg:text-2xl text-gray-light tracking-wider font-semibold antialiased w-full text-left pl-8 ">
					Plannit provides the convenience
				</h2>
				<h2 className="absolute bottom-20 text-xl lg:text-2xl text-gray-light tracking-wider font-semibold antialiased w-full text-left pl-8 ">
					of creating your own event.
				</h2> */}
				{/* TODO
				 add a button in the middle of the image 
				 says start planning
				 */}
				<div className="absolute bottom-10 right-12 md:right-20 text-lg">
					<Link
						to="/event-builder"
						className=" text-gray-light shadow-md uppercase rounded-sm bg-primary text-bold p-3 mx-1 tracking-wider text-base "
					>
						start planning
					</Link>
					<NavHashLink
						smooth
						to="/#about"
						className="text-gray-darkest shadow-md  uppercase rounded-sm bg-secondary text-bold mx-1 p-3 tracking-wider text-base"
					>
						learn more
					</NavHashLink>
				</div>
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
