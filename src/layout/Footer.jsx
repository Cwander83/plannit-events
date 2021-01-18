import React, { memo } from 'react';

import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import { links } from '../utils/menu.js';

// icon
import Logo from '../images/icons/footer_logo_4.png';

const Footer = () => {
	return (
		<footer className="w-full flex flex-col sm:flex-row justify-start items-center bg-primary py-2.5">
			<div className="w-full sm:w-1/3 text-center h-full">
				<div className="flex flex-col text-secondary text-lg w-full sm:w-3/4 mx-auto text-medium sm:text-left h-full my-4 tracking-wider">
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
					<Link className="mx-1" to="/event-builder">
						Event Builder
					</Link>
				</div>
			</div>
			<div className=" w-10/12 sm:w-2/3 h-full flex flex-col sm:flex-row ">
				<img
					className=" w-48"
					src={Logo}
					alt="Plannit event planning company Orlando, Florida"
				/>
				<div className="text-center text-secondary sm:text-left sm:self-end pb-4">
					<h2>Copyright Plannit Events LLC. 2021</h2>
					<h2>Site built by Chris Wander</h2>
				</div>
			</div>
		</footer>
	);
};

export default memo(Footer);
