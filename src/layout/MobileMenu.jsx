import React, { useState, useEffect, memo } from 'react';

// navigation packages
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

// utils
import { scrollWithOffset } from '../utils/menu.js';

// images / logos
import Logo from '../images/icons/logo_header-2.png';
import Logo2 from '../images/icons/footer_logo_4.png';

// headless UI
import { Menu, Transition } from '@headlessui/react';

function MobileMenu() {
	console.log('menu rendered');
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
					? 'bg-opacity-0 text-gray-lightest py-4 px-3'
					: 'bg-opacity-90 text-gray-darkest shadow-md py-2 px-5'
			} fixed z-50 top-0 md:hidden transition-all duration-500 w-full flex items-center justify-between   bg-white`}
		>
			<NavHashLink
				smooth
				scroll={(el) => scrollWithOffset(el, 50)}
				to="/#"
				className=""
			>
				<img
					className="w-20"
					src={`${!header ? Logo : Logo2}`}
					alt="Plannit event company"
				/>
			</NavHashLink>
			<div className="relative inline-block text-left">
				<Menu>
					{({ open }) => (
						<>
							<span className="">
								<Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5  transition duration-250 ease-in-out rounded-md hover:text-gray-dark focus:outline-none focus:border-primary   active:text-gray-darkest">
									{!open ? (
										<svg
											className="w-7 h-7"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
												clipRule="evenodd"
											/>
										</svg>
									) : (
										<svg
											className="w-7 h-7"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
												clipRule="evenodd"
											/>
										</svg>
									)}
								</Menu.Button>
							</span>

							<Transition
								show={open}
								enter="transition ease-out duration-200"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items
									static
									className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white  divide-y divide-gray-100 rounded-md shadow-lg outline-none"
								>
									{/* <div className="px-4 py-3">
										<p className="text-sm leading-5">Signed in as</p>
										
									</div> */}

									<div className="py-1">
										<Menu.Item>
											<NavHashLink
												smooth
												scroll={(el) => scrollWithOffset(el, 50)}
												to="/#categories"
												className=" text-gray-darkest flex justify-between w-full px-6 py-2 text-sm leading-5 text-left border-b-2 border-gray-lightest"
											>
												Services
											</NavHashLink>
										</Menu.Item>
										<Menu.Item>
											<NavHashLink
												smooth
												scroll={(el) => scrollWithOffset(el, 50)}
												to="/#how-to-plan"
												className=" text-gray-darkest flex justify-between w-full px-6 py-2 text-sm leading-5 text-left"
											>
												How to Plan
											</NavHashLink>
										</Menu.Item>
										<Menu.Item>
											<NavHashLink
												smooth
												scroll={(el) => scrollWithOffset(el, 50)}
												to="/#about"
												className=" text-gray-darkest flex justify-between w-full px-6 py-2 text-sm leading-5 text-left"
											>
												About Us
											</NavHashLink>
										</Menu.Item>

										<Menu.Item>
											<NavLink
												to="/event-builder"
												className=" text-gray-darkest flex justify-between w-full px-6 py-2 text-sm leading-5 text-left"
											>
												Event Builder
											</NavLink>
										</Menu.Item>
										<Menu.Item>
											<NavLink
												to="/partner-form"
												className=" text-gray-darkest flex justify-between w-full px-6 py-2 text-sm leading-5 text-left"
											>
												Plannit Partnership
											</NavLink>
										</Menu.Item>
									</div>

									{/* <div className="py-1">
										<Menu.Item>
											<NavLink
												to="/partner-form"
												className="bg-gray-lightest text-gray-darkest flex w-full px-4 py-2 text-sm leading-5 text-left"
											>
												<svg
													className="w-4 h-4"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
														clipRule="evenodd"
													/>
													<path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
												</svg>
												Partner with Plannit
											</NavLink>
										</Menu.Item>
									</div> */}
								</Menu.Items>
							</Transition>
						</>
					)}
				</Menu>
			</div>
		</header>
	);
}

export default memo(MobileMenu);
