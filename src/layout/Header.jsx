import React, { memo } from 'react';

import { NavLink, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

// icon
import Logo from '../images/icons/logo_header.png';

import HamburgerMenu from '../components/HamburgerMenu.jsx';

import { links } from '../utils/menu.js';

const Header = () => {
	return (
		<header
			className="w-full bg-white flex flex-col justify-center shadow items-center
		 md:flex-row md:justify-between md:items-center"
		>
			<img
				className="w-24 md:w-36 md:ml-9"
				src={Logo}
				alt="Plannit event company"
			/>
			<div className="hidden lg:block text-primary text-xl">
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
							<span className="text-gray-light">/</span>
						</React.Fragment>
					);
				})}
				<NavLink className="mx-1" to="/event-builder">
					Event Builder
				</NavLink>
			</div>

			<Link
				to="/partner-form"
				className="hidden shadow-lg mr-9 text-secondary text-sm rounded tracking-wider lg:flex flex-row p-3 bg-primary
		  hover:bg-opacity-80 hover:text-opacity-100 active:bg-opacity-100"
			>
				<p>Partner with</p>
				<p>&nbsp;Plannit</p>
			</Link>

			<HamburgerMenu />
		</header>
	);
};
export default memo(Header);
