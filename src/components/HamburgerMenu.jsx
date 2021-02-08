import React from 'react';

// navigation packages
import { NavLink, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

// utils
import { links } from '../utils/menu.js';

// headless UI
import { Menu } from '@headlessui/react';

export default function HamburgerMenu() {
	return (
		<Menu className="mr-9 w-12 lg:hidden">
			{({ open }) => (
				<>
					<Menu.Button className="lg:hidden outline-none w-8 mb-3 md:mb-0 md:mr-9 md:w-12 active:outline-none focus:outline-none">
						<svg
							style={{ transition: 'all .60s ease' }}
							className={`${open ? 'transform rotate-90' : ''}  outline-none`}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</Menu.Button>

					<Menu.Items className="absolute z-10 mx-auto md:right-20 top-24 md:top-16 w-56 mt-2  bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
						<h4 className="mx-auto py-4 text-center bg-primary text-secondary text-lg">
							Navigation
						</h4>
						<div className="relative p-6 flex flex-col">
							{links.map((link, index) => {
								return (
									<Menu.Item key={index}>
										{({ active }) => (
											<NavHashLink
												smooth
												to={link.location}
												className={`${
													active
														? 'bg-gray-light text-gray-light'
														: 'text-gray-dark'
												} 
												 flex justify-between w-full px-4 py-2 text-md leading-5 text-left`}
											>
												{link.title}
											</NavHashLink>
										)}
									</Menu.Item>
								);
							})}
							<Menu.Item>
								{({ active }) => (
									<NavLink
										className={`${
											active
												? 'bg-gray-light text-gray-light'
												: 'text-gray-dark'
										} 
												 flex justify-between w-full px-4 py-2 text-md leading-5 text-left active:underline`}
										to="/event-builder"
									>
										Event Builder
									</NavLink>
								)}
							</Menu.Item>
						</div>
						<Menu.Item>
							<Link
								to="/partner-form"
								className="w-full text-center  text-secondary text-sm  tracking-wider flex flex-row justify-center p-3 bg-primary"
							>
								<p>Partner with Plannit</p>
							</Link>
						</Menu.Item>
					</Menu.Items>
				</>
			)}
		</Menu>
	);
}
