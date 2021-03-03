import React, { memo, useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

// icon
import Logo from '../images/icons/logo_header-2.png';
import Logo2 from '../images/icons/footer_logo_4.png';

import { scrollWithOffset } from '../utils/menu.js';

const Header = () => {
	const [header, setHeader] = useState(true);

	const listenScrollEvent = () => {
		window.scrollY > 10 ? setHeader(false) : setHeader(true);
	};

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);
	}, []);

	return (
		<header
			className={`${
				header
					? 'bg-opacity-0 text-gray-light py-8'
					: 'bg-opacity-90 text-primary shadow-md py-3'
			} hidden md:flex fixed top-0 transition-all duration-500 z-10 w-full bg-white  px-10 items-center flex-row justify-center`}
		>
			<NavHashLink
				smooth
				to="/#categories"
				className="mx-5"
				scroll={(el) => scrollWithOffset(el, 50)}
			>
				Services
			</NavHashLink>
			<span className="text-gray-dark">&bull;</span>
			<NavHashLink
				smooth
				to="/#how-to-plan"
				className="mx-5"
				scroll={(el) => scrollWithOffset(el, 50)}
			>
				How to Plan
			</NavHashLink>
			<span className="text-gray-dark">&bull;</span>

			<NavHashLink
				smooth
				to="/#"
				className="mx-5"
				scroll={(el) => scrollWithOffset(el, 50)}
			>
				<img
					className="w-20"
					src={`${!header ? Logo : Logo2}`}
					alt="Plannit event company"
				/>
			</NavHashLink>

			<span className="text-gray-dark">&bull;</span>
			{/* // TODO replace with builder when done */}
			{/* <NavLink className="mx-5" to="/#"> */}
			<NavLink className="mx-5" to="/event-builder">
				Event Builder
			</NavLink>
			<span className="text-gray-dark">&bull;</span>
			<NavHashLink smooth to="/#about" className="mx-5">
				About Us
			</NavHashLink>

			{/* <Link
					to="/partner-form"
					className="p-2 rounded-full border-2 border-primary"
				>
					Partner with Plannit
				</Link> */}
		</header>
	);
};
export default memo(Header);
