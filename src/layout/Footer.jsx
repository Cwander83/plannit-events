import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import { links } from '../utils/menu.js';

// icon
import Logo from '../images/icons/footer_logo_4.png';

const Footer = () => {
	return (
		<footer className=" w-full flex flex-col static bottom-0 sm:flex-row justify-evenly items-center bg-primary py-6 sm:py-2.5">
			<div className="flex flex-col text-secondary text-lg text-medium sm:text-left h-full my-4 tracking-wider">
				<h3 className="text-gray-light text-lg uppercase mb-4 border-b-2 border-gray-dark pl-3">
					site map
				</h3>
				{links.map((link, index) => {
					return (
						<React.Fragment key={index}>
							<NavHashLink
								smooth
								key={index}
								to={link.location}
								className="mx-1"
							>
								{link.title}
							</NavHashLink>
						</React.Fragment>
					);
				})}
				<NavLink className="mx-1" to="/event-builder">
					Event Builder
				</NavLink>
				<NavLink className="mx-1" to="/partner-form">
					Plannit Partnership
				</NavLink>
			</div>

			<img
				className=""
				src={Logo}
				alt="Plannit event planning company Orlando, Florida"
			/>
			<div className="text-center text-secondary sm:text-center">
				<h2>Copyright &copy; 2021 Plannit Events LLC.</h2>
				<h2>All Rights Reserved</h2>
				<h2>Site built by </h2>
			</div>
		</footer>
	);
};

export default memo(Footer);
